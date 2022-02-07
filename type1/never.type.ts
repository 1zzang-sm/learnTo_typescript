// never type
// void와 유사하지만 좀 더 엄격함
// 1. return 값이 없어야함
// 2. 함수실행이 끝나지 않아야함 (endpoint가 없어야함)
function NeverType(): never {
	//throw new Error()
	while (true) {
		
	}
}
// never 활용
// 대부분 사용할 곳이 없음 void 대체
// never type은 코드 이상하게 짜면 출몰함

function Never2(parameter: string) {
	if (typeof parameter === 'string') {
		console.log(parameter)
	} else {
		console.log(parameter) // type never
	}
}
let never3 = () => {
	throw new Error()
}