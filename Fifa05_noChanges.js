var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://nagyZs:Nyest16@cluster0.dcma4.mongodb.net/test';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var fifaAdatbazis = db.db("mydb");
    var keresiFeltetel = {
        valtozas: 0
    };
    fifaAdatbazis.collection("Fifa").find(keresiFeltetel, {
        projection: {
            _id: 0,
            csapat: 1

        }
    }).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});