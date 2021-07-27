# Data structure (세트, set)

> 변경 가능하고(mutable), 순서가 없고(unordered), 순회 가능한(iterable)

데이터 구조로서의 세트(set)와 조작법(method)

## .add(elem)

elem을 세트에 추가합니다.

```python
a = {'사과', '바나나', '수박'}
a.add('포도')
print(a)
```

```bash
{'사과', '포도', '바나나', '수박'}
```



## .update(*others)

여러 값을 추가합니다.

인자로는 반드시 iterable 데이터 구조를 전달해야합니다.

```python
a = {'사과', '바나나', '수박'}
a.update({'토마토', '토마토', '딸기'} ,{'포도', '레몬'})
print(a)
```

```bash
{'딸기', '토마토', '바나나', '수박', '레몬', '사과', '포도'}
```



## .remove(elem)

elem을 세트에서 삭제하고, 없으면 KeyError가 발생합니다. 

```python
a = {'사과', '바나나', '수박'}
a.remove('dovmf')
print(a)
```

```bash
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
~\AppData\Local\Temp/ipykernel_18824/1272207962.py in <module>
      1 # remove 메서드로 세트 a에 '애플'과 '사과'를 각각 입력한 이후 세트 a를 출력해봅시다.
----> 2 a.remove('dovmf')
      3 print(a)

KeyError: 'dovmf'
```



![image-20210726110603108](Data structure (세트, set).assets/image-20210726110603108.png)



![image-20210726110641660](Data structure (세트, set).assets/image-20210726110641660.png)

임의의 원소를 제거해 **반환**

랜덤으로 삭제

세트가 비어있는 경우 KeyError

