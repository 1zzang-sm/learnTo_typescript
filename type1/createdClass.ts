class Person2 {
	// data = 0; // 필드값 constructor와 같은 역할
	name: string; // 필드에 만들어 놔야함
	// rest parameter, default parameter 사용가능
	constructor(q :string) {
		this.name = q;
	}
// Person2.prototype.함수생성 = () => {}
	함수생성 = (q :string) => {
		console.log('안녕' + q);
	}
}

let 사람1 = new Person2('kim');
let 사람2 = new Person2('park');

console.log(사람1);
사람1.함수생성('하세요')
// 사람1.data; // 0

// Q1.
class Car{
	model: string;
	price: number;
	constructor(a :string , b :number) {
		this.model = a;
		this.price = b;
	}
	tax = ():number => {
		return this.price / 10;
	}
}

//Q2. 
// rest parameter ...parameter 
// array로 들어온다.
class Word{
	num;
	str;
	constructor(...param) {
		let nums: number[] = [];
		let strs: string[] = [];

		param.forEach((i)=> {
			if (typeof i === 'string') {
				this.str.push(i);
			} else {
				this.num.push(i);
			}
		})
		this.num = nums;
		this.str = strs
	}
}