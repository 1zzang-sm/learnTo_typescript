// typeof 연산자로 부족할때
// null & undefined 타입체크하는 경우 매우 잦음
function check(a: string | undefined) {
	if (typeof a === 'string') {
		
	} else {
		
	}
}
// a가 undefined면 if문 실행x
// a가 string이면 if문 실행o 
function check2(a: string | undefined) {
	if (a && typeof a === 'string') {
		
	} else {
		
	}
}
// typeof 연산자는
// number string boolean obj 등만 판정
// in 키워드로 obj narrowing
// 서로 가진 속성명이 다르면 in 
type Fish = { swim: string }
type Bird = { fly: string }
let 종합 = (animal: Fish | Bird) => {
	if ('swim' in animal) {
		
	}
}
// obj instanceof parentClass
let 날짜 = new Date()
if (날짜 instanceof Date) {
	
}

// 비슷한 obj type이면
// literfal type 강제로 만들어두면 나중에 도움됨
type 카 = {
	휠: '4개',
	색상: string
}
type 바이크 = {
	휠: '2개',
	색상: string
}
function 함수5(x: 카 | 바이크) {
	if (x.휠 === '4개') {
		console.log('x는 카 타입이에요')
	}
}

// 논리적으로 타입을 특정지을 수 있으면 narrowing으로 인정해준다.
