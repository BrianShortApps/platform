import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const platformRoot = path.resolve(__dirname, '../../../..');
const standardsSource = path.join(platformRoot, 'standards');
const docsRoot = path.join(platformRoot, 'docs');
const standardsTarget = path.join(docsRoot, 'standards');

console.log('');
console.log('============================================');
console.log(' Brian Short Apps - Documentation Sync');
console.log('============================================');
console.log('');
console.log(`Platform Root: ${platformRoot}`);

if (!fs.existsSync(standardsSource)) {
  throw new Error(`Standards folder not found: ${standardsSource}`);
}

if (!fs.existsSync(docsRoot)) {
  fs.mkdirSync(docsRoot, { recursive: true });
}

if (fs.existsSync(standardsTarget)) {
  fs.rmSync(standardsTarget, { recursive: true, force: true });
}

fs.cpSync(standardsSource, standardsTarget, { recursive: true });

console.log('');
console.log('[OK] Standards synchronized successfully.');
console.log('');