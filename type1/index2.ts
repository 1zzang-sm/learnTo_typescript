// 타입스크립트 기본 타입 정리(primitive types)
// 코틀린이랑 비슷함
let 임시: string = 'kim';
let 나이 :number = 50;
let 결혼했니: undefined = undefined; // undefined, null 

// array :(array의 타입)[]
let 회원들: string[] = ['kim', 'park'];
// array의 여러가지 타입을 넣고싶으면 Union type

let 회원들2: { member99: string, member100: string } = { member99: 'kim', member100: 'park' };
// tip 타입지정 원래 자동으로 된다.
// 타입지정 문법 생략 가능
let 회원들3 = 'park';

//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let 내이름 :string = '이성민';
let 내나이: number = 27
let 내출생지역: string = '광주광역시'
//Q2 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 obj 자료형으로 담아보세요.
let 가수와곡 :{title :string, singer :string} = {
	title: '이 또한 지나가리라',
	singer : '임재범'
}
//Q3 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project :{ member:string[], days :number, started :boolean} = {
	member: ['kim', 'park'],
	days: 30,
	started : true,
}



