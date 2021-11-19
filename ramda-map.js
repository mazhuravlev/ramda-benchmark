const ramda = require('ramda');
const data = [...Array(100000)].map((v, idx) => idx);
console.time();
for(let i = 0; i < 100; i++) {
    ramda.map(x => x * 2)(data);
}
console.timeEnd();
