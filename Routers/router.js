var express = require('express');
var router = express.Router();
var AdminController = require('../Controllers/AdminController.js');


router.get('/List_All_Clients',function (req,res){
    AdminController.List_All_Clients(function(Result){
        res.send(Result);
    })
})


router.post('/Add_Clients', function (req, res) {
    console.log(req.body);
    AdminController.Add_Clients(req.body, function (Result) {
        res.send(Result);
    })
})

module.exports = router;