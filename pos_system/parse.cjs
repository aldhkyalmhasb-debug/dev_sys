const fs = require('fs');

try {
  const html = fs.readFileSync('f:\\dev_sys\\RemoX - RemoX.net.html', 'utf8');
  
  // A simple regex to find the blocks that might contain menu items
  // Look for something with "المخزون" and grab a good chunk of HTML after it
  const index = html.indexOf('المخزون');
  if (index !== -1) {
    const chunk = html.substring(index, index + 8000);
    
    // We want to extract menu items (usually <a> or <li> tags)
    // Let's strip out tags to make it readable, or just match text inside <a> tags
    const regex = /<a[^>]*>(.*?)<\/a>/g;
    let match;
    console.log("Found links around المخزون:");
    while ((match = regex.exec(chunk)) !== null) {
        // clean up html tags inside the match
        let text = match[1].replace(/<[^>]*>/g, '').trim();
        if(text) console.log(text);
    }
  } else {
    console.log("المبيعات not found");
  }
} catch (e) {
  console.error(e);
}
