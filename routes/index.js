var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /*
  console.log(req.session.connected);
  
  console.log(req.session.idUser);
  if (req.session.idUser == undefined){
    req.session.idUser = -1;
    console.log(' dans if  ' +req.session.idUser);

    //res.redirect('/');
  }
  var x = req.session.idUser;
*/
  res.render('index', {
    title: 'Accueil', connected: req.session.connected, errors: req.session.errors, idUser : req.session.idUser, typeUser : req.session.typeUser
  });
});

router.get('/personne', function (req, res, next) {
  res.render('personne', { title: 'Express' });
});

module.exports = router;
