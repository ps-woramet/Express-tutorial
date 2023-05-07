const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js');
const exphbs  = require('express-handlebars');
const usersdata = require('./Users_data.js');


const app = express();

// Init Middleware
app.use(logger);

// Handles Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Route
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Data User',
        data: usersdata
    });
})

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/api/users.js'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; // กำหนด PORT
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));