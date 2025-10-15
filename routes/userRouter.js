const express=require('express');
const userController= require('../controller/userController')
const bodyParser= require('body-parser');
const router= express.Router();


router.get('/',userController.getAllUsers);
router.post('/',userController.createUser);
router.get('/:id',userController.getUsers);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);



module.exports=router;