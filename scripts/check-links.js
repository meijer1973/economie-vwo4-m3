#!/usr/bin/env node
/**
 * check-links.js — Verify all internal links and shared resource references
 * within the quiz HTML files. Runs locally (no HTTP server needed).
 *
 * Usage: node scripts/check-links.js
 */

const fs = require('fs');
const path = require('path');

const MODULE_ROOT = path.resolve(__dirname, '..');

let errors = 0;
let checked = 0;

function findHtmlFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findHtmlFiles(full));
        } else if (entry.name.endsWith('.html')) {
            results.push(full);
        }
    }
    return results;
}

function checkFile(htmlPath) {
    const content = fs.readFileSync(htmlPath, 'utf8');
    const dir = path.dirname(htmlPath);
    const rel = path.relative(MODULE_ROOT, htmlPath);

    // Find all src="..." and href="..." references (local only)
    const refRegex = /(?:src|href)="([^"]+)"/g;
    let match;
    while ((match = refRegex.exec(content)) !== null) {
        const ref = match[1];
        // Skip external URLs, anchors, javascript:, and false positives from inline JS
        if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('#') || ref.startsWith('javascript:') || ref.startsWith('mailto:') || ref.startsWith('data:')) continue;
        if (ref.includes('encodeURIComponent') || ref.includes('document.') || ref.includes('function') || ref.trim().startsWith('+')) continue;

        // Decode URL-encoded characters (e.g. %20 → space, %E2%80%93 → –)
        const decoded = decodeURIComponent(ref);
        const resolved = path.resolve(dir, decoded);
        checked++;

        if (!fs.existsSync(resolved)) {
            console.error(`  ✗ BROKEN: ${rel} → ${ref}`);
            console.error(`    Expected at: ${resolved}`);
            errors++;
        }
    }
}

// Main
console.log('Checking local file references in all HTML files...\n');

const htmlFiles = findHtmlFiles(MODULE_ROOT);
console.log(`Found ${htmlFiles.length} HTML files.\n`);

for (const file of htmlFiles) {
    checkFile(file);
}

console.log(`\nChecked ${checked} references across ${htmlFiles.length} files.`);

if (errors > 0) {
    console.error(`\n✗ Found ${errors} broken references.`);
    process.exit(1);
} else {
    console.log('\n✓ All local references are valid.');
    process.exit(0);
}
