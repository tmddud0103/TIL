# command

> 리눅스 기본 명령어 정리



### 이동

##### pwd (print working directory)

- 현재 나의 위치를 확인하는 명령어

```bash
pwd
#현재 위치
```



 ##### ls (list)

- 현재 나의 위치에 있는 파일과 폴더들을 보여주는 명령어
  - `-a` 옵션을 사용하면 숨김폴더, 파일까지 확인 할 수 있다.
  - `.`은 현재폴더, `..`은 상위폴더를 의미한다.

```bash
ls
#폴더 리스트 보기
ls -a
#폴더 리스트 숨김폴더포함 보기
```



##### cd (change directory)

- 해당 위치로 이동하는 명령어
  - `..`은 상위 폴더를 의미한다.

```bash
cd <folder name>
#<folder name> 이동
cd ..
#뒤로 가기
```



### 생성

##### mkdir (make directory)

- 폴더를 생성하는 명령어

```bash
mkdir <floder name>
#폴더 생성
```



##### touch

- 파일을 생성하는 명령어

```bash
touch <flie name>
#파일 생성
```



### 삭제

##### rm (remove)

- 파일 삭제
  - 폴더를 삭제하기 위해서는 `-r` 옵션을 정해줘야 함 (recursive)
  - `-f` 옵션을 통해 **강제로** 삭제할 수 있다.
  - 뒤에 폴더, 파일이름 지정을 안하면 삭제 안됨!

```bash
rm <filemane>
#파일 삭제
rm -r <folder name>
#폴더 삭제
rm -rf <folder name>
#폴더 강제 삭제
```



