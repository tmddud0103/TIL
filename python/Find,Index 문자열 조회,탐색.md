# Find/Index 문자열 조회/탐색 

## .find(x)

> x의 첫 번째 위치를 반환.
>
> 없으면 **-1을 반환**

```python
'apple'.find('p')
```

```bash
1
```



```python
'apple'.find('k')
```

```bash
-1
```



## .index(x)

> x의 첫 번째 위치를 반환.
>
> 없으면 **오류 발생**

```python
 'apple'.index('p')
```

```bash
1
```



```python
'apple'.index('k')
```

```bash
ValueError
```





