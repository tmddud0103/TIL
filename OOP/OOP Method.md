# OOP Method

# 메서드의 종류

## 인스턴스 메서드(instance method)

- 인스턴스가 사용할 메서드
- 클래스 내부에 정의되는 메서드의 기본값은 인스턴스 메서드
- **호출시, 첫번째 인자로 인스턴스 자기자신 `self`가 전달됩니다**

------

**활용법**

```python
class MyClass:
    def instance_method(self, arg1, arg2, ...):
        ...

my_instance = MyClass()
# 인스턴스 생성 후 메서드를 호출하면 자동으로 첫 번째 인자로 인스턴스(my_instance)가 들어갑니다.
my_instance.instance_method(.., ..)  
```

## 클래스 메서드(class method)

- 클래스가 사용할 메서드
- `@classmethod` 데코레이터를 사용하여 정의
- **호출시, 첫 번째 인자로 클래스 `cls`가 전달됩니다**

------

**활용법**

```python
class MyClass:
    @classmethod
    def class_method(cls, arg1, arg2, ...):
        ...

# 자동으로 첫 번째 인자로 클래스(MyClass)가 들어갑니다.
MyClass.class_method(.., ..)  
```

## 스태틱 메서드(static method)

- 클래스가 사용할 메서드
- `@staticmethod` 데코레이터를 사용하여 정의
- **호출시, 어떠한 인자도 전달되지 않습니다**

------

**활용법**

```python
class MyClass:
    @staticmethod
    def static_method(arg1, arg2, ...):
        ...

# 아무런 일도 자동으로 일어나지 않습니다.
MyClass.static_method(.., ..)
```



### 인스턴스와 메서드

- 인스턴스는 3가지 메서드 모두에 접근할 수 있습니다.
- 하지만, 인스턴스가 할 행동은 모두 인스턴스 메서드로 한정 지어서 설계합니다.
- 인스턴스에서 클래스 메서드와 스태틱 메서드는 되도록 호출하지 않아야 합니다. (가능하다 != 사용한다)



### 클래스와 메서드

- 클래스가 할 행동은 다음 원칙에 따라 설계합니다. (클래스 메서드와 정적 메서드)
  - 클래스 자체(`cls`)와 그 속성에 접근할 필요가 있다면 **클래스 메서드**로 정의합니다.
  - 클래스와 클래스 속성에 접근할 필요가 없다면 **정적 메서드**로 정의합니다.
    - 정적 메서드는 `cls`, `self`와 같이 묵시적인 첫번째 인자를 받지 않기 때문



