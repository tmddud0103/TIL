# round, abs

> 3. 5- 3.12 = 0.380000000001

### round(반올림)

```python
round(3.5 - 3.12, 2)
# 0.38
# 0~4는 내림, 5는 올림
#round(값, 소수점자리수)
```



### 기본적인 처리 방법

```python
a = 3.5 - 3.12
b = 0.38

abs(a - b) <= 1e-10
```

```python
import sys
abs(a - b) <= sys.float_info.epsilon
#epsilon은 부동소수점 연산에서 반올림을 함으로써 발생하는 오차 상환
```

```python
import math
math.isclose(a, b)
#python 3.5부터 활용 가능한 amth모듈
```

