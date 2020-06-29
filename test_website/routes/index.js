//connect /db and /javascripts
var express = require('express');
var router = express.Router();
const db = require('../db/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Login', { title: 'Express' });
});

router.get('/checkMember', db.checkMember);

router.get('/clientRecord', db.clientRecord);

router.get('/trainingRecord', db.trainingRecord);

router.get('/bodyRecord', db.bodyRecord);

router.get('/dietRecord', db.dietRecord);

router.put('/update', db.update);

router.get('/memberRecord', db.memberRecord);

router.put('/updateHealth', db.updateHealth);

router.get('/healthRecord', db.healthRecord);

router.post('/createMember', db.createMember);

router.post('/createGym', db.createGym);

router.post('/addTrainingRecord', db.addTrainingRecord);

router.post('/addBodyRecord', db.addBodyRecord);

router.post('/addDietRecord', db.addDietRecord);

module.exports = router;
