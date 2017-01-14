var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;

var router = express.Router();

var app = express();
var url = 'mongodb://localhost:27017/test';

var createConnection = function (tableName, callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            var collection = db.collection(tableName);
            callback(collection, db);
        }
    });

};


/* GET users listing. */
router.get('/:table', function (req, res, next) {
    var sTableName = req.params.table;
    createConnection(sTableName, function (conn, db) {
        conn.find({}).toArray(function (err, result) {
            res.json(result);
            db.close();
        });
    });

});

router.get('/:table/:id', function (req, res, next) {
    var sTableName = req.params.table;
    var queryPar = {};

    queryPar._id = new ObjectID(req.params.id);

    createConnection(sTableName, function (conn, db) {
        conn.findOne(queryPar, function (err, result) {
            res.json(result);
            db.close();
        });
    });

});


router.delete('/:table/:id', function (req, res, next) {
    var sTableName = req.params.table;
    var queryPar = {};

    queryPar._id = new ObjectID(req.params.id);

    createConnection(sTableName, function (conn, db) {
        conn.remove(queryPar, function (err, result) {
            res.json(result);
            db.close();
        });
    });

});


router.get('/:table/:field/:val', function (req, res, next) {
    var sTableName = req.params.table;
    var queryPar = {};

    queryPar[req.params.field] = req.params.val;

    createConnection(sTableName, function (conn, db) {
        conn.find(queryPar).toArray(function (err, result) {
            res.json(result);
            db.close();
        });
    });

});



router.put('/:table', function (req, res, next) {
    var sTableName = req.params.table;
    var data = req.body;


    createConnection(sTableName, function (conn, db) {
        conn.insert(data, function (err, result) {
            res.json(result);
            db.close();
        });
    });

});

/**
 * This is a http post handler method for resfull service.
 * this methid is responsibel for update exsting table data.
 * it require id and table name as url paramater and its response the result of 
 * mongodb as object.
 * 
 * @param {object} req  this is http request object
 * @param {object} res  http response
 */
router.post('/:table/:id', function (req, res, next) {
    var sTableName = req.params.table;
    var sId = req.params.id;

    var data = req.body;

    delete(data._id);

    var query = {_id: new ObjectID(sId)};

    createConnection(sTableName, function (conn, db) {
        conn.update(query, {$set: data}, function (err, result) {
            res.json(result);
            db.close();
        });
    });

});




module.exports = router;
