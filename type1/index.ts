// 선언 변수명 선언변수의 타입지정 = '값';
let 이름: string = 'kim';
// 이름 = 123;
이름 = '안녕';

// array type 지정 
let 이름2 :string[] = ['kim', 'park'];

// obj type 지정 .. name? : name이 올수있고 없을 수 있다. 
let 이름3: { name?: string } = { name: 'kim' }

// 이름은 string도 올수잇고 숫자도 올수잇다
let 이름4: string | number = 'kim';

// type을 변수로 지정
type Name = string | number;

let 이름5: Name = 123;

// 함수 타입지정
// function( :타입 ) - 파라미터 타입지정 
// function() :타입 - return 값 타입 지정
function 함수(x :number) :number {
	return x * 2;
}

// 튜플타입
type Member = [number, boolean];
let john: Member = [123, false];

// obj
type Member2 = {
	name :string
}
let john2: Member2 = { name: 'kim' };
//let john3: Member2 = { name: 123 }; xxx 

type Member3 = {
	// 글자로 된 모든 obj 속성의 타입은 string
	[key :string] :string,
}
let john3: Member3 = {
	name: 'kim',
	age: '123',
}

class User {
	name :string;
	constructor(name :string) {
		this.name = name;
	}
}








