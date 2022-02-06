// Type Narrowing
// Union type 처럼 타입이 불확실하면
// if 문 등으로 Narrowing 해줘야 조작 가능하다.
function 네로잉함수(x: number | string) {
	if (typeof x === 'string') {
		return x + '1';
	} else {
		return x + 1
	}
}
네로잉함수(1);

// Narrowing 주의점
// if문 썻으면 끝까지 써야 안전 
// else, else if 안쓰면 에러로 잡아줄 수도
// Narrowing으로 판정해주는 문법들 
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
// 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 인정해줌
function 네로잉함수2(x: number | string) {
	let array: number[] = [];
	if (typeof x === 'number') {
		array[0] = x;
	}	
}
네로잉함수2(3);

// assertion - 타입 덮어쓰기
function 네로잉함수3(x: number | string) {
	let array: number[] = [];
	// x 를 number로 덮어쓰기
	array[0] = x as number;
}
// as문법의 용도
//1. Narrowing 할 때 쓴다.
let nameee: string = 'kim';
// 타입을 a에서 b로 변경 X
//nameee as number;

// 무슨 타입이 들어올지 100% 확실할 때 사용 (as)
// 단, 잘못 사용하면 확인할 수 없음
// 정말 필요할때 왜 버그가 일어난지 모를때 디버깅, 비상용으로 사용
// 예전 as문법
// <number>nameee
