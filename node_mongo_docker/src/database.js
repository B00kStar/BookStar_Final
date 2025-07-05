const mongoose = require("mongoose")
/*
mongoose.connect("mongodb://database/mydatabase")
    .then(db=>console.log("Connected to MongoDB",db.connection.host))
    .catch(err=>console.error( err));
*/

mongoose.connect("mongodb://localhost:27018/bookstar")
    .then(db=>console.log("Connected to MongoDB",db.connection.host))
    .catch(err=>console.error( err));