const express = require('express');
const router = express.Router();

const {home,menu,detalle} = require('../controllers/indexController')

/* GET home page. */
router.get('/',home);
router.get('/menu',menu); /* me va  a permitir ver todo el menu, una carta o un elemento */
router.get('/detalle/:id',detalle); /*  aca veremos cada elemento del menu  en detalle */

module.exports = router;
