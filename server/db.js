const mongoose = require('mongoose');
// mongodb database connection string. 
// change it as per your needs. here "mydb" is the name of the database. 
// You don't need to create DB from mongodb terminal. 
// mongoose create the db automatically.
// mongoose.connect('mongodb+srv://mironez:KncjtY81fHenQFMH@cluster0.ezbft.gcp.mongodb.net', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });
// var db = mongoose.connection;

const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://mironez:KncjtY81fHenQFMH@cluster0.ezbft.gcp.mongodb.net";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//     console.log("MongoDB Connected...");
// });

// module.exports = db