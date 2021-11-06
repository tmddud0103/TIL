[TOC]

# SQL with django ORM

## 기본 준비 사항

```bash
# 폴더구조

99_sql # only SQL
    hellodb.csv
    tutorial.sqlite3
    users.csv
99_sql_orm # SQL + ORM
    ...
    users.csv # 해당 디렉토리로 다운로드
```

* django app

  * 가상환경 세팅

  * 패키지 설치

  * migrate

    ```bash
    $ python manage.py migrate
    $ python manage.py sqlmigrate users 0001
    ```

* `db.sqlite3` 활용

  * `sqlite3`  실행

    ```bash
    $ ls
    db.sqlite3 manage.py ...
    $ sqlite3 db.sqlite3
    ```

  * csv 파일 data 로드

    ```sqlite
    sqlite > .tables
    auth_group                  django_admin_log
    auth_group_permissions      django_content_type
    auth_permission             django_migrations
    auth_user                   django_session
    auth_user_groups            auth_user_user_permissions  
    users_user
    sqlite > .mode csv
    sqlite > .import users.csv users_user
    sqlite > SELECT COUNT(*) FROM users_user;
    100
    ```

* 확인

  * sqlite3에서 스키마 확인

    ```sqlite
    sqlite > .schema users_user
    CREATE TABLE IF NOT EXISTS "users_user" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "first_name" varchar(10) NOT NULL, "last_name" varchar(10) NOT NULL, "age" integer NOT NULL, "country" varchar(10) NOT NULL, "phone" varchar(15) NOT NULL, "balance" integer NOT NULL);
    ```



---



## 문제

> 아래의 문제들을 보면서 서로 대응되는 ORM문과 SQL문을 작성하시오.
>
> **vscode 터미널을 좌/우로 나누어 진행하시오. (sqlite / shell_plus)**

`.headers on` 만 켜고 작성해주세요.

##### shell_plus 실행

`python manage.py shell_plus`

### 1. 기본 CRUD 로직

1. 모든 user 레코드 조회

   ```python
   # orm
   User.objects.all()
   ```

      ```sql
   -- sql
   SELECT * FROM users_user;
      ```

2. user 레코드 생성

   ```python
   # orm
   In [6]: User.objects.create(first_name='길동',
      ...: last_name='홍',
      ...: age=10,
      ...: country='제주',
      ...: phone='010-0000-1111',
      ...: balance=100,
      ...: )
   ```

   ```sql
   -- sql
   INSERT INTO users_user VALUES(102, '길동', '김', 20, '서울', '010-1234-0000', 100);
   ```

   * 하나의 레코드를 빼고 작성 후 `NOT NULL` constraint 오류를 orm과 sql에서 모두 확인 해보세요.

   

3. 해당 user 레코드 조회

   - `102` 번 id의 전체 레코드 조회

   ```python
   # orm
   In [8]: User.objects.all().last()
   Out[8]: <User: User object (102)>
   In [9]: User.objects.get(pk=102)
   Out[9]: <User: User object (102)>
   ```

   ```sql
   -- sql
   SELECT * FROM users_user WHERE id=102;
   
   
   id,first_name,last_name,age,country,phone,balance
   102,"길동","김",20,"서울",010-1234-0000,100
   ```

4. 해당 user 레코드 수정

   - ORM: `102` 번 글의 `last_name` 을 '김' 으로 수정
   - SQL: `102` 번 글의 `first_name` 을 '철수' 로 수정

   ```python
   # orm
   In [11]: user = User.objects.get(pk=102)
   
   In [12]: user
   Out[12]: <User: User object (102)>
   
   In [13]: user.last_name
   Out[13]: '김'
   
   In [14]: user.last_name = '홍'
   
   In [15]: user.save()
   
   In [16]: user.last_name
   Out[16]: '홍'
   ```

      ```sql
   -- sql
   UPDATE users_user SET first_name='철수' WHERE id=102;
   SELECT * FROM users_user WHERE id=102;
   
   
   id,first_name,last_name,age,country,phone,balance
   102,"철수","홍",20,"서울",010-1234-0000,100
      ```

