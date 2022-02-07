// public, private 
class User2 {
    constructor(a) {
        this.familyName = 'kim';
        this.familyChange = () => {
            this.familyName = 'lee';
        };
        this.name = this.familyName + a;
    }
}
let user1 = new User('성민');
class Person3 {
    constructor(name) {
        this.name = name;
    }
}
new Person3('dd');
// protected, static 
class User3 {
}
class newUser extends User3 {
}
// protected 사용시 상속한곳 사용가능
class User4 {
    constructor() {
        this.x = 10;
    }
}
class NewUser extends User4 {
    doThis() {
        this.x = 10;
    }
}
// static 부모class만 사용가능 자식에게 안물려줌
// 상속시 따라옴
class User5 {
}
User5.x = 20;
User5.y = 30;
let p2 = new User5();
//console.log(p2.x) x
console.log(User5.x); // o
class User6 {
    constructor() {
        this.intro = User6.skill + '전문가';
    }
}
User6.skill = 'js';
User6.skill = 'ts';
let 철수 = new User6();
console.log(철수);
