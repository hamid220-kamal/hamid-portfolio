const fs = require('fs');
const path = require('path');

const targetColors = [
  '#94a3b8',
  '#64748b',
  '#cbd5e1',
  '#475569',
  'var(--text-secondary)',
  'var(--text-muted)'
];

const replacement = '#ffffff';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  targetColors.forEach(color => {
    // Escape the string for regex
    const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapeRegex(color), 'gi');
    content = content.replace(regex, replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
