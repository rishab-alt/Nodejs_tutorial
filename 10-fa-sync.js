const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

writeFileSync(
'./content/subfolder/result-sync.txt', 
`here is the result: ${first}, ${second}`,
 {flag: 'a'}
 )