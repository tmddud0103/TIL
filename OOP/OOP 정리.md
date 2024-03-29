# OOP 정리

## 객체(Object)

- 객체는 자신 고유의 **속성(attribute)** 을 가지며 클래스에서 정의한 **행위(behavior)** 를 수행

## 클래스(Class)

- 공통된 속성(attribute)과 행위(behavior)를 정의한 것으로 객체지향 프로그램의 기본적인 **사용자 정의 데이터형(user-defined data type)**

## 인스턴스(Instance)

- 특정 `class`로부터 생성된 해당 클래스의 실체/예시(instance)

## 속성(Attribute)

- 클래스/인스턴스가 가지는 속성(값/데이터)

## 메서드(Method)

- 클래스/인스턴스에 적용 가능한 조작법(method) & 클래스/인스턴스가 할 수 있는 행위(함수)





# 인스턴스 & 클래스 변수

## 인스턴스 변수

- 인스턴스의 속성(attribute)
- 각 인스턴스들의 고유한 변수
- 생성자 메서드에서 `self.변수명`로 정의
- 인스턴스가 생성된 이후 `인스턴스.변수명`로 접근 및 할당

------

**활용법**

```python
class Person:

    def __init__(self, name):    # 인스턴스 메서드 (생성자) 
        self.name = name         # 인스턴스 변수
```



## 클래스 변수

- 클래스의 속성(attribute)
- 모든 인스턴스가 공유
- 클래스 선언 내부에서 정의
- `클래스.변수명`으로 접근 및 할당

------

**활용법**

```python
class Circle:
    pi = 3.14

print(Circle.pi)
```



# 인스턴스 & 클래스간의 이름공간

## 이름공간 탐색 순서

- 클래스를 정의하면, 클래스가 생성됨과 동시에 이름 공간(namespace)이 생성됩니다.

- 인스턴스를 만들게 되면, 인스턴스 객체가 생성되고 해당되는 이름 공간이 생성됩니다.

- 인스턴스의 어트리뷰트가 변경되면, 변경된 데이터를 인스턴스 객체 이름 공간에 저장합니다.

- 즉, 인스턴스에서 특정한 어트리뷰트에 접근하게 되면 **인스턴스 => 클래스** 순으로 탐색을 합니다.