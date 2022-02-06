// type alias에 함수 type 저장해서 쓰는 방법 
// arrow function 사용해야 함
// ()=> {return 10} 느낌
// 함수 선언식
// function 함수선언식(){}
// 함수 표현식
// 변수 함수표현식 = ()=>{}
type 함수타입 = (a: string) => number;
let 함수4 :함수타입 = function(a) {
	return 3
}
함수4('2')

// obj안에 함수 만들 수 있음

type Member33 = {
	name: string,
	age: number,
	plusOne: (x: number) => number,
	changeName : ()=> void
}

let 회원정보:Member33 = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();
