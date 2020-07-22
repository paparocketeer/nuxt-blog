const express = require('express')
const morgan = require("morgan");
const db = require('./db')


// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // configire morgan

// << db setup >>
// const db = require("../config/db");
const dbName = "sample_airbnb";
const collectionName = "listingsAndReviews";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    // dbCollection.find().toArray(function(err, result) {
    //     if (err) throw err;
    //       console.log(result);
    // });
    app.get("/items", (request, response) => {
      // return updated list
      dbCollection.find().limit(10).toArray((error, result) => {
          if (error) throw error;
          response.json(result);
      });
  });
  
  app.post("/items", (request, response) => {
      const item = request.body;
      dbCollection.insertOne(item, (error, result) => { // callback of insertOne
          if (error) throw error;
          // return updated list
          dbCollection.find().toArray((_error, _result) => { // callback of find
              if (_error) throw _error;
              response.json(_result);
          });
      });
  });
  
  app.get("/items/:id", (request, response) => {
    const itemId = request.params.id;
  
    dbCollection.findOne({ id: itemId }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
    });
  });
  
  app.put("/items/:id", (request, response) => {
    const itemId = request.params.id;
    const item = request.body;
    console.log("Editing item: ", itemId, " to be ", item);
  
    dbCollection.updateOne({ id: itemId }, { $set: item }, (error, result) => {
        if (error) throw error;
        // send back entire updated list, to make sure frontend data is up-to-date
        dbCollection.find().toArray(function(_error, _result) {
            if (_error) throw _error;
            response.json(_result);
        });
    });
  });
  
  app.delete("/items/:id", (request, response) => {
      const itemId = request.params.id;
      console.log("Delete item with id: ", itemId);
  
      dbCollection.deleteOne({ id: itemId }, function(error, result) {
          if (error) throw error;
          // send back entire updated list after successful request
          dbCollection.find().toArray(function(_error, _result) {
              if (_error) throw _error;
              response.json(_result);
          });
      });
  });
  
  }, function(err) { // failureCallback
    throw (err);
  });


// Require & Import API routes
// const users = require('./routes/users')
// const articles = require('./routes/articles')

// Use API Routes
// app.use(users)
// app.use(articles)

app.set('port', 4000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});