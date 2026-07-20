const fs = require('fs');
let c = fs.readFileSync('C:\\Users\\2023\\Desktop\\loveeeeeyoooy\\assets\\index-new.js', 'utf8');

const newMessage = `أنا بحبك يا شيرو 🥹♥️
بحبك أوي ومش متخيلة قد إيه وجودك في حياتي فرق معايا
بقية بكون مبسوطة وأنا معاك حتى في أبسط الحاجات، كل حاجة حلوة جنبك بقت أحلى وليها طعم تاني ♥️
أول مرة أحب حد بالشكل ده وأتعلق بيه كده
أول مرة أحس بالراحة والأمان مع حد
وأتمنى أفضل دايمًا جنبك وأشوفك ناجح ومبسوط وفخورة بيك في كل خطوة بتعملها 🥹♥️`;

const oldStart = c.indexOf('ending:{title:');
const oldEnd = c.indexOf(',exitText:', oldStart);
const oldEnding = c.substring(oldStart, oldEnd);

const newEnding = `ending:{title:"رسالتي الأخيرة ليك 🤍",subtitle:"من قلبي لقلبك",message:\`${newMessage}\``;

c = c.replace(oldEnding, newEnding);

fs.writeFileSync('C:\\Users\\2023\\Desktop\\loveeeeeyoooy\\assets\\index-new.js', c, 'utf8');
console.log('Done');
