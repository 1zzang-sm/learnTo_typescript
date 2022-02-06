// 더 엄격한 타입 지정 특정 문자만 넣을 수 있어요 라고 할때
//let 누구: string;
// Literal types
let 누구: 'kim';
let 누구2: 123;
//누구2 = 124

let 접니다: '대머리' | '솔로';
접니다 = '대머리'
접니다 = '솔로'
// Literal types
// - 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성 굿

function 하암수(a :'hello') :1 | 0{
	return 1
	return 0
	// return 3
}
// 하암수('33')
하암수('hello')

//문제 
// 가위or바위or보 중 1개 입력가능 
// 가위or바위or보 만 들어올 수 있는 array를 return 해야함 
function 게임(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[]{
	return ['가위', '바위', '보'];
}
게임('가위')
게임('바위')
게임('보')

// const 변수의 한계

// as const 
// 이 obj는 literal type 지정 해주셈
// 효과1. object value 값을 그대로 타입으로 지정해줌
// 효과2. object 속성들에 모두 readonly 붙여줌
var 자료 = {
	name :'kim',
} as const
자료.name
// kim이라는 자료만 들어올 수 있습니다. X
// kim이라는 타입만 들어올 수 있습니다. O
function my함수(a :'kim') {
	
}
// my함수(자료.name)
my함수(자료.name as 'kim')


