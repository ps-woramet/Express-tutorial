What is express ?

- Express is a server-side or back-end framework.
- Express เป็น web application framework บน Node.js ทีี่ได้รับความนิยมมากๆ
- Express มีฟีเจอร์ต่างๆที่ช่วยให้เราทำเว็บได้สะดวกขึ้น เช่น การทำ routing middleware  การจัดการ request เเละ response
- ทำให้เราสามารถพัฒนาเว็บโดยใช้ Node.js ได้สะดวกและรวดเร็วยิ่งขึ้น
- เราสามารถเอา Express ไปทำเว็บแอพหรือทำเว็บเซอร์วิสก็ได้

Why use express ?

- ทำให้เราพัฒนา web apps ด้วย Nodejs ง่ายขึ้นมาก
- เร็วและฟรี
- จัดการกับ request & response ได้อย่างเต็มที่
- เหมาะสำหรับใช้กับ client-side frameworks  เนื่องจากเป็น javascript ทั้งหมด

Prerequisite

- javascript fundamentals
- Basic Nodejs & npm
- Other (HTTP Status Code, JSON)

----------------------------------

Route handling

ถายใน route เราสามารถทำอะไรก็ได้ เช่น fetch data จาก database(mongodb, postgresql, mysql)
เราสามารถ load หน้าต่างๆ สามารถ return json data, เราสามารถเข้าถึง request & response  ได้เต็มรูปแบบ

request & response object เป็นสิ่งสำคัญมาก

request object จะเป็นตัวแทนของ http request properties อย่างเช่น url parameters, query strings หรือ ข้อมูลใดๆก็ตามที่ถูกส่งมาภายใน
body, http headers ข้อมูลทั้งหมดนี้จะรวมอยู่ใน request ซึ่งเราก็สามารถที่จะสร้าง middleware เพื่อทำการเปลี่ยนแปลงหรือเพิ่มสิ่งต่างๆให้ object ตัวนี้

ส่วน response object เป็นตัวแทนของ http response ซึ่งตรงนี้ก็ขึ้นอยู่กับว่าเราจะใช้ object ตัวนี้ ส่งข้อมูลกลับอย่างเช่น json data,
render template เราสามารถทำอะไรได้หลายอย่างกับ response object ถ้าเราต้องการ redirect เราก็สามารถ res.redirect

เราสามารถ parse หรือแยกวิเคราะห์ข้อมูลที่เข้ามาได้ด้วย body parser ซึ่งมาพร้อมกับ express

- จัดการ requests/routes  ได้อย่างง่าย
- app.get(), app.post(), app.put(), app.delete()
- เข้าถึง params, query strings, url paths
- Express มี router เพื่อให้เราสามารถจัดเก็บ routes ในไฟล์แยกต่างหากและ export ได้

// Create your endpoints/route handlers
// Fetch from database
// Load pages
// Return JSON
// Full access to request & response
app.get('/index'function(req, res){
    res.send('Hello, Express');
});

----------------------------------

middleware

-Middleware ฟังก์ชั่น คือ ฟังก์ชั่นที่สามารถเข้าไปจัดการกับ request object(req), response object(res)
และฟังก์ชั่น next() ที่อยู่กระบบวนการเกิดของ request-response cycle next ฟังก์ชั่น คือฟังก์ชั่นที่อยู่ในรูป express router ซึ่งเมื่อมีการเรียกใช้งานจะเป็นการไปทำงานใน
middleware ฟังก์ชั่นในลำดับถัดไป จากฟังก์ชั่นปัจจุบัน มาดูส่วนที่เรียกว่า middleware  ฟังก์ชั่นจากโค้ดต่อไปนี้

const express = require('express') // ใช้งาน module express
const app = express() // สร้างตัวแปร app เป็น instance ของ express

// HTTP Method get, put, post, delete
// Path (route) เช่น '/'
// Middleware function -> function(req, res, next){next()}
// HTTP request, HTTP response, next function
app.get('/', function(req, res, next){
    next()
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})

What does middleware do ?

Middleware ฟังก์ชั่น ทำหน้าที่ต่างๆดังนี้

-รันคำสั่งต่างๆที่กำหนด
-แก้ไขข้อมูล request / response object
-จบการทำงาน request-response cycle
-ใช้งานคำสั่ง next เพื่อทำงาน middleware ฟังก์ชั่นจากโค้ดต่อไปนี้

ถ้ายังไม่จบการทำงานใน middleware  ฟังก์ชั่นในปัจจุบันจะต้องใช้คำสั่ง next() เพื่อส่งต่อไปทำงานในฟังก์ชั่นต่อไปไม่เช่นนั้น
การ request หรือร้องขอข้อมูลก็อาจจะค้าง ไม่สามารถทำงานต่อได้

----------------------------------

ืinstall nodejs
install express
install postman
install nodemon
install uuid

npm init -y // create package.json and Skip question
npm i express // install express
npm i -D nodemon // install nodemon (development)
npm i uuid

