import { readFileSync, writeFileSync } from 'fs';
const sql = readFileSync('import.sql', 'utf8');
const rows = [];
const lines = sql.split('\n');
for (const line of lines) {
  if (!line.startsWith('INSERT INTO')) continue;
  const m = line.match(/VALUES \('([^']+)', '([^']+)', '([^']+)', (NULL|'[^']*')\)/);
  if (m) {
    rows.push({
      timestamp: m[1],
      session_id: m[2],
      event_type: m[3],
      step: m[4] === 'NULL' ? null : m[4].slice(1, -1)
    });
  }
}
console.log('Extracted:', rows.length, 'rows');
writeFileSync('seed-data.json', JSON.stringify(rows));
