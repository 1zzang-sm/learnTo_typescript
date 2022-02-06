// type 키워드로 타입변수 생성가능 
type 타입명 = string;
// obj type 경우 
// type 키워드, interface 키워드로도 타입변수 생성가능


type Square = { color: string, width: number }
interface Square2 {
	color: string, //; 세미콜론 사용해도 됨
	width: number
}

let 네모 :Square2 = {
	color: 'red',
	width: 100,
}

// & 기호(intersection type)
// 두 타입을 전부 만족하는 타입이라는 뜻
// 복사가 아닌 교차(?)
// interface도 type과 교차가 가능하다
// type Cat = { age: number} & Student

// & 기호는 중복속성 발생하면?
// 에러표시가 안나니 주의
// string도 만족해야하고 number도 만족해야해서 never type 발생
type Animal4 = { name: string }
type Cat = { name: number } & Animal4
// let 야옹이 :Cat = {name :'kim'}

// type vs interface
// interface는 중복선언 가능
// type은 중복선언 불가능
// Student = { name: string, score: number} 가 됨
// 자동 extends가 된다.
// type은 엄격해서 중복선언 자체가 안됨 ( 가장 큰 차이점)
// type은 엄격, interface는 유연
// 외부 라이브러리 같은 경우 interface가 많음
// 그래서 추후에 타입 추가하기 쉬움

// 다른 사람이 이용많이 할 것 같으면
// obj 타입정리할때 interface로 하는 것 고려

// interface Student {
// 	score: number
// }
interface Student {
	name: string,
}
// interface장점 : extends로 복사가능
// extends 쓸때 중복속성이 발생한다면?
// 에러 표시됨

interface Teacher extends Student{
	age: number
}

//Q1. 아래 타입지정 interface 작성해보셈
let 학생:Student = { name: 'kim' }
let 선생:Teacher = { name: 'park', age: 20 }


interface product {
	brand: string;
	serialNumber: number;
	model: string[]
}
// Q1. 아래 변수 interface 이용
let 상품: product = {
	brand: 'Samsung',
	serialNumber: 1360,
	model: ['TV', 'phone']
}

interface basket {
		product: string,
		price: number
}
// Q2. 아래 array안에 obj 여러개가 필요함
let 장바구니:basket[] = [
	{
		product: '청소기',
		price: 7000
	},
	{
		product: '삼다수',
		price: 800
	}
]
//Q3. 위 만든 타입을 extends
interface addBasket extends basket{
	card: boolean
}
interface 숙제4 {
	plus: (a: number, b: number) => number,
	minus: (a: number, b: number) => number
}

let 숙제4 :숙제4 = {
	plus(a, b) {
		return a + b
	},
	minus(a, b) {
		return a - b
	}

}