5. 해당 user 레코드 삭제

   - ORM: `102` 번 글 삭제
   - `SQL`:  `101` 번 글 삭제 

   ```python
   # orm
   In [17]: user = User.objects.get(pk=102)
   
   In [18]: user.delete()
   Out[18]: (1, {'users.User': 1})
   
   In [19]: User.objects.get(pk=102)
   ---------------------------------------------------------------------------
   DoesNotExist  
   
   # case2
   User.objects.get(pk=102).delete()
   ```
   
   ```sql
   -- sql
   sqlite> DELETE FROM users_user WHERE id=101;
   sqlite> SELECT * FROM users_user WHERE id=101;
   -- 출력값이 없음
   ```



---



### 2. 조건에 따른 쿼리문

1. 전체 인원 수 

   - `User` 의 전체 인원수

   ```python
   # orm
   In [20]: len(User.objects.all())
   Out[20]: 100
   
   In [21]: User.objects.count()
   Out[21]: 100
   ```

   ```sql
   -- sql
   sqlite> SELECT COUNT(*) FROM users_user;
   COUNT(*)
   100
   ```

2. 나이가 30인 사람의 이름

   - `ORM` : `.values` 활용
     - 예시: `User.objects.filter(조건).values(컬럼이름)`

   ```python
   # orm
   In [22]: User.objects.filter(age=30)
   Out[22]: <QuerySet [<User: User object (5)>, <User: User object (57)>, <User: User object (60)>]>
   
   In [23]: User.objects.filter(age=30).values('first_name')
   Out[23]: <QuerySet [{'first_name': '영환'}, {'first_name': '보람'}, {'first_name': '은영'}]>
   ```

      ```sql
   -- sql
   sqlite> SELECT first_name FROM users_user WHERE age=30;
   first_name
   "영환"
   "보람"
   "은영"
      ```

3. 나이가 30살 이상인 사람의 인원 수

   -  ORM: `__gte` , `__lte` , `__gt`, `__lt` -> 대소관계 활용

   ```python
   # orm
   In [25]: User.objects.filter(age__gte=30).count()
   Out[25]: 43
   ```

      ```sql
   -- sql
   
   sqlite> SELECT COUNT(*) FROM users_user WHERE age >=30;
   COUNT(*)
   43
      ```

4. 나이가 20살 이하인 사람의 인원 수 

   ```python
   # orm
   In [26]: User.objects.filter(age__lte=20).count()
   Out[26]: 23
   ```

   ```sql
   -- sql
   sqlite> SELECT COUNT(*) FROM users_user WHERE age <= 20; 
   COUNT(*)
   23
   ```

5. 나이가 30이면서 성이 김씨인 사람의 인원 수

   ```python
   # orm
   In [27]: User.objects.filter(age=30, last_name='김').count()
   Out[27]: 1
   ```

      ```sql
   -- sql
   sqlite> SELECT COUNT(*) FROM users_user WHERE age = 30 AND last_name='김'; 
   COUNT(*)
   1
      ```

6. 나이가 30이거나 성이 김씨인 사람?

   ```python
   # orm
   In [28]: User.objects.filter(Q(age=30) | Q(last_name='김')).count()
   Out[28]: 25
   
   # Q는 무엇인가? 
   # 장고에 내장되어있는 form
   In [29]: Q(age=30)
   Out[29]: <Q: (AND: ('age', 30))>
   
   In [30]: Q(age=30) | Q(last_name='김')
   Out[30]: <Q: (OR: ('age', 30), ('last_name', '김'))>
   ```

   ```sql
   -- sql
   sqlite> SELECT COUNT(*) FROM users_user WHERE age = 30 OR last_name='김';  
   COUNT(*)
   25   
   ```

7. 지역번호가 02인 사람의 인원 수

   - `ORM`: `__startswith` 

   ```python
   # orm
   In [31]: User.objects.filter(phone__startswith='02').count()
   Out[31]: 24
   ```

      ```sql
   -- sql
   sqlite> SELECT COUNT(*) FROM users_user WHERE phone like '02-%';
   COUNT(*)
   24  
      ```

8. 거주 지역이 강원도이면서 성이 황씨인 사람의 이름

   ```python
   # orm
   In [32]: User.objects.filter(country='강원도', last_name='황')
   Out[32]: <QuerySet [<User: User object (22)>]>
   
   In [33]: User.objects.filter(country='강원도', last_name='황').values('first_name')
   Out[33]: <QuerySet [{'first_name': '은정'}]>
   
   In [34]: User.objects.filter(country='강원도', last_name='황').values('first_name').first()  
   Out[34]: {'first_name': '은정'}
   
   In [35]: User.objects.filter(country='강원도', last_name='황').values('first_name').first().get('first_name')
   Out[35]: '은정'
   ```
   
      ```sql
   -- sql
   sqlite> SELECT first_name FROM users_user WHERE country='강원도' AND last_name='황'; 
   first_name
   "은정"  
      ```



