# 예외 처리(Exception Handling)



## `try` & `except`

`try` 문을 이용하여 예외 처리를 할 수 있습니다.



## 기초 문법

```python
try:
    <코드 블럭 1>
except (예외):
    <코드 블럭 2>
```

- `try` 아래의 코드블락(code block)이 실행됩니다.
- 예외가 발생되지 않으면, **`except`없이 실행이 종료 됩니다.**
- 예외가 발생하면, **남은 부분을 수행하지 않고**, `except`가 실행됩니다.

![image-20210722223315370](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223315370.png)

![image-20210722223329949](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223329949.png)

## 복수의 예외 처리

하나 이상의 예외를 모두 처리할 수 있습니다.

괄호가 있는 튜플로 여러 개의 예외를 지정할 수 있습니다.

------

**활용법**

```python
try:
    <코드 블럭 1>
except (예외1, 예외2):
    <코드 블럭 2>


try:
    <코드 블럭 1>
except 예외1:
    <코드 블럭 2>
except 예외2:
    <코드 블럭 3>
```



## else

- 에러가 발생하지 않는 경우 수행되는 문장은 `else`를 이용합니다.
- 모든 except 절 뒤에와야 합니다.
- try 절이 예외를 일으키지 않을 때 실행되어야만 하는 코드에 적절합니다.

------

**활용법**

```python
try:
    <코드 블럭 1>
except 예외:
    <코드 블럭 2>
else:
    <코드 블럭 3>
```

![image-20210722223439859](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223439859.png)





## finally

- 반드시 수행해야하는 문장은 `finally`를 활용합니다.
- 즉, 모든 상황에 실행되어야만 하는 코드를 정의하는데 활용합니다.
- 예외의 발생 여부과 관계없이 try 문을 떠날 때 항상 실행합니다.

------

**활용법**

```python
try:
    <코드 블럭 1>
except 예외:
    <코드 블럭 2>
finally:
    <코드 블럭 3>
```

![image-20210722223455025](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223455025.png)



## 에러 메시지 처리 `as`

`as` 키워드를 활용하여 에러 메시지를 보여줄 수도 있습니다.

------

**활용법**

```python
try:
    <코드 블럭 1>
except 예외 as err:
    <코드 블럭 2>
```

![image-20210722223515801](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223515801.png)



## 예외 발생 시키기(Exception Raising)

### `raise`

`raise`를 통해 예외를 강제로 발생시킬 수 있습니다.

------

**활용법**

```python
raise <에러>('메시지')
```

![image-20210722223533342](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210722223533342.png)



## assert

`assert` 문은 예외를 발생시키는 다른 방법입니다.

보통 **상태를 검증하는데 사용**되며 무조건 `AssertionError`가 발생합니다.

------

**활용법**

```python
assert Boolean expression, error message

assert len([1, 2]) == 1, '길이가 1이 아닙니다.'
```

------

위의 검증식이 거짓일 경우를 발생합니다.

일반적으로 디버깅용도로 사용됩니다. [파이썬 문서](https://docs.python.org/ko/3/reference/simple_stmts.html#the-assert-statement)

```bash
$ python code.py
Traceback (most recent call last):
  File "code.py", line 1, in <module>
    assert len([1, 2]) == 1, '길이가 1이 아닙니다.'
AssertionError: 길이가 1이 아닙니다.

$ python -O code.py
```