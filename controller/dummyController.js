var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Dummy = require('../models/dummy');
router.post('/', function (req, res) {    
        Dummy.create({
            name : req.body.name,
            lastName : req.body.lastName,
        }, 
        function (err, dummy) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(dummy);
        });
    });
router.get('/', function (req, res) {    
    Dummy.find({}, function (err, dummies) {
        if (err) return res.status(500).send("There was a problem finding the dummies.");
        res.status(200).send(dummies);
    });});
router.get('/:id', function (req, res) {    
    Dummy.findById(req.params.id, function (err, dummy) {
    if (err) return res.status(500).send("There was a problem finding the dummy.");
    if (!dummy) return res.status(404).send("No dummy found.");
    res.status(200).send(dummy);
    });});
router.put('/:id', function (req, res) {    
    Dummy.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, dummy) {
        if (err) return res.status(500).send("There was a problem updating the dummy.");
        res.status(200).send(dummy);
    });});
module.exports = router;