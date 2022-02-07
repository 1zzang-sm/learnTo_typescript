var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// rest parameter ...parameter
// 다른 파라미터 있으면 맨 뒤에 사용
function 함수임(...a) {
    console.log(a);
}
함수임(1, 6, 2, 3, 5);
// ...spread opertator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);
// destructuring
let [변수1, 변수2] = ['안녕', 100];
// obj destructuring
// {student : student, age : age} 같은 이름을 가지면 생략할 수 있다.
let { student, age } = { student: true, age: 20 };
let 오브젝트2 = { student: true, age: 20 };
function abc({ student, age }) {
    console.log(student, age);
}
abc(오브젝트2);
abc({ student: true, age: 20 });
function Q1(...num) {
    let result = 0;
    num.forEach((i) => {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
Q1(6, 3, 7, 2);
let Q2 = (_a) => {
    var { user, admin } = _a, comment = __rest(_a, ["user", "admin"]);
    console.log(user, admin, comment);
};
function Q3([a, b, c]) {
    console.log(a, b, c);
}
