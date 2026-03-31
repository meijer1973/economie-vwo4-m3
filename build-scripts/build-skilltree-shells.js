#!/usr/bin/env node
/**
 * build-skilltree-shells.js
 *
 * Generates reken-spel HTML files from the original economie-skill-tree.jsx.
 * Each paragraph gets its own HTML with React via CDN + the JSX component,
 * filtered to show only the relevant skills for that paragraph.
 *
 * Run: node build-scripts/build-skilltree-shells.js
 */

const fs = require('fs');
const path = require('path');

const MODULE_ROOT = path.resolve(__dirname, '..');
const JSX_PATH = path.join(MODULE_ROOT, 'economie-skill-tree.jsx');

// ── Paragraph definitions ──────────────────────────────────────────

// F5 (oppervlakte driehoek) en F6 (afgeleide) zijn nu laag 1.
// F5 wordt alleen toegevoegd bij paragrafen met surplus (S1).
// F6 wordt alleen toegevoegd bij paragrafen met MO/MK (B5/B6).
const PARAGRAPHS = [
    { parNr:'3.1.1', name:'Markt en marktstructuur', skills:['F1','F2','F3','F4'] },
    { parNr:'3.1.2', name:'Marktvormen', skills:['F1','F2','F3','F4'] },
    { parNr:'3.1.3', name:'Toepassen', skills:['F1','F2','F3','F4'] },
    { parNr:'3.2.1', name:'Marktevenwicht', skills:['F1','F2','F3','F4','F5','B1','S1'] },
    { parNr:'3.2.2', name:'Volkomen concurrentie', skills:['F1','F2','F3','F4','F5','F6','B1','B2','B3','B4','B5','B6','B7','S1','S2','S3','S4','E5'] },
    { parNr:'3.2.3', name:'Monopolie', skills:['F1','F2','F3','F4','F5','F6','B1','B2','B3','B5','B6','S1','S2','S3','E7'] },
    { parNr:'3.2.4', name:'Oligopolie', skills:['F1','F2','F3','F4'] },
    { parNr:'3.2.5', name:'Monopolistische concurrentie', skills:['F1','F2','F3','F4','F6','B2','B3','B5','B6','B7','S2','S3','S4','E1','E5'] },
    { parNr:'3.2.6', name:'Marktvormen en hun economische doelmatigheid', skills:['F1','F2','F3','F4','F5','F6','B1','B2','B3','B5','B6','B7','S1','S2','S3','S4','E1','E2','E5','E7'] },
    { parNr:'3.2.7', name:'Toepassen', skills:null }, // all skills
    { parNr:'3.3.1', name:'De rol van de overheid', skills:['F1','F2','F3','F4'] },
    { parNr:'3.3.2', name:'Overheidsbeleid', skills:['F1','F2','F3','F4','F5','B1','S1','S5','E4'] },
    { parNr:'3.3.3', name:'Collectieve goederen', skills:['F1','F2','F3','F4'] },
    { parNr:'3.3.4', name:'Toepassen', skills:['F1','F2','F3','F4','F5','B1','S1','S5','E4','E6'] },
    { parNr:'3.4.1', name:'Internationale handel', skills:['F1','F2','F3','F4'] },
    { parNr:'3.4.2', name:'Inter-industri\u00EBle handel', skills:['F1','F2','F3','F4'] },
    { parNr:'3.4.3', name:'Intra-industri\u00EBle handel', skills:['F1','F2','F3','F4'] },
    { parNr:'3.4.4', name:'Internationale productieketens', skills:['F1','F2','F3','F4'] },
    { parNr:'3.4.5', name:'Internationaal handelsbeleid', skills:['F1','F2','F3','F4','F5','B1','S1','S5','E4','E6'] },
    { parNr:'3.4.6', name:'Toepassen', skills:['F1','F2','F3','F4','F5','B1','S1','S5','E4','E6'] },
];

// ── Find paragraph directory ───────────────────────────────────────

function findParagraphDir(parNr) {
    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory() && entry.name.startsWith(parNr + ' ')) {
                return path.join(dir, entry.name);
            }
            if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('node_')) {
                const result = walk(path.join(dir, entry.name));
                if (result) return result;
            }
        }
        return null;
    }
    return walk(MODULE_ROOT);
}

// ── Transform JSX for browser ──────────────────────────────────────

