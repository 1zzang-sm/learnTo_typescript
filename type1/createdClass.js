class Person2 {
    // rest parameter, default parameter 사용가능
    constructor(q) {
        // Person2.prototype.함수생성 = () => {}
        this.함수생성 = (q) => {
            console.log('안녕' + q);
        };
        this.name = q;
    }
}
let 사람1 = new Person2('kim');
let 사람2 = new Person2('park');
console.log(사람1);
사람1.함수생성('하세요');
// 사람1.data; // 0
// Q1.
class Car {
    constructor(a, b) {
        this.tax = () => {
            return this.price / 10;
        };
        this.model = a;
        this.price = b;
    }
}
//Q2. 
// rest parameter ...parameter 
// array로 들어온다.
class Word {
    constructor(...param) {
        let nums = [];
        let strs = [];
        param.forEach((i) => {
            if (typeof i === 'string') {
                this.str.push(i);
            }
            else {
                this.num.push(i);
            }
        });
        this.num = nums;
        this.str = strs;
    }
}
