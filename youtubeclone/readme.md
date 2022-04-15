# Express - node.js 
위 프로젝트는 [나나블로그](https://nykim.work/38)에서 노마드코더 유튜브 클론코딩 과정을 따라하며 __Express, PUG, node.js__ 에 익숙해지기 위한 프로젝트입니다.

## 공부내용
### Express

### PUG
pug는 HTML파일을 간단하게 작성하기 위한 템플릿 엔진이다.
- 컴파일 후 html 문서를 렌더링하는 형식이라 생산성이 높다.
- 들여쓰기를 통해 태그를 대신한다.
```
app.set('view engine', 'pug');
```
- views폴더에 pug들을 저장한 뒤, app.js에 위 구문을 작성하면 자동으로 pug 파일들을 view engine으로 사용한다.
```
res.send("")
res.render('home');
```
- res에서 send 대신 render으로 대체하면 자동으로 views 폴더에 있는 'home.pug'파일을 불러온다.
```
extends layouts/main
```
- 상속 기능을 extends로 사용하여 layouts/main 파일에서 템플릿을 상속받아올 수 있다.
- 해당 기능을 이용하여 반복되는 구문을 템플릿으로 작성하여 함수처럼 사용할 수 있다.
- block 키워드를 사용하여 매개변수처럼 원하는 데이터만 넣어줄 수 있다.
```
res.render("join", {pageTitle: "Join"});
```
- render에서 두번째 인자(옵션)으로 locals를 받아 넘겨줄 수 있다.

### node.js
- app.use
    - use는 __res, get, next__ 3개의 매개변수를 받는다.
    - app.use()는 미들웨어 기능을 마운트하거나 지정된 경로에 마운트하는 데 사용된다.
    - 기본 경로가 일치하면 미들웨어 기능이 실행된다.

- 미들웨어
    - 중간 처리를 위한 함수.
    - 요청에 대한 응답 완료 전 중간에 다양한 일을 처리 가능하다.

- import와 export를 통해 파일을 나눠 작성할 수 있다.