function transformJSX(jsxSource, skillIds, storageKey) {
    let code = jsxSource;

    // Remove ES module imports
    code = code.replace(/^import\s+\{[^}]+\}\s+from\s+["'][^"']+["'];?\s*$/gm, '');

    // Replace React hooks with React.xxx
    code = code.replace(/\buseState\b/g, 'React.useState');
    code = code.replace(/\buseEffect\b/g, 'React.useEffect');
    code = code.replace(/\buseCallback\b/g, 'React.useCallback');
    code = code.replace(/\buseRef\b/g, 'React.useRef');

    // Replace lucide-react icons with simple SVG components
    const iconDefs = `
const ArrowLeft = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>;
const Trophy = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>;
const Lightbulb = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const RotateCcw = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>;
`;

    // Replace the entire Load progress useEffect block
    code = code.replace(
        /\/\/ Load progress\s*\n\s*(?:React\.)?useEffect\(\(\) => \{\s*\(async \(\) => \{\s*try \{\s*const res = await window\.storage\.get\("econ-game-stars"\);\s*if \(res\?\.value\) setStars\(JSON\.parse\(res\.value\)\);\s*\} catch\(e\) \{\}\s*setLoaded\(true\);\s*\}\)\(\);\s*\}, \[\]\);/,
        `// Load progress\n  React.useEffect(() => {\n    try {\n      const saved = localStorage.getItem("${storageKey}");\n      if (saved) setStars(JSON.parse(saved));\n    } catch(e) {}\n    setLoaded(true);\n  }, []);`
    );
    // Replace the entire Save progress useEffect block
    code = code.replace(
        /\/\/ Save progress\s*\n\s*(?:React\.)?useEffect\(\(\) => \{\s*if \(!loaded\) return;\s*\(async \(\) => \{\s*try \{ await window\.storage\.set\("econ-game-stars", JSON\.stringify\(stars\)\); \} catch\(e\) \{\}\s*\}\)\(\);\s*\}, \[stars, loaded\]\);/,
        `// Save progress\n  React.useEffect(() => {\n    if (!loaded) return;\n    try { localStorage.setItem("${storageKey}", JSON.stringify(stars)); } catch(e) {}\n  }, [stars, loaded]);`
    );

    // Replace export default
    code = code.replace('export default function EconGame()', 'function EconGame()');

    // Filter SKILLS if needed
    if (skillIds) {
        // First do the replacements in the component body (before inserting the filter block)
        // Only replace standalone SKILLS references, not ALL_SKILLS
        code = code.replace(/\bSKILLS\.filter\b/g, 'FILTERED_SKILLS.filter');
        code = code.replace(/\bSKILLS\.length\b/g, 'FILTERED_SKILLS.length');

        // Now insert the filter block (after replacements, so ALL_SKILLS.filter stays intact)
        const filterBlock = `
const ALL_SKILLS = SKILLS;
const ACTIVE_IDS = new Set(${JSON.stringify(skillIds)});
const FILTERED_SKILLS = ALL_SKILLS.filter(s => ACTIVE_IDS.has(s.id)).map(s => ({
    ...s, needs: s.needs.filter(n => ACTIVE_IDS.has(n))
}));
`;
        code = code.replace('const LAYER_NAMES', filterBlock + 'const LAYER_NAMES');
    }

    return iconDefs + '\n' + code;
}

// ── Generate HTML ──────────────────────────────────────────────────

function generateHTML(parNr, parName, jsxCode) {
    return `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${parNr} ${parName} \u2013 Wiskundevaardigheden</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>* { margin:0; padding:0; box-sizing:border-box; }</style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
${jsxCode}

ReactDOM.createRoot(document.getElementById('root')).render(<EconGame />);
    </script>
</body>
</html>`;
}

// ── Main ───────────────────────────────────────────────────────────

function main() {
    console.log('Generating reken-spel HTML files from economie-skill-tree.jsx...\\n');

    if (!fs.existsSync(JSX_PATH)) {
        console.error('ERROR: ' + JSX_PATH + ' not found');
        process.exit(1);
    }

    const jsxSource = fs.readFileSync(JSX_PATH, 'utf8');
    let success = 0, errCount = 0;

    for (const par of PARAGRAPHS) {
        try {
            const parDir = findParagraphDir(par.parNr);
            if (!parDir) {
                console.error('  SKIP: No directory for ' + par.parNr);
                errCount++;
                continue;
            }

            const oefenDir = path.join(parDir, '3. Oefenen');
            if (!fs.existsSync(oefenDir)) {
                fs.mkdirSync(oefenDir, { recursive: true });
            }

            const storageKey = 'skilltree_' + par.parNr;
            const jsxCode = transformJSX(jsxSource, par.skills, storageKey);
            const html = generateHTML(par.parNr, par.name, jsxCode);
            const outPath = path.join(oefenDir, par.parNr + ' ' + par.name + ' \u2013 wiskundevaardigheden.html');
            fs.writeFileSync(outPath, html, 'utf8');

            const size = fs.statSync(outPath).size;
            const skillCount = par.skills ? par.skills.length : 'all';
            console.log('  OK: ' + par.parNr + ' (' + skillCount + ' skills, ' + Math.round(size/1024) + ' KB)');
            success++;
        } catch (err) {
            console.error('  ERROR: ' + par.parNr + ': ' + err.message);
            errCount++;
        }
    }

    console.log('\\nDone: ' + success + ' files generated, ' + errCount + ' errors.');
}

main();
