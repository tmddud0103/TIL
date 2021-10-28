// 1단계 함수 표현식
// const func = function(name) {
// 	return `hello ${name}`
// }

// 2단계 화살표 함수 변경
// const func = (name) => {return `hello ${name}`}

// 3단계 소괄호 생략 (매개변수가 하나일 때!)
// const func = name => {return `hello ${name}`}

// 4단계 중괄호& return 생략 (body(중괄호 안의 코드) 안의 코드가 표현식 1개로만 이루어진 경우)
// 표현식이 1개 == 결과문이 1개인 경우(리턴값이 한개)
const func = name => `hello ${name}`

console.log(func('tmddud'))


/*
	[함수 선언식 연습]
	
	인자의 길이에 따라 true 혹은 false를 반환하는 함수 `isValid`를 작성하세요.
	- `password` 인자의 값의 길이가 8 미만이면 false를 반환합니다.
	- `password` 인자의 값의 길이가 8 이상이면 true를 반환합니다.
	- 함수는 선언식으로 작성합니다.
	- 예시) isValid('abcd')  // false
*/
function isValid(password) {
	if (password.length >= 8) {
		return true
	}
	else {
		return false
	}
}
console.log(isValid('aaaassdd'))
console.log(isValid('aassdd'))

/*
	[함수 표현식 연습]
	
	문자열로 구성된 배열을 특정 문자를 기준으로 하나의 문자열로 합치는 함수 `myJoin`을 작성하세요.
	- 첫번째 인자 `array`는 문자열로 구성된 배열입니다.
	- 두번째 인자 `separator`는 문자열입니다.
	- 함수는 표현식으로 작성합니다.
	- 예시) join(['010', '1234', '5678'], '-')  // '010-1234-5678'
*/

const myJoin = function (array, separator) {
	let combine = ''
	// for (let arr of array) {
	// 	combine += arr + separator
	// }
	for (let idx = 0; idx<array.length; idx++) {
		const word = array[idx]
		combine += word
		if (idx < array.length-1) {
			combine += separator
		}
	}
	return combine
}

console.log(myJoin(['010', '1234', '5678'], '-'))


/*
	[함수 기본인자 연습]
	
	주문을 받아서 주문서를 반환하는 함수 `makeOrder`를 작성하세요.
	- 첫번째 인자 `menu`는 문자열입니다.
	- 두번째 인자 `size`는 문자열이며, 기본인자는 'regular'입니다.
	- 함수는 각 인자를 속성으로 갖는 객체를 반환합니다.
	
	예시) makeOrder('mocha') >>> { menu: 'mocha', size: 'regular' }
*/

const makeOrder = function (menu, size = 'regular') {
	let order = {'menu': menu, 'size':size}
	return order
}
console.log(makeOrder('mocha'))


/*
	[화살표 함수 연습]
	
	- 아래 celsiusToFahrenheit 함수는 섭씨 온도를 화씨 온도로 바꾸는 함수입니다. 
  - 선언식으로 작성된 함수를 "화살표 함수"로 다시 작성해보세요.
	
  function celsiusToFahrenheit (celsius) {
		const fahrenheit = celsius * 9/5 + 32
		return fahrenheit
	}

*/

const celsiusToFahrenheit = celsius => celsius * 9/5 + 32
