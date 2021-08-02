# Error (에러)

## 문법 에러(Syntax Error)

> 문법 에러가 있는 프로그램은 실행되지 않습니다.

- 에러 발생 시 `SyntaxError`라는 키워드와 함께, 에러의 상세 내용을 보여줍니다.

- `파일이름`과 `줄번호`, `^` 문자를 통해 파이썬이 코드를 읽어 들일 때(`parser`) 문제가 발생한 위치를 표현합니다.

- `parser` 는 줄에서 에러가 감지된 가장 앞의 위치를 가리키는 캐럿(caret)기호(`^`)를 표시합니다.

![image-20210722223108532](photo\image-20210722223108532.png)

## 예외(Exception)

> 실행 도중 예상하지 못한 상황(exception)을 맞이하면, 프로그램 실행을 멈춥니다.

- 문법적으로는 옳지만, 실행시 발생하는 에러입니다.

- *아래 제시된 모든 에러는 `Exception`을 상속받아 이뤄진다.*

```
ZeroDivisionError
NameError 
TypeError                                 
ValueError     
IndexError                                
KeyError                              
ModuleNotFoundError                  
ImportError                               
KeyboardInterrupt                         
```