# git

### git이란?

분선 소스 버전 관리 시스템

내 개인 컴퓨터 -> 저장 -> github 등에 저장할 수 있다!



### 설치 (이미 했지만 혹시 모르니)

git 서버에 접속하기 전에 두 설정 값을 지정해야한다.

이미 했다면 추가 재설정 할 필요는 없다. 

```bash
#이름, 이메일 설정
git config -- global user.name 'tmddud(예시)'
git config -- global user.email 'tmddud123456@naver.com(예시)'
```





### 저장소 이력보기

```bash
git log

>>commit a3d90d36bd69c3854c3b8abaaabfc1e2e5863278 (HEAD -> master, origin/master)
>>Author: tmddud <tmddud0103@gmail.com>
>>Date:   Thu Jul 15 13:19:10 2021 +0900
>>
>>    add command.md
>>
>>commit cf619f969c237eb6df4c55bcded03e9575adf65e
>>Author: tmddud <tmddud0103@gmail.com>
>>Date:   Thu Jul 15 11:46:39 2021 +0900
>>
>>    add command.md
>>
>>commit 9c3d8f54235aef5ba48f6f07ccefa37bfa026b5c
>>Author: tmddud <tmddud0103@gmail.com>
>>Date:   Thu Jul 15 11:08:21 2021 +0900
>>
>>    add README.md
#뭐 대충 이런 형식으로 로그가 뜬다
```



### 저장하기


```bash
git add linux/command.md
#linux/command.md <- linux 파일 안에 있는 command.md 파일을 추가 하겠다
git status
#모르겠다
git commit -m "add command.md"
#add된 command.md를 커밋(커미션)하겠다. -> 사진을 찍겠다
git push origin master
#커밋된 파일을 오리진마스터(깃허브?)에 push하겠다(업로드 하겠다)
```

