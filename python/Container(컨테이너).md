# 컨테이너(Container)

> 여러개의 값을 저장할 수 있는 것 (객체)

- 시퀀스형(sequence): 순서가 있는(ordered, 인덱스가 있는) 데이터
  - 순서가 있다 != 정렬되어있다(sorted)
  - 리스트(list), 튜플(tuple), 레인지(range), 문자형(string), 바이너리(binary)

- 비시퀀스형(non-sequence): 순서가 없는(unordered) 데이터
  - 세트(set), 딕셔너리(dictionary)
  - 순서가 없기 때문에 딕셔너리는 키(key)로 접근



## 시퀀스형 컨테이너(순서가 있음)

> 리스트(list), 튜플(tuple), 레인지(range), 문자형(string), 바이너리(binary)
>
> for문을 통해 확인 가능



### List

- 순서 O
- 시퀀스로 인덱스를 통해 접근
  - 대괄호([]) 혹은 list()를 통해 생성
- 인덱스는 0부터 접근
  - list[]

<img src="photo/image-20210719111841477.png" alt="image-20210719111841477" style="zoom:67%;" />

#### 중첩 리스트 실습

<img src="photo/image-20210719111922932.png" alt="image-20210719111922932" style="zoom:67%;" />



### tuple(튜플)

- **수정이 불가능한(immutable) 시퀀스**로 인덱스로 접근
  - 소괄호() 혹은 tuple을 통해 생성
  - 값에 대한 접근은 tuple_name[i]

![image-20210719112131544](photo/image-20210719112131544.png)



- 튜플은 일반적으로 **파이썬 내부에서 활용**됨, 복수의 값을 반환하는 경우에도 활용

![image-20210719112514778](photo/image-20210719112514778.png)



- 하나의 항목으로 구성된 튜플은 **생성시 값 뒤에 쉼표를 붙여야 함**

``` bash
a = (1)
print(type(a))
#<class 'int'>
b = (1, )
print(type(b))
#<class 'tuple'>
```



### range

- 숫자의 시퀀스를 나타내기 위해 사용
- 기본형 : range(n)
  - 0 부터 n-1까지의 숫자의 시퀀스
- 범위지정 : range(n, m)
  - n부터 m-1까지의 숫자의 시퀀스
- 범위, 스텝 지정 : range(n, m, s)
  - n부터 m-1까지 s만큼 증가시키는 숫자의 시퀀스

![image-20210719112914043](photo/image-20210719112914043.png)

<img src="photo/image-20210719112935823.png" alt="image-20210719112935823" style="zoom:67%;" />



<img src="photo/image-20210719113008950.png" alt="image-20210719113008950" style="zoom:67%;" />

​						역순도 가능

​						but 지정이 잘못 되어진 경우에는 []값 안에 아무것도 출력되지 않음

```bash
for i in range(2):
	print("hello")
#hello
#hello
```



### string/binary





## 비시퀀스형 컨테이너(순서가 없음)

> 세트(set), 딕셔너리(dictionary)



### 세트(set)

- 순서가 없는 자료 구조
  - 중괄호({}) 혹은 set()을 통해 생성
    - 중괄호는 딕셔너리랑 같지만, 안에 있는 내용물이 다르다!
    - 비어있는 세트를 만들기 위해서는 **set()를 반드시 활용**해야함
      - **비어있는 중괄호는 딕셔너리**로 만들어진다!
  - 순서가 없어 별도의 값에 접근할 수 없음

![image-20210719142739468](photo/image-20210719142739468.png)



- 수학에서의 **집합과 동일한 구조**를 가짐
  - 집합 연산이 가능
  - 중복된 값이 존재하지 않음

<img src="photo/image-20210719142934395.png" alt="image-20210719142934395" style="zoom: 67%;" />



#### set 활용

- 다른 컨테이너에서 중복된 값을 쉽게 제거할 수 있음
  - 단 순서도 같이 무시 -> 순서가 중요한 경우 사용 X

<img src="photo/image-20210719143236672.png" alt="image-20210719143236672" style="zoom:67%;" />



### 딕셔너리 (dictionary)

- **key**와 **value**가 쌍으로 이루어진 자료구조
  - 중괄호({}) 혹은 dict()을 통해 생성

<img src="photo/image-20210719143457749.png" alt="image-20210719143457749" style="zoom:67%;" />

- **key를 통해 value에 접근**
  - value 값에 바로 접근 불가

<img src="photo/image-20210719143513592.png" alt="image-20210719143513592" style="zoom:67%;" />

- key는 변경 불가능한 데이터(immutable)만 활용가능
  - string, integer, float, boolean, tuple, range
  - **string으로 작성하는 것을 원칙!**
  - 띄어쓰기도 하지 않는것이 원칙

<img src="photo/image-20210719143644971.png" alt="image-20210719143644971" style="zoom:67%;" />

- value는 모든 값으로 설정 가능 (리스트, 딕셔너리 등)

<img src="photo/image-20210719143702546.png" alt="image-20210719143702546" style="zoom:80%;" />

#### 딕셔너리 실습

![image-20210719143759400](photo/image-20210719143759400.png)

드라마를 출력하는 코드..?

```bash
movie['genres']
#['드라마','스릴러']
movie['genres'][0]
#'드라마'
```





## 컨테이너 특징



### 컨테이너 형변환 (중요)

![image-20210719143938092](photo/image-20210719143938092.png)



### 컨테이너 분류

- 변경 불가능한 데이터(immutable)
  - literal(리터럴) - 숫자, 문자형, 참/거짓 (->딕셔너리의 키)
    - 문자형의 경우 덮어씌우기가 아닌 데이터 한개만 수정하는 것이 불가능하다!
  - range
  - tuple
- 변경 불가능한 데이터(immutable)의 복사
  - b = a를 하면 같은 값이 공유
  - b의 값을 바꾸어도 a은 그대로!

- 변경이 가능한 데이터(mutable)
  - list
  - set
  - dictionary

- 변경이 가능한 데이터(mutable)의 복사
  - num2 = num1을 하는 경우 동일한 리스트(객체)의 주소를 참조
  - if num2[0] = 100으로 변경한다면 num1[0] 역시 100으로 변경이 된다!

![image-20210719144610049](photo/image-20210719144610049.png)



![image-20210719144758809](photo/image-20210719144758809.png)
