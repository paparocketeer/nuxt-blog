const mongoose = require('mongoose');
// mongodb database connection string. 
// change it as per your needs. here "mydb" is the name of the database. 
// You don't need to create DB from mongodb terminal. 
// mongoose create the db automatically.
mongoose.connect('mongodb+srv://mironez:KncjtY81fHenQFMH@cluster0.ezbft.gcp.mongodb.net/mw', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("MongoDB Connected...");
});

module.exports = db