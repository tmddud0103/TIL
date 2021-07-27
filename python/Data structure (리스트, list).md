# Data structure (리스트, list)

> 변경 가능하고(mutable), 순서가 있고(ordered), 순회 가능한(iterable)

데이터 구조로서의 리스트(list)와 조작법(method)



# 값 추가 및 삭제



## .append(x)

- 리스트에 값을 추가

## .extend(iterable)

리스트에 iterable(list, range, tuple, string**[주의]**) 값을 붙일 수가 있습니다.



```python
# .append
# 변수명이 cafe인 리스트를 만들어봅시다.
# 그리고 append 메서드로 리스트에 banapresso를 추가해봅시다.
cafe = ['starbucks', 'tomntoms', 'hollys']
print(cafe)
cafe.append('banapresso')
print(cafe)
```

```bash
['starbucks', 'tomntoms', 'hollys']
['starbucks', 'tomntoms', 'hollys', 'banapresso']
```



```python
# .extend 
# extend 메서드로 변수 cafe에 ['wcafe', '빽다방']를 추가해봅시다.
cafe.extend(['wcafe', '빽다방'])
print(cafe)
```

```bash
['starbucks', 'tomntoms', 'hollys', 'banapresso', 'wcafe', '빽다방']
```



```python
# += 연산자
# += 연산자로 변수 cafe에 ['mc_cafe', 'droptop']를 추가해봅시다.
# 앞서 배운 list concatenate와 동일합니다.
cafe += ['mc_cafe', 'droptop']
print(cafe)
```

```bash
['starbucks', 'tomntoms', 'hollys', 'banapresso', 'wcafe', '빽다방', 'mc_cafe', 'droptop']
```



```python
# append vs extend
cafe.append(['coffeenie'])
print(cafe)
cafe.extend(['twosome_place'])
print(cafe)

# extend 메서드로 변수 cafe에 문자열 ediya를 추가해봅시다.
cafe.extend('eidya')
print(cafe)
```

```bash
['starbucks', 'tomntoms', 'hollys', 'banapresso', 'wcafe', '빽다방', 'mc_cafe', 'droptop', ['coffeenie']]

['starbucks', 'tomntoms', 'hollys', 'banapresso', 'wcafe', '빽다방', 'mc_cafe', 'droptop', ['coffeenie'], 'twosome_place']
['starbucks', 'tomntoms', 'hollys', 'banapresso', 'wcafe', '빽다방', 'mc_cafe', 'droptop', ['coffeenie'], 'twosome_place', 'e', 'i', 'd', 'y', 'a']
```



## .insert(i, x)

정해진 위치 `i`에 값을 추가합니다

```python
numbers = [1, 2, 3, 1, 2]
numbers.insert(0,'start')
print(numbers)
```

```bash
 ['start', 1, 2, 3, 1, 2]
```



```python
numbers.insert(len(numbers), 'end')
print(numbers)
```

```bash
 ['start', 1, 2, 3, 1, 2, 'end']
```

![image-20210726100822575](Data structure (리스트, list).assets/image-20210726100822575.png)



## .remove(x)

리스트에서 값이 x인 것을 삭제합니다.

```python
numbers = [1, 2, 3, 1, 2]

numbers.remove(1)
print(numbers)

numbers.remove(1)
print(numbers)

numbers.remove(1)
print(numbers)
```

```bash
[2, 3, 1, 2]

[2, 3, 2]

---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
~\AppData\Local\Temp/ipykernel_7452/1326049472.py in <module>
      1 # remove 메서드로 1을 한번 더 삭제 해봅시다.
      2 # remove는 값이 없으면 오류가 발생합니다. 확인해봅시다.
----> 3 numbers.remove(1)
      4 print(numbers)

ValueError: list.remove(x): x not in list
```



## .pop(i)

정해진 위치 `i`에 있는 값을 삭제하며, 그 항목을 반환합니다.

`i`가 지정되지 않으면 마지막 항목을 삭제하고 되돌려줍니다.

```python
numbers = [1, 2, 3, 4, 5, 6]
result = numbers.pop()
print(result)
print(numbers)
```

```bash
6
[1, 2, 3, 4, 5]
```



## .clear()

리스트의 모든 항목을 삭제합니다.

```python
numbers = [1, 2, 3, 4, 5, 6]
numbers.clear()
print(numbers)
```

```bash
[]
```



# 탐색 및 정렬



## .index(x)

x 값을 찾아 해당 index 값을 반환합니다.

```python
a = [1, 2, 3, 4, 5]
a.index(3)

a.index(100)
```

```bash
2

---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
~\AppData\Local\Temp/ipykernel_7452/2715724184.py in <module>
      1 # index 메서드로 숫자 100이 있는 위치를 확인해봅시다.
      2 # index는 찾는 값이 없으면 오류가 발생합니다.
----> 3 a.index(100)

ValueError: 100 is not in list

```



## .count(x)

원하는 값의 개수를 반환합니다.

```python
a = [1, 2, 5, 1, 5, 1]
a.count(1)
```

```bash
3
```



```python
# 원하는 값을 모두 삭제하려면 다음과 같이 할 수 있습니다.
a = [1, 2, 1, 3, 4]
target_value = 1
for i in range(a.count(target_value)):
    a.remove(target_value)
print(a)
```

```bash
[2, 3, 4]
```



## .sort()

정렬을 합니다.

내장함수 `sorted()` 와는 다르게 **원본 list를 변형**시키고, **`None`**을 리턴합니다.

```python
# 변수 lotto에 1부터 45 까지의 숫자가 들어있는 리스트를 저장합니다.
# 6개의 숫자를 랜덤으로 저장합니다.
import random
lotto = random.sample(range(1, 46), 6)
print(lotto)
# sort 메서드로 리스트를 정렬합니다.
# sort 메서드를 실행한 결과와 원본을 각각 출력해봅니다.
result = lotto.sort()
print(result) # 반환값이 없다!
print(lotto)
```

```bash
[44, 39, 36, 22, 9, 34]

None
[9, 22, 34, 36, 39, 44]
```



```python
# sort 메서드의 reverse옵션을 이용하여 역순 정렬합니다.
lotto.sort(reverse=True)
print(lotto)
```

```bash
[44, 39, 36, 34, 22, 9]
```

### vs sorted

```python
# sorted 함수를 사용한 결과와 비교해봅시다.
import random
lotto = random.sample(range(1, 46), 6)
print(lotto, sorted(lotto))
```

```bash
[1, 31, 26, 13, 14, 30] [1, 13, 14, 26, 30, 31]
```



## .reverse()

반대로 뒤집습니다. **(정렬 아님)**

```python
# 변수 classroom에 이름이 여러개 있는 리스트를 저장합니다.
classroom = ['Tom', 'David', 'Justin']
print(classroom)

# reverse 메서드로 리스트를 역순으로 만들어줍니다.
classroom.reverse()
print(classroom)
```

```bash
['Tom', 'David', 'Justin']
['Justin', 'David', 'Tom']
```



## 리스트 복사



















