# CSS 기본 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="semantic.css">
  <title>Layout Practice</title>
</head>
<body >
  <header class="header">
    <h1>header</h1>
  </header>
  <nav class="nav">
    <h2>nav</h2>
  </nav>
  <div class="clearfix">
    <section class="section">
      <h2>section</h2>
      <article>
        <h3>article1</h3>
      </article>
      <article>
        <h3>article2</h3>
      </article>
    </section>
    <aside class="aside">
      <h2>aside</h2>
    </aside>
  </div>  
  <footer class="footer">
    <h2>footer</h2>
  </footer>
</body>
</html>
```

```css
/* 아래 코드는 수정하지 마세요. */
body {
  font-family: Arial;
  width: 800px;
}

section {
  float: left;
  margin-left: 4px;
}

aside { 
  float: right;
  margin-right: 4px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
*
/* 모든 스타일 요소를 ***클래스***로 만들어 작성 후 사용합니다. */
.header {
  border: 1px solid black;
  background-color: lightgray;
  text-align: center;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;
}
.nav {
  border: 1px solid black;
  background-color: lightgray;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;
}
.section {
  border: 1px solid black;
  width: 490px;
  height: 300px;
  background-color: lightgray;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px;
  position: absolute;
}
.aside {
  border: 1px solid black;
  width: 280px;
  height: 300px;
  background-color: lightgray;
  border-radius: 4px;
  padding: 4px;
}
article {
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;
}
.footer {
  border: 1px solid black;
  background-color: lightgray;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;
}
```

![image-20210803170543993](C:\Users\tmddu\AppData\Roaming\Typora\typora-user-images\image-20210803170543993.png)

