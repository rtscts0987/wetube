# wetube
## ๋นจ๊ฐ's wetube v0.1.0
## Wetube Clone built using NodeJS, Express, Mongo and ES6 ๐๐๐

### v0.1.0 - 2023.01.29 - heroku upload first!
### v0.0.9 - 2023.01.29 - oAuth Login (Github)
### v0.0.8 - 2023.01.28 - Express Session MongoStore
### v0.0.7 - 2023.01.28 - Express Session
### v0.0.6 - 2023.01.27 - MongoDB User Account
### v0.0.5 - 2023.01.27 - MongoDB CRUD
### v0.0.4 - 2023.01.26 - Unused Database (Fake Database)
### v0.0.3 - 2023.01.26 - pug + MVP CSS6 // "-" ๋ํ README.md ๊ธฐ๋ฅํ์ธ ๋๊ทธ๋ผ๋ฏธ ์ ์ผ๋ก ํ์๋จ
### v0.0.2 - 2023.01.26 - rout // ">" ๋ํ README.md ๊ธฐ๋ฅํ์ธ ">"์ดํ์ ๊ธ์ ์ผ์ชฝ์ ์ค์ด ์๊น
### v0.0.1 - 2023.01.26 - Default Express
### v0.0.0 - 2023.01.26 - init 

1.์ฌ์ฉ์ ์ธ์ฆ(๋ก๊ทธ์ธ / ๊ณ์  ๋ง๋ค๊ธฐ)
 - "/" home
 - "/join" Join
 - "/login" Login
 - "/search" Search

2.ํ๋กํ ํธ์ง / ์ํธ ๋ณ๊ฒฝ
 - "users/:id" See User
 - "users/logout" Log Out
 - "users/edit" Edit user
 - "users/delete" Delete user

3.๋์์ ์๋ก๋
 - "/videos/upload" Video Upload

4.๋์์ ๊ฒ์
 - "/videos/search" Video Search

5.๋์์ ํธ์ง
 - "/videos/id:/edit" Video Edit

5-1.๋์์ ์ญ์ 
 - "/videos/id:/delete" Video Delete

6.๋์์ ๋ณด๊ธฐ
 - "/videos/id:" Video See

7.Javascript ๋น๋์ค ํ๋ ์ด์ด
 - 6.ํ์ฅ
 - video player (HTML,SCSS)

8.๋๊ธ ์น์ + ์ฝ๋ ์ฑ๋ฆฐ์ง(Watch: 16))
 - "videos/comments" Comment on a video
 - "videos/comments/delete" Delete A Commnet of a Video
 - 6.ํ์ฅ
 - ๋ฐ์ ๋๊ธ


# 0.์ด๊ธฐ์ค์ 
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
### HTML์ ์ํ pug์ค์น
### npm i pug

### Express๋ ๊ธฐ๋ณธ์ ์ผ๋ก form์ ๋ฐ์ ์ ์์
### server.js์ app.use(express.urlencoded({ extended: true })); ์ถ๊ฐ๋ก form์ ๋ฐ์ ์ ์๊ฒ๋จ

### Mongoose install
### npm i mongoose

### Windows ์์ Mogodb๋ mongosh๋ฅผ ๋ฐ์ ์ค์นํ path๋ฑ๋ก ํ์
### mongoose.connect์ ์ mongoose.set('strictQuery',true); ๋ฑ๋ก ํ์
### mongoose.connect์ ์ฃผ์๊ฐ localhost๋ก ๋์ด์์ผ๋ฉด ์ ์์ด ์๋์ด์ 127.0.0.1:27017/~ ๋ก ๋ณ๊ฒฝํ์

### Session -> Express-session
### npm i express-session


# 1.์ฌ์ฉ์ ์ธ์ฆ(๋ก๊ทธ์ธ / ๊ณ์  ๋ง๋ค๊ธฐ)
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
   ### ๋ผ์ฐํฐ
```javascript
    const userRouter = express.Router();
    const handleEditUser = (req, res) => res.send("Edit User");
    userRouter.get("/edit", handleEditUser);
```
   ###  ๊ฐ ๋ผ์ฐํฐ๋ง๋ค ํ์ผ์์ฑ
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

   ### ๊ฐ ์ปจํธ๋กค๋ณ get๋ฉ์๋ ์ถ๊ฐ

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

# 2.ํ๋กํ ํธ์ง / ์ํธ ๋ณ๊ฒฝ
 ## - "users/edit" Edit user
 ## - "users/delete" Delete user

# 3.๋์์ ์๋ก๋
 ## - "/videos/upload" Video Upload

# 4.๋์์ ๊ฒ์
 ## - "/videos/search" Video Search

# 5.๋์์ ํธ์ง
 ## - "/videos/edit" Video Edit

# 6.๋์์ ๋ณด๊ธฐ
 ## - "/videos/watch" Video Watch

# 7.Javascript ๋น๋์ค ํ๋ ์ด์ด
 ## - 6.ํ์ฅ
 ## - video player (HTML,SCSS)

# 8.๋๊ธ ์น์ + ์ฝ๋ ์ฑ๋ฆฐ์ง(Watch: #16))
 ## - "videos/comments" Comment on a video
 ## - "videos/comments/delete" Delete A Commnet of a Video
 ## - 6.ํ์ฅ
 ## - ๋ฐ์ ๋๊ธ



<!-- ๋งํฌ๋ค์ด 


๋งํฌ๋ค์ด์์๋ ```๋ฅผ ์ฌ์ฉํด์ ์ฝ๋ ๋ธ๋ก์ ์ฌ์ฉํ  ์ ์๋ค.

```
์ฌ๊ธฐ์ ์ฝ๋ ๋ฃ๊ธฐ
```
 

๋ ์ฝ๋ ๋ธ๋ญ ์ฝ๋(```) ์์์ ์ ์ฌ์ฉํ๋ ์ธ์ด๋ฅผ ์ ์ธํ์ฌ ๋ฌธ๋ฒ ๊ฐ์กฐ๊ฐ ๊ฐ๋ฅํ๋ค. ์๋ ํ๊ฐ ์ฝ๋๋ธ๋ก์์ ์ฌ์ฉ๊ฐ๋ฅํ ์ธ์ด์ด๋ค.

์ธ์ด	Markdown	์ธ์ด	    Markdown
Bash	bash	    JSON	    json
C#	    cs	        Java	    java
C++	    cpp	        JavaScript	javascript
CSS	    css	        PHP	        php
Diff	diff	    Perl	    perl
HTML,XML	html	Python	    python
HTTP	http	    Ruby	    ruby
Ini	    ini	        SQL	        sql
 

๋ง์ผ python์ ๋ํ ์ฝ๋ ๋ธ๋ก์ ์ฌ์ฉํ๊ณ  ์ถ๋ค๋ฉด ์๋์ ๊ฐ์ด ์ฌ์ฉํ๋ฉด ๋๋ค.

```python
print('hello')
```

-->