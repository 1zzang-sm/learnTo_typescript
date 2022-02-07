// rest parameter ...parameter
// 다른 파라미터 있으면 맨 뒤에 사용
function 함수임(...a :number[]) {
	console.log(a);
}
함수임(1, 6, 2, 3, 5)

// ...spread opertator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destructuring
let [변수1, 변수2] = ['안녕', 100]

// obj destructuring
// {student : student, age : age} 같은 이름을 가지면 생략할 수 있다.
let { student, age } = { student: true, age: 20 }
let 오브젝트2 = { student: true, age: 20 }

function abc ({student, age} : {student: boolean, age: number}) {
	console.log(student, age)
}
abc(오브젝트2)
abc({ student: true, age: 20 })

function Q1(...num :number[]) {
	let result = 0;
	num.forEach((i) => {
		if (result < i) {
			result = i
		}
	})
		return result
}
Q1(6,3,7,2)
type Q2 = {
	user: string,
	admin: boolean,
	comment: number[]
}
let Q2 = ({user, admin, ...comment} :Q2) :void => {
	console.log(user, admin,comment)
}

type Q3 = (number | string | boolean)[]
function Q3([a,b,c]:Q3){
	console.log(a,b,c)
}