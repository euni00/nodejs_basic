console.log('logging....');
console.clear();

// log level
console.log('log');  // 개발
console.info('info');  // 정보
console.warn('warn');  // 경보
console.error('error');  // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same');

// print object
const student = { name: 'yeeunlee', age: 22 , company: { name : 'AC'} };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}

console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');  // count를 초기화
a();

// trace
function f1() {
    f3();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace(); // 이 함수가 어떻게 호출되었는지, 누가 호출했는지
}
f1();