วิธี run server
// node ตามด้วยชื่อไฟล์
node index

// หากแก้ไข scripts จาก package.json แล้วใช้งานคำสั่ง
ืnpm run start
ืnpm run dev

1. สร้าง route ใน index.js เพื่อแสดงข้อความ Hello express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express');
})

const PORT = process.env.PORT || 5000; // กำหนด PORT
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

2. แก้ไข package.json สำหรับใช้ nodemon

  "scripts": {
    "start" : "node index",
    "dev" : "nodemon index"
  },

3. สร้าง route ใน index.js เพื่อแสดงหน้า index.html

    สร้าง folder public -> index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Index Page</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Index Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, velit.</p>
    </body>
    </html>

    ----------------------------------

    สร้าง public -> css -> style.css

    body{
        background-color: rgba(4, 3, 3, 0.893);
        color: white;
    }

    ----------------------------------

    index.js

    const express = require('express');
    const path = require('path');
    const app = express();

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

4. สร้าง route ใน index.js ให้เป็นแบบ static folder
    ปกติ -> localhost:5000/
    static -> localhost:5000/ชื่อไฟล์.html

    สร้าง public -> about.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About page</title>
    </head>
    <body>
        <h1>About Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, velit.</p>
    </body>
    </html>

    ----------------------------------

    index.js

    const express = require('express');
    const path = require('path');
    const app = express();

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

5. สร้าง route /api/users เพื่อแสดงข้อมูลทั้งหมด สร้างข้อมูล และ return ข้อมูลjson

    สร้างไฟล์ express-tutorial -> Users_data.js เพื่อจำลองข้อมูล

    const users_data = [
        {
            id: 1,
            name: 'woramet1',
            email: 'ps.woramet1@gmail.com'
        },
        {
            id: 2,
            name: 'woramet2',
            email: 'ps.woramet2@gmail.com'
        },
        {
            id: 3,
            name: 'woramet3',
            email: 'ps.woramet3@gmail.com'
        }
    ]

    module.exports = users_data;

    ----------------------------------

    index.js

    const express = require('express');
    const path = require('path');
    const users_data = require('./Users_data.js')
    const app = express();

    // Get all users
    app.get('/api/users', (req, res) => res.json(users_data));

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

6. สร้าง Logger Middleware แสดงข้อความ 'Hello'

    index.js

    const express = require('express');
    const path = require('path');
    const users_data = require('./Users_data.js')

    const app = express();

    // Logger Middleware
    const logger = (req, res, next) => {
        console.log('Hello');
        next();
    }

    // Init Middleware
    app.use(logger);

    // Get all users
    app.get('/api/users', (req, res) => res.json(users_data));

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

7. สร้าง Logger Middleware แสดงข้อความ url และ วันที่เวลา

    ติดตั้ง npm i moment เพื่อใช้งานวันที่เวลา

    สร้างไฟล์ express-tutorial -> middleware -> logger.js

    const moment = require('moment');

    // Logger Middleware
    const logger = (req, res, next) => {
        console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
        console.log('Hello');
        next();
    }

    module.exports = logger;

    ----------------------------------

    index.js

    const express = require('express');
    const path = require('path');
    const users_data = require('./Users_data.js');
    const logger = require('./middleware/logger.js');
    const app = express();

    // Init Middleware
    app.use(logger);

    // Get all users
    app.get('/api/users', (req, res) => res.json(users_data));

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

8. สร้าง route /api/user/:id เพื่อแสดงข้อมูล user คนเดียว

    index.js

    // Get single user
    app.get('/api/users/:id', (req, res)=>{

        // Show :id 
        // res.send(req.params.id)

        // Show data users id = :id
        // res.json(users_data.filter(user => 
        //     user.id === parseInt(req.params.id)
        // ));

        // Check user id = :id ?
        let found = users_data.some(user => user.id === parseInt(req.params.id));

        if (found){
            res.json(users_data.filter(user => user.id === parseInt(req.params.id)));
        } else {
            res.status(400).json({msg: `No users with the id of ${req.params.id}`});
        }
    })

9. สร้าง folder routes แยก

    สร้าง folder express-tutorial -> routes -> api -> users.js

    const express = require('express');
    // เรียกใช้งาน express router
    const router = express.Router();
    const users_data = require('../../Users_data');

    // Get all users
    router.get('/', (req, res) => res.json(users_data));

    // Get single user
    router.get('/:id', (req, res)=>{

        // Show :id 
        // res.send(req.params.id)

        // Show data users id = :id
        // res.json(users_data.filter(user => 
        //     user.id === parseInt(req.params.id)
        // ));

        // Check user id = :id ?
        let found = users_data.some(user => user.id === parseInt(req.params.id));

        if (found){
            res.json(users_data.filter(user => user.id === parseInt(req.params.id)));
        } else {
            res.status(400).json({msg: `No users with the id of ${req.params.id}`});
        }
    })

    module.exports = router;

    ----------------------------------

    index.js

    const express = require('express');
    const path = require('path');
    const logger = require('./middleware/logger.js');
    const app = express();

    // Init Middleware
    app.use(logger);

    app.use('/api/users', require('./routes/api/users.js'));

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));

    const PORT = process.env.PORT || 5000; // กำหนด PORT
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

