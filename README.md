# wetube
## 빨강's wetube v0.1.0
## Wetube Clone built using NodeJS, Express, Mongo and ES6 💖💖💖

### v0.1.0 - 2023.01.29 - heroku upload first!
### v0.0.9 - 2023.01.29 - oAuth Login (Github)
### v0.0.8 - 2023.01.28 - Express Session MongoStore
### v0.0.7 - 2023.01.28 - Express Session
### v0.0.6 - 2023.01.27 - MongoDB User Account
### v0.0.5 - 2023.01.27 - MongoDB CRUD
### v0.0.4 - 2023.01.26 - Unused Database (Fake Database)
### v0.0.3 - 2023.01.26 - pug + MVP CSS6 // "-" 대한 README.md 기능확인 동그라미 점으로 표시됨
### v0.0.2 - 2023.01.26 - rout // ">" 대한 README.md 기능확인 ">"이후의 글은 왼쪽에 줄이 생김
### v0.0.1 - 2023.01.26 - Default Express
### v0.0.0 - 2023.01.26 - init 

1.사용자 인증(로그인 / 계정 만들기)
 - "/" home
 - "/join" Join
 - "/login" Login
 - "/search" Search

2.프로필 편집 / 암호 변경
 - "users/:id" See User
 - "users/logout" Log Out
 - "users/edit" Edit user
 - "users/delete" Delete user

3.동영상 업로드
 - "/videos/upload" Video Upload

4.동영상 검색
 - "/videos/search" Video Search

5.동영상 편집
 - "/videos/id:/edit" Video Edit

5-1.동영상 삭제
 - "/videos/id:/delete" Video Delete

6.동영상 보기
 - "/videos/id:" Video See

7.Javascript 비디오 플레이어
 - 6.확장
 - video player (HTML,SCSS)

8.댓글 섹션 + 코드 챌린지(Watch: 16))
 - "videos/comments" Comment on a video
 - "videos/comments/delete" Delete A Commnet of a Video
 - 6.확장
 - 밑에 댓글


# 0.초기설정
npm i nodemon --save-dev
npm i @babel/core @babel/node @babel/preset-env --save-dev
### touch bable.config.json
```json
{
    "presets":["@babel/preset-env"]
}
```
### index.js -> src/server.js

### config.json
```json
"scripts": {
    "win": "node src/server.js",
    "start": "node src/server.js",
    "dev": "nodemon --exec babel-node src/server.js"
  }
```
### HTML을 위한 pug설치
### npm i pug

### Express는 기본적으로 form을 받을 수 없음
### server.js에 app.use(express.urlencoded({ extended: true })); 추가로 form을 받을 수 있게됨

### Mongoose install
### npm i mongoose

### Windows 에서 Mogodb는 mongosh를 받아 설치후 path등록 필요
### mongoose.connect전에 mongoose.set('strictQuery',true); 등록 필요
### mongoose.connect의 주소가 localhost로 되어있으면 접속이 안되어서 127.0.0.1:27017/~ 로 변경필요

### Session -> Express-session
### npm i express-session


# 1.사용자 인증(로그인 / 계정 만들기)
 ## - "/" home
   ### /
```javascript
    const handleHome = (req, res) => res.send("Home");
    app.use("/", handleHome);
```
   ### Middleware
```javascript
    const middleware = (req, res) =>{
        next();
    }
    const handleHome = (req, res) => res.send("Home");
    app.use("/", middleware, handleHome);
```
   ### 라우터
```javascript
    const userRouter = express.Router();
    const handleEditUser = (req, res) => res.send("Edit User");
    userRouter.get("/edit", handleEditUser);
```
   ###  각 라우터마다 파일생성
   ###  src/globalRouter.js
   ###  src/videoRouter.js
   ###  src/userRouter.js

```javascript
    import express from "express";
    const userRouter = express.Router();
    const handleEditUser = (req, res) => res.send("Edit User");
    userRouter.get("/edit", handleEditUser);
    export default userRouter;
```

   ### 각 컨트롤별 get메소드 추가

```javascript
    const handleJoin = (req, res) => res.send("Join");
    globalRouter.get("/join", handleJoin);
```

 ## - "/join" Join
   ###  src/globalRouter.js
```javascript
    const handleJoin = (req, res) => res.send("Join");
    globalRouter.get("/join", handleJoin);
```
 ## - "/login" Login
   ###  src/globalRouter.js
```javascript
    const handleLogin = (req, res) => res.send("Login");
    globalRouter.get("/login", handleLogin);
```
 ## - "/search" Search
   ###  src/globalRouter.js
```javascript
    const handleSearch = (req, res) => res.send("Search");
    globalRouter.get("/search", handleSearch);
```

# 2.프로필 편집 / 암호 변경
 ## - "users/edit" Edit user
 ## - "users/delete" Delete user

# 3.동영상 업로드
 ## - "/videos/upload" Video Upload

# 4.동영상 검색
 ## - "/videos/search" Video Search

# 5.동영상 편집
 ## - "/videos/edit" Video Edit

# 6.동영상 보기
 ## - "/videos/watch" Video Watch

# 7.Javascript 비디오 플레이어
 ## - 6.확장
 ## - video player (HTML,SCSS)

# 8.댓글 섹션 + 코드 챌린지(Watch: #16))
 ## - "videos/comments" Comment on a video
 ## - "videos/comments/delete" Delete A Commnet of a Video
 ## - 6.확장
 ## - 밑에 댓글



<!-- 마크다운 


마크다운에서는 ```를 사용해서 코드 블록을 사용할 수 있다.

```
여기에 코드 넣기
```
 

또 코드 블럭 코드(```) 시작점에 사용하는 언어를 선언하여 문법 강조가 가능하다. 아래 표가 코드블록에서 사용가능한 언어이다.

언어	Markdown	언어	    Markdown
Bash	bash	    JSON	    json
C#	    cs	        Java	    java
C++	    cpp	        JavaScript	javascript
CSS	    css	        PHP	        php
Diff	diff	    Perl	    perl
HTML,XML	html	Python	    python
HTTP	http	    Ruby	    ruby
Ini	    ini	        SQL	        sql
 

만일 python에 대한 코드 블록을 사용하고 싶다면 아래와 같이 사용하면 된다.

```python
print('hello')
```

-->