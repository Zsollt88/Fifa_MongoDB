var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://nagyZs:Nyest16@cluster0.dcma4.mongodb.net/test';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var fifaAdatbazis = db.db('mydb');
    fifaAdatbazis.createCollection('Fifa', function (err, res) {
        if (err) throw err;
        console.log('Kollekció létrehozva');
        db.close();
    });

});