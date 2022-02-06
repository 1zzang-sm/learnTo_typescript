let 네모 = {
    color: 'red',
    width: 100,
};
//Q1. 아래 타입지정 interface 작성해보셈
let 학생 = { name: 'kim' };
let 선생 = { name: 'park', age: 20 };
// Q1. 아래 변수 interface 이용
let 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
};
// Q2. 아래 array안에 obj 여러개가 필요함
let 장바구니 = [
    {
        product: '청소기',
        price: 7000
    },
    {
        product: '삼다수',
        price: 800
    }
];
let 숙제4 = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};
