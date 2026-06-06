const fs = require('fs');
const path = require('path');

const replacements = {
  'process.env.REACT_APP_API_URL': '"https://stocksphere-z675.onrender.com"',
  'process.env.REACT_APP_DASHBOARD_URL': '"https://stock-sphere-v5xd.vercel.app"',
  'process.env.REACT_APP_FRONTEND_URL': '"https://stock-sphere-kbz9.vercel.app"'
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'frontend', 'src'));
processDirectory(path.join(__dirname, 'dashboard', 'src'));
console.log('Replacement complete.');
