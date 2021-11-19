const data = [...Array(100000)].map((v, idx) => idx);
console.time();
for(let i = 0; i < 100; i++) {
    data.map(x => x * 2);
}
console.timeEnd();
