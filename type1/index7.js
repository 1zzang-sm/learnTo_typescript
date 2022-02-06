// TypeScript로 HTML 조작 가능 JS와 좀 다름
// as Element;
// Element 타입으로 간주해주세요 비상시 or 100% 확실시 사용해야함
let title = document.querySelector('#title');
// narrowing으로 문제해결
if (title != null) {
    title.innerHTML = '반가워요';
}
// instanceof 중요함
// obj instanceof class
if (title instanceof Element) {
    title.innerHTML = '반가워요';
}
// obj?.function
// 1. 제목에 innerHTML이 있으면 출력해주고
// 2. 없으면 undefiend 
// optional chaining
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = '반가워용';
}
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = '반가워용';
}
let link = document.querySelector('.link');
// narrowing을 상세히 해야함
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
HTMLButtonElement;
HTMLHeadElement;
// eventListener 
let btn = document.querySelector('#button');
// ? - btn에 addEventListener 가능하면 해주고
// 아니면 undefiend 해라
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
});
