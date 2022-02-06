// 선언 변수명 선언변수의 타입지정 = '값';
let 이름 = 'kim';
// 이름 = 123;
이름 = '안녕';
// array type 지정 
let 이름2 = ['kim', 'park'];
// obj type 지정 .. name? : name이 올수있고 없을 수 있다. 
let 이름3 = { name: 'kim' };
// 이름은 string도 올수잇고 숫자도 올수잇다
let 이름4 = 'kim';
let 이름5 = 123;
// 함수 타입지정
// function( :타입 ) - 파라미터 타입지정 
// function() :타입 - return 값 타입 지정
function 함수(x) {
    return x * 2;
}
let john = [123, false];
let john2 = { name: 'kim' };
let john3 = {
    name: 'kim',
    age: '123',
};
class User {
    constructor(name) {
        this.name = name;
    }
}
