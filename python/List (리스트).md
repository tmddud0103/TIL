

# List (리스트)

> 시퀀스형 컨테이너

- 순서 O (mutable)
- 시퀀스로 인덱스를 통해 접근
  - 대괄호([]) 혹은 list()를 통해 생성
- 인덱스는 0부터 접근
  - list[]

## 리스트 갯수 출력

```python
a = [1, 2, 3, 4, 5, 6]
print(len(a))
# 3
```



## 값 카운트

```python
students = ['이영희', '김철수', '이영희', '조민지', '김철수', '조민지', '이영희', '이영희']

# 아래에 코드를 작성하시오.
coun = 0
for i in students:
    if i == '이영희':
        coun += 1
print(coun)

print(students.count('이영희'))
```

### count

- 시퀀스에서의 특정 원소의 개수

  - 시퀀스에 등장하지 않는 경우 0 반환

```python
a = [1,2,1,1,4].count(1)
print(a)
# 3
```





## 리스트 값 추가, 삭제

#### .append(x)

- 리스트에 **값**을 **추가**

![image-20210726100532855](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726100532855.png)



#### .extend(*iterable*)

- *itreable* -> **항목을 추가**

![image-20210726100636744](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726100636744.png)



#### .insert(i, x)

- 정해진 위치 i에 x값 추가

![image-20210726100822575](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726100822575.png)





#### .remove(x)

- 리스트에서 값이 x인 것 삭제
- x값 전체가 아닌 x인 값 **하나만** 삭제

![image-20210726101033818](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726101033818.png)



#### .pop(i)

- 정해진 위치 i에 있는 값을 삭제하고, 그 항목을 반환함
- i 값을 지정하지 않으면, 마지막 항목을 삭제하고 반환함

![image-20210726101149790](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726101149790.png)

```python
x = number.pop()
return(x)
# 3
```

 

#### .clear()

- 모든 항목을 삭제
- 리스트를 없애는 것이 아닌 리스트 안의 항목들을 삭제

![image-20210726101300494](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210726101300494.png)



## 리스트 탐색, 정렬

### .index(x)

- 첫번째 x값을 찾아 해당  index값을 반환
- 없는경우 ValueError

```python
numbers = [1,2,3,4]
print(numbers.index(3))
# 2
```



### .count(x)

- 원하는 값의 x의 개수를 반환
- 찾고자하는 x값이 없다면 0**을 반환**

![image-20210726101606158](List (리스트).assets/image-20210726101606158.png)



### .sort()

- 원본 리스트를 정렬함.
- **None 반환**
- sorted 함수는 정렬된 리스트를 반환

.sort()

원본 변경 -> 정렬

sort() 자체값은 None

sorted(x)

원본 변경 X, 함수 안의 새로운 값이 정렬

![image-20210726101728666](List (리스트).assets/image-20210726101728666.png)



#### .reverse()

- 순서를 반대로 뒤집음
- 원본을 뒤집고 출력 값은 None (sort와 동일)



### 리스트 복사

![image-20210726102135968](List (리스트).assets/image-20210726102135968.png)





![image-20210726102200689](List (리스트).assets/image-20210726102200689.png)







### 리스트의 복사 - 얕은 복사(shallow copy)

![image-20210726102242912](List (리스트).assets/image-20210726102242912.png)

![image-20210726102304514](List (리스트).assets/image-20210726102304514.png)



#### 참고사항

![image-20210726102343944](List (리스트).assets/image-20210726102343944.png)



### 깊은 복사 (deep copy)

![image-20210726102524905](List (리스트).assets/image-20210726102524905.png)

