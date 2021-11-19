const data = [...Array(100000)].map((v, idx) => idx);
console.time();
const fn = x => x * 2;
for(let i = 0; i < 100; i++) {
    const result = [];
    for(let j = 0; j < data.length; j++) {
        result[j] = fn(data[j]);
    }
}
console.timeEnd();
