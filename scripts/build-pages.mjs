import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
execFileSync(process.execPath,['node_modules/vite/bin/vite.js','build','--base=/human-atlas-zh/','--outDir=../docs'],{stdio:'inherit'});
fs.writeFileSync('docs/.nojekyll','');