9. สร้าง route สำหรับเพิ่มข้อมูล user, สร้าง middleware parse json เพื่อแสดง json

    user.js

    // Create users
    router.post('/', (req, res) => {
        res.send(req.body);
    })

    ----------------------------------

    index.js

    // Body parse middleware
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

10. ติดตั้ง package สำหรับ generate id, แก้ไข route เพื่อ create users 

    npm i uuid

    ----------------------------------

    express-tutorial -> routes -> api -> user.js

    const uuid = require('uuid');

    // Create user
    router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if (!newUser.name || !newUser.email){
        return res.status(400).json({msg: 'Please include a name and email'});
    }

    users_data.push(newUser);
    res.json(users_data);
    })

    ----------------------------------

    POST http://localhost:5000/api/users

    -Headers

    Content-Type application/json

    -Body

    {
    "name" : "game",
    "email" : "game@gmail.com"
    }

11. สร้าง route สำหรับอัพเดตข้อมูล user

    // Update user
    router.put('/:id', (req, res) => {
    let found = users_data.some(user => user.id === parseInt(req.params.id));

    if (found){
        const updateUser = req.body;
        users_data.forEach(user => {
            if (user.id === parseInt(req.params.id)){
                user.name = updateUser ? updateUser.name : user.name;
                user.email = updateUser ? updateUser.email : user.email
                res.json({msg: 'User update,', user});
            }
        })
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
    })

    ----------------------------------

    PUT http://localhost:5000/api/users/1

    -Headers

    Content-Type application/json

    -Body

    {
    "name" : "ps.woramet",
    "email" : "ps.woramet@gmail.com"
    }

12. สร้าง route สำหรับลบข้อมูล user

    // Delete user
    router.delete('/:id', (req, res) => {
        let found = users_data.some(user => user.id === parseInt(req.params.id));

        if (found){
            res.json({
                msg: 'Member deleted',  
                users: users_data.filter(user => user.id !== parseInt(req.params.id))
            });
        } else {
            res.status(400).json({msg: `No user with the id of ${req.params.id}`});
        }
    })

    ----------------------------------

    DELETE http://localhost:5000/api/users/1

13. การ render template (handlebars) version 3.1.0

    npm install express-handlebars@3.1.0

    ----------------------------------

    สร้างไฟล์ views -> layouts -> main.handlebars

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="container my-4">
            {{{body}}}
        </div>
    </body>
    </html>

    ----------------------------------

    สร้างไฟล์ views -> home.handlebars

    <h1>Homepage</h1>
    <br>

    <h2 class="text-center">Add User</h2>
    <form action="/api/users" method="post">
        <div class="form-group">
            <label for="name" class="pb-2">Name</label>
            <input type="text" name="name" class="form-control">
        </div>
        <br>
        <div class="form-group">
            <label for="email" class="pb-2">Email</label>
            <input type="email" name="email" class="form-control">
        </div>
        <br>
        <input type="submit" value="Add user" class = "btn btn-success btn-block">

    </form>
    <h2 class="text-center">{{title}}</h2>
    <br>
    <h4>Users</h4>
    <br>
    <ul class="list-group">
        {{#each data}}
            <li class="list-group-item">{{this.name}} : {{this.email}}</li>
        {{/each}}
    </ul>

    <br>
    <a href="/api/users" target="_blank" class="btn btn-secondary">Visit API</a>

    ----------------------------------

    แก้ไข express-tutorial -> index.js เพื่อเรียกใช้งาน home.handlebars

    const express = require('express');
    const exphbs  = require('express-handlebars');
    // เรียกใช้ usersdata เพื่อส่งข้อมูลไปแสดง
    const usersdata = require('./Users_data.js');
    const app = express();


    // Handles Middleware
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Homepage Route
    app.get('/', (req, res) => {
        res.render('home', {
            // ส่งข้อความ 'Data user' ไปแสดง
            title: 'Data User',
            // ส่งข้อมูลของ users ไปแสดง
            data: usersdata
        });
    })

    ----------------------------------

    เมื่อ Add user หากต้องการกลับไปหน้าต่างๆ

    แก้ไขไฟล์ express-tutorial -> routes -> api -> users.js
    
    เปลี่ยนจาก res.json(users_data) เปลี่ยนเป็น res.redirect('/')

    // Create user
    router.post('/', (req, res) => {
        const newUser = {
            id: uuid.v4(),
            name: req.body.name,
            email: req.body.email
        }

        if (!newUser.name || !newUser.email){
            return res.status(400).json({msg: 'Please include a name and email'});
        }

        users_data.push(newUser);
        //res.json(users_data);
        res.redirect('/');
    })

14. สร้างไฟล์ .gitignore

    node_modules