---



### 3. 정렬 및 LIMIT, OFFSET

1. 나이가 많은 사람순으로 10명

   ```python
   # orm
   User.objects.order_by('-age')[:10]
   ```

      ```sql
   -- sql
   SELECT * FROM users_user ORDER BY age DESC LIMIT 10;
      ```

2. 잔액이 적은 사람순으로 10명

   ```python
   # orm
   User.objects.order_by('balance')[:10]
   ```

      ```sql
   -- sql
   SELECT * FROM users_user ORDER BY balance ASC LIMIT 10;
      ```

3. 잔고는 오름차순, 나이는 내림차순으로 10명?

      ```python
   # orm
   User.objects.order_by('balance', '-age')[:10]
   ```
   
   ```sql
   -- sql
   SELECT * FROM users_user ORDER BY balance, age DESC LIMIT 10; 
   
   -- or
   SELECT * FROM users_user ORDER BY balance ASC, age DESC LIMIT 10;
   ```
   
4. 성, 이름 내림차순 순으로 5번째 있는 사람

   ```python
   # orm
   User.objects.order_by('-last_name', '-first_name')[4]
   ```
   
      ```sql
   -- sql
   SELECT * FROM users_user ORDER BY last_name DESC, first_name DESC LIMIT 1 OFFSET 4;
      ```



---



### 4. 표현식

> ORM: `aggregate` 사용
>
> https://docs.djangoproject.com/en/3.2/topics/db/aggregation/#aggregation
>
> - '종합', '합계' 등의 사전적 의미
> - 특정 필드 전체의 합, 평균 등을 계산할 때 사용

1. 전체 평균 나이

   ```python
   # orm
   In [40]: User.objects.aggregate(Avg('age'))
   Out[40]: {'age__avg': 28.23}
   ```

      ```sql
   -- sql
   sqlite> SELECT AVG(age) FROM users_user; 
   AVG(age)
   28.23   
      ```

2. 김씨의 평균 나이

   ```python
   # orm
   In [41]: User.objects.filter(last_name='김').aggregate(Avg('age'))
   Out[41]: {'age__avg': 28.782608695652176}
   ```

      ```sql
   -- sql
   sqlite> SELECT AVG(age) FROM users_user WHERE last_name='김';; 
   AVG(age)        
   28.7826086956522
      ```

3. 강원도에 사는 사람의 평균 계좌 잔고

   ```python
   # orm
   In [42]: User.objects.filter(country='강원도').aggregate(Avg('balance'))
   Out[42]: {'balance__avg': 157895.0}
   ```

   ```sql
   -- sql
   sqlite> SELECT AVG(balance) FROM users_user WHERE country='강원도';
   AVG(balance)
   157895.0
   ```

4. 계좌 잔액 중 가장 높은 값

   ```python
   # orm
   In [43]: User.objects.aggregate(Max('balance'))
   Out[43]: {'balance__max': 1000000}
       
   In [47]: User.objects.order_by('-balance').first().balance
   Out[47]: 1000000
   ```

      ```sql
   -- sql
   sqlite> SELECT MAX(balance) FROM users_user;                        
   MAX(balance)
   1000000 
      ```

5. 계좌 잔액 총액

   ```python
   # orm
   In [45]: User.objects.aggregate(Sum('balance'))
   Out[45]: {'balance__sum': 14425040}
   ```
   
      ```sql
   -- sql
   sqlite> SELECT SUM(balance) FROM users_user; 
   SUM(balance)
   14425040 
      ```







```sql
DISTINCT
SELECT COUNT(DISTINCT name) FROM ANIMAL_INS ORDER BY COUNT(NAME) IS NOT NULL
```

조회하려는 칼럼의 중복되는 값은 제거 후 보여준다.

DISTINCT 키워드 뒤에 2개 이상의 칼럼을 정의하면 

하나의 RECORD로 인식하여 DISTINCT 키워드 이후에 오는 칼럼에 대해 모두 중복 제거한다.