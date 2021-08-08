# OOP Inheritance (상속)

## 상속(Inheritance)이란?

클래스에서 가장 큰 특징은 `상속`이 가능하다는 것입니다.

부모 클래스의 모든 속성이 자식 클래스에게 상속 되므로 코드 재사용성이 높아집니다.

## `issubclass(class, classinfo)`

- class가 classinfo의 subclass면 True

## `isinstance(object, classinfo)`

- object가 classinfo의 인스턴스거나 subclass인 경우 True

## `super()`

- 자식 클래스에 메서드를 추가로 구현할 수 있습니다.
- 부모 클래스의 내용을 사용하고자 할 때, `super()`를 사용할 수 있습니다.

------

**활용법**

```python
class ChildClass(ParentClass):
    def method(self, arg):
        super().method(arg) 
```



# 메서드 오버라이딩

> Method Overriding(메서드 오버라이딩): 자식 클래스에서 부모 클래스의 메서드를 재정의하는 것

- 상속 받은 메서드를 `재정의`할 수도 있습니다.
- 상속 받은 클래스에서 **같은 이름의 메서드**로 덮어씁니다.

## 상속관계에서의 이름공간

- 기존의 `인스턴스 -> 클래스` 순으로 이름 공간을 탐색해나가는 과정에서 상속관계에 있으면 아래와 같이 확장됩니다.
  - 인스턴스 -> 자식 클래스 -> 부모 클래스

# 다중 상속

- 두개 이상의 클래스를 상속받는 경우, 다중 상속이 됩니다.
  - 상속 받은 모든 클래스의 요소를 활용 가능
  - 중복된 속성이나 메서드가 있는 경우 상속 순서에 의해 결정