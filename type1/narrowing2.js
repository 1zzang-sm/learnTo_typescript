// typeof 연산자로 부족할때
// null & undefined 타입체크하는 경우 매우 잦음
function check(a) {
    if (typeof a === 'string') {
    }
    else {
    }
}
// a가 undefined면 if문 실행x
// a가 string이면 if문 실행o 
function check2(a) {
    if (a && typeof a === 'string') {
    }
    else {
    }
}
let 종합 = (animal) => {
    if ('swim' in animal) {
    }
};
// obj instanceof parentClass
let 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수5(x) {
    if (x.휠 === '4개') {
        console.log('x는 카 타입이에요');
    }
}
// 논리적으로 타입을 특정지을 수 있으면 narrowing으로 인정해준다.
