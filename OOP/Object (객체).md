# Object (객체)



## 객체?

- 클래스에서 정의한 것을 토대로 메모리(실제 저장공간)에 할당된 것
- 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미
- 파이썬에서 **존재하는 모든 것들은 객체**
- 변수를 이용해 객체에 접근
- 객체지향 프로그래밍에서 객체는 클래스의 인스턴스이다.
  - 예시) 집 설계도 = 클래스, 실제 집 = 객체



## 객체 (object)

> 파이썬은 모두 객체로 되어있다
>
> 모든 객체는 어떤 기능(각각의 기능)을 가지고 있다.

- 문자열을 소문자로()
  - my_lower('Hi') -> 함수 = 기능
    - 데이터가 인자로써 들어가고 있다
    - 함수가 데이터를(객체를) 처리
  - 'Hi'.lower() -> 'Hi'라는 글자가 .lower() 한다
    - 데이터가(객체가) 메서드를 처리



- 리스트.정렬()
  - sorted([3, 2, 1])
    - 함수가 객체를 처리
  - [3, 2, 1].sort()
    - 객체가 매서드를 처리



### 객체(object)는 특정 타입의 인스턴스(instance)이다.

> 인스턴스가 뭔데? -> 객체!
>
> 정의(규칙)를 통해서 만들어진 결과물, 물체

- 100, 900, 5 는 모두 int(정의)의 인스턴스
- 'hello', 'bye' 는 모두 string(정의)의 인스턴스
- [], [12, 3425, 4] 는 모두 list(정의)의 인스턴스



### 객체의 특징

- type (타입) : 어떤 연산자(operator)와 조작(method)가 가능한가?
- attribute (속성) : 어떤 상태(데이터)를 가지는가?
- method (조작법) : 어떤 행위(함수)를 할 수 있는가?

![image-20210728111210366](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728111210366.png)

![image-20210728111227167](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728111227167.png)

![image-20210728111242413](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728111242413.png)

![image-20210728111259440](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728111259440.png)