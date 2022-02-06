// Union Type (타입 2개 이상 합친 새로운 타입만들기)
let 회원님 = 123;
회원님 = 'ㅇㅇ';
// 숫자 or 문자가 가능한 array
let 회원님들 = [1, 2, 3];
let 오브젝트 = { a: 123 };
// :any 모든 자료형 허용
// 사용순간 타입스크립트를 쓰는 의미가 없다. 타입실드 헤제문법
let 이이름;
이이름 = 123;
이이름 = true;
이이름 = [];
// :unknown type 
// any랑 비슷함 모든 자료형 허용
// any보다 안전함
// any는 타입헤제라 unknown과는 좀 다름
let 리름;
리름 = 123;
리름 = {};
// let 변수0 :string = 리름;
//리름 - 1; 타입스크립트는 엄격함 간단한 수학연산도 타입맞아야함
let 나2;
// 바닐라는 'kim' + 1 이 가능함 다이나믹... 때문에
// 나2 + 1; 허락 안해줌 
// string type + 1 o 
// number type + 1 o
// string | number type + 1 x
// Narrowing / Assertion
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phill',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
