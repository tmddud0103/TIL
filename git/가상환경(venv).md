# 가상환경(venv)

- 파이썬 표준 라이브러리가 아닌 외부 패키지와 모듈을 사용하는 경우

  모두 pip를 통해 설치를 해야함

- 복수의 프로젝트를 하는 경우 버전이 상이할 수 있음

  - ex) 프로젝트1 = 버전 2.x & 프로젝트2 = 버전 3.x

- 이러한 경우 가상환경을 만들어 프로젝트별로 독립적인 패키지를 관리 할 수 있음



## venv

- 가상 환경을 만들고 관리하는데 사용되는 모듈 (파이썬 버전 3.5부터)
- 특정 디렉토리에 가상 환경을 만들고, 고유한 파이썬 패키지 집합을 가질 수 있음
  - 특정 폴더에 가상 환경이 있고
  - 실행 환경(ex. bash)에서 가상 환경을 활성화시켜
  - 해당 폴더에 있는 패키지를 관리/사용함



## 가상환경 생성

![image-20210728093533239](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728093533239.png)

![image-20210728093709660](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728093709660.png)

![image-20210728093821789](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728093821789.png)

![image-20210728094017300](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728094017300.png)

(venv) <-생성 <- 환경이 활성화되어있다는 뜻

![image-20210728094143433](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210728094143433.png)



주의

- 폴더에 가상환경이 활성화 되는 것이 아니라 폴더를 통해 가상 환경을 활성화 시키는 것이다.
- 폴더를 나가도 활성화 된 가상 환경이 꺼지지 않는다.
- 그래도 venv폴더 안에서 프로젝트 파일을 만드는게 일반적!
- 각각의 프로젝트 폴더의 최상단에 위치한다.

