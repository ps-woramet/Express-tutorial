const express = require('express');
// เรียกใช้งาน express router
const router = express.Router();
const users_data = require('../../Users_data');
const uuid = require('uuid');

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
    res.redirect('/')
})

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

module.exports = router;