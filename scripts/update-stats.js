import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STATS_FILE = path.join(__dirname, '../src/data/stats.ts');

async function fetchInstagramFollowers() {
  try {
    // Try fetching public IG page or API
    const res = await fetch('https://www.instagram.com/novosmensageiros/?__a=1&__d=dis', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (res.ok) {
      const data = await res.json();
      const count = data?.graphql?.user?.edge_followed_by?.count || data?.user?.follower_count;
      if (count && typeof count === 'number') {
        const formatted = (count / 1000).toFixed(1).replace('.', ',') + ' mil';
        return formatted;
      }
    }
  } catch (e) {
    console.log('Fetching IG API fallback attempt...');
  }

  try {
    const res = await fetch('https://www.instagram.com/novosmensageiros/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    const match = html.match(/"edge_followed_by":\s*\{\s*"count":\s*(\d+)/i) || 
                  html.match(/(\d[\d.,]*)\s*Followers/i) ||
                  html.match(/(\d[\d.,]*)\s*seguidores/i);
    if (match && match[1]) {
      const num = parseInt(match[1].replace(/[.,]/g, ''), 10);
      if (!isNaN(num) && num > 1000) {
        return (num / 1000).toFixed(1).replace('.', ',') + ' mil';
      }
    }
  } catch (e) {
    console.warn('Could not fetch auto IG count, keeping current stats:', e.message);
  }

  return null;
}

async function main() {
  console.log('🔄 Checking latest social stats...');
  const newIgCount = await fetchInstagramFollowers();
  
  if (newIgCount) {
    console.log(`✅ Found new Instagram follower count: ${newIgCount}`);
    const dateStr = new Date().toISOString().split('T')[0];
    const newContent = `export const SOCIAL_STATS = {\n  instagramFollowers: "${newIgCount}",\n  tiktokViews: "3.7M",\n  livesRescued: "+100",\n  lastUpdated: "${dateStr}"\n};\n`;
    fs.writeFileSync(STATS_FILE, newContent, 'utf-8');
    console.log('🎉 Updated src/data/stats.ts successfully!');
  } else {
    console.log('ℹ️ Stats are up to date or unchanged.');
  }
}

main();
