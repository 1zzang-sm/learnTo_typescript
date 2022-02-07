// public, private 
class User2 {
	name: string;
	private familyName: string = 'kim';
	constructor(a: string) {
		this.name = this.familyName + a;
	}
	familyChange = () => {
		this.familyName = 'lee'
	}
}
let user1 = new User('성민');

class Person3 {
	constructor(public name) {
	}
}
new Person3('dd')

// protected, static 
class User3 {
	 x : 10;
}
class newUser extends User3 {

}
// protected 사용시 상속한곳 사용가능
class User4 {
	protected x = 10;
}
class NewUser extends User4 {
	doThis() {
		this.x = 10;
	}
}
// static 부모class만 사용가능 자식에게 안물려줌
// 상속시 따라옴
class User5 {
	static x = 20;
	static y = 30;
}
let p2 = new User5();
//console.log(p2.x) x
console.log(User5.x); // o

class User6 {
	static skill = 'js';
	intro = User6.skill + '전문가';
	
}
User6.skill = 'ts'
let 철수 = new User6();
console.log(철수);