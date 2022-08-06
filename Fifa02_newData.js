const fifa = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639",
]

function ObjektumFeltolto(feltoltendoElem) {
    const beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let objektum = {};
        let daraboltAdatSor = feltoltendoElem[i].split(';');
        objektum.csapat = daraboltAdatSor[0];
        objektum.helyezes = Number(daraboltAdatSor[1]);
        objektum.valtozas = Number(daraboltAdatSor[2]);
        objektum.pontszam = Number(daraboltAdatSor[3]);
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
const fifaCsapatok = ObjektumFeltolto(fifa);

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://nagyZs:Nyest16@cluster0.dcma4.mongodb.net/test';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var fifaAdatbazis = db.db('mydb');
    var ujAdatok = fifaCsapatok;

    fifaAdatbazis.collection("Fifa").insertMany(ujAdatok, function (err, res) {
        if (err) throw err;
        console.log("Az adatok feltöltése sikeres");
        db.close();
    });
});