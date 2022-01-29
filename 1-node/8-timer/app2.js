console.log('code1');
console.time('timeout 0');
setTimeout(() => {
    console.log('setTImeout 0');
    console.timeEnd('timeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {  // 우선순위가 제일 높음.
    console.log('process.nextTick');
})

// for(let i = 0; i < 1000; i++) {}