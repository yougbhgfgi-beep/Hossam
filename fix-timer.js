const fs = require('fs');
let c = fs.readFileSync('C:\\Users\\2023\\Desktop\\loveeeeeyoooy\\assets\\index-new.js', 'utf8');

// Find the div with the two date labels and remove just that div
const label1 = 'أول يوم واحنا معا بعض';
const idx1 = c.indexOf(label1);
console.log('Label 1 at:', idx1);

if (idx1 > -1) {
  // Go back to find the start of the div that contains it
  let divStart = c.lastIndexOf('i.jsx("div",{', idx1);
  // Find the end: }}) after the second p closing
  const label2 = 'أول يوم حبيتك بجد';
  const idx2 = c.indexOf(label2, idx1);
  console.log('Label 2 at:', idx2);
  
  // Find the closing of the div containing both: ]})," after second p
  // The pattern is: ...children:[i.jsx("p",...),i.jsx("p",...)]}),
  // We need to find the ]})" that closes this div
  let depth = 0;
  let searchFrom = idx2;
  // Find closing of second p tag
  let closeP2 = c.indexOf('})', searchFrom);
  let afterP2 = c.indexOf(')})', closeP2);
  
  // Actually let's find the enclosing div closing
  // Pattern: i.jsx("div",{className:"flex flex-col items-center gap-1 mb-3",children:[...]}),
  // We need the ]}) after children array closes
  let childrenClose = c.indexOf(']}),i.jsx("h2"', idx1);
  if (childrenClose === -1) {
    childrenClose = c.indexOf(']}),', idx1 + 50);
  }
  
  console.log('divStart:', divStart, 'childrenClose:', childrenClose);
  
  if (divStart > -1 && childrenClose > -1) {
    const chunk = c.substring(divStart, childrenClose);
    console.log('Chunk to remove:', chunk.substring(0, 120));
    c = c.substring(0, divStart) + c.substring(childrenClose);
    fs.writeFileSync('C:\\Users\\2023\\Desktop\\loveeeeeyoooy\\assets\\index-new.js', c, 'utf8');
    console.log('Done!');
  }
}
