// type alias
// type alias 작명 관습
// 영어대문자 국룰
// 뒤에 Type
// ex) AnimalType
type Animal = string | number | undefined;
type Animal2 = {name :string, age :number}
let 동물 :Animal2 = {
	name: 'kim',
	age : 27
};
// const는 상수라 값을 변경할 순 없지만
// const로 담은 obj 수정은 자유롭게 가능
const 출생지역 = {
	region: 'seoul',
}
출생지역.region = 'busan';

// typescript는 obj자료 수정도 막을 수 있다.
// 키워드 readonly를 사용하여 읽기전용으로 사용. 수정 막음
type Girlfriend = {
	readonly name :string
}
// ? - string | undefined
type Girlfriend2 = {
	name? :string
}
const 여친 :Girlfriend = {
	name : '라면'
}
// 여친.name = '돈까스'
// type 합치기
type Nam2 = string;
type Ag2 = number;
type Person = Nam2 | Ag2;

// & (and) 연산자로 obj 타입 합치기
// & 연산자로 obj타입 extend 하기
// 참고 같은 이름의 type 변수는 재정의 불가능
type PositionX = { x: number };
type PositionY = { y: number };
// { x:number, y :number}
type NewType = PositionX & PositionY

let position: NewType = {
	x: 10,
	y: 20
}
// Q2.
type Quest = {color? :string, size :number, readonly position :number[]}
// Q3.
