
const { Router } = require('express');
const express=require('express');
const maincontroller=require('../controller/main-controller');

const router=express.Router();

router.route('/data').post(maincontroller.data);
router.route('/data1').get(maincontroller.data1);
router.route('/tweet/:param').get(maincontroller.twitter);

router.route('/instagram/:query').get(maincontroller.instagram);

module.exports=router;