const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const replacements = [
  { search: /bg-\[\#050A18\]/g, replace: 'bg-midnight' },
  { search: /from-\[\#050A18\]/g, replace: 'from-midnight' },
  { search: /via-\[\#050A18\]/g, replace: 'via-midnight' },
  { search: /to-\[\#050A18\]/g, replace: 'to-midnight' },
  { search: /bg-brand-dark/g, replace: 'bg-midnight' },
  { search: /brand-primary/g, replace: 'indigo-pulse' },
  { search: /brand-accent/g, replace: 'cyan-neon' },
  { search: /brand-secondary/g, replace: 'purple-punch' },
  { search: /bg-\[\#030610\]/g, replace: 'bg-black/90' },
  { search: /from-\[\#030610\]/g, replace: 'from-black/90' },
  { search: /to-\[\#030610\]/g, replace: 'to-black/90' },
  { search: /bg-brand-midnight/g, replace: 'bg-black/90' },
  { search: /shadow-\[0_0_15px_rgba\(79,70,229,0\.5\)\]/g, replace: 'shadow-glow-indigo' },
  { search: /\bglass\b/g, replace: 'glass-card-premium' },
  { search: /text-4xl md:text-5xl font-bold mb-4/g, replace: 'heading-section' },
  { search: /text-4xl md:text-5xl font-black mb-4/g, replace: 'heading-section' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Skip files we already manually refactored (Hero, ProjectsGallery, EnrollmentForm)
      if (['Hero.jsx', 'ProjectsGallery.jsx', 'EnrollmentForm.jsx'].includes(file)) {
        continue;
      }
      
      let originalContent = content;
      replacements.forEach(({ search, replace }) => {
        content = content.replace(search, replace);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDir(componentsDir);

// Also do App.jsx
const appProps = path.join(__dirname, 'src', 'App.jsx');
if (fs.existsSync(appProps)) {
    let content = fs.readFileSync(appProps, 'utf8');
    let originalContent = content;
    replacements.forEach(({ search, replace }) => {
        content = content.replace(search, replace);
    });
    if (content !== originalContent) {
        fs.writeFileSync(appProps, content, 'utf8');
        console.log(`Updated App.jsx`);
    }
}
