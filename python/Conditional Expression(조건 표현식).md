# 조건 표현식(Conditional Expression)

> - 조건 표현식은 일반적으로 조건에 따라 값을 정할 때 활용됩니다.
> - **삼항 연산자(Ternary Operator)**라고 부르기도 합니다

```python
[연습] 조건 표현식 작성하기
다음의 코드와 동일한 조건 표현식을 작성해보세요.

num = 2
if num % 2:
    result = '홀수입니다.'
else:
    result = '짝수입니다.'
print(result)


[출력 예시]

짝수입니다
```

```python
result = '홀수입니다.' if num % 2 else '짝수입니다.'
print(result)
```

잘 쓰이지는 않는다

