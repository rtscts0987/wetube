# wetube
## 빨강's wetube v0.0.3
## Wetube Clone built using NodeJS, Express, Mongo and ES6 💖💖💖

### 0.0.3 pug + MVP CSS - 2023.01.26 // "-" 대한 README.md 기능확인 동그라미 점으로 표시됨
### 0.0.2 rout - 2023.01.26 // ">" 대한 README.md 기능확인 ">"이후의 글은 왼쪽에 줄이 생김
### 0.0.1 Default Express - 2023.01.26
### 0.0.0 init - 2023.01.26

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


# 1.사용자 인증(로그인 / 계정 만들기)
 ## - "/" home
   ### /
    ```JavaScript
    const handleHome = (req, res) => res.send("Home");
    app.use("/", handleHome);
    ```
   ### Middleware
    ```JavaScript
    const middleware = (req, res) =>{
        next();
    }
    const handleHome = (req, res) => res.send("Home");
    app.use("/", middleware, handleHome);
    ```
   ### 라우터
    ```JavaScript
    const userRouter = express.Router();
    const handleEditUser = (req, res) => res.send("Edit User");
    userRouter.get("/edit", handleEditUser);
    ```
   ###  각 라우터마다 파일생성
   ###  src/globalRouter.js
   ###  src/videoRouter.js
   ###  src/userRouter.js

    ```JavaScript
    import express from "express";
    const userRouter = express.Router();
    const handleEditUser = (req, res) => res.send("Edit User");
    userRouter.get("/edit", handleEditUser);
    export default userRouter;
    ```

   ### 각 컨트롤별 get메소드 추가

    ```JavaScript
    const handleJoin = (req, res) => res.send("Join");
    globalRouter.get("/join", handleJoin);
    ```

 ## - "/join" Join
   ###  src/globalRouter.js
    ```JavaScript
    const handleJoin = (req, res) => res.send("Join");
    globalRouter.get("/join", handleJoin);
    ```
 ## - "/login" Login
   ###  src/globalRouter.js
    ```JavaScript
    const handleLogin = (req, res) => res.send("Login");
    globalRouter.get("/login", handleLogin);
    ```
 ## - "/search" Search
   ###  src/globalRouter.js
    ```JavaScript
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

언어	Markdown	언어	Markdown
Bash	bash	JSON	json
C#	cs	Java	java
C++	cpp	JavaScript	javascript
CSS	css	PHP	php
Diff	diff	Perl	perl
HTML, XML	html	Python	python
HTTP	http	Ruby	ruby
Ini	ini	SQL	sql
 

만일 python에 대한 코드 블록을 사용하고 싶다면 아래와 같이 사용하면 된다.

```python
print('hello')
```

-->