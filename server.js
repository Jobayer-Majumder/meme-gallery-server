const express = require('express');
const http = require('http');
const router = require('./Routes/Routes');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(router);
app.use(cors());

const server = http.createServer(app);




const uri = "mongodb+srv://jobayer:jarif@jobayer.eggfq.mongodb.net/memeGallery?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const memeCollection = client.db("memeGallery").collection("memes");
  

    app.get('/getMemes', (req, res) => {
        memeCollection.find({})
        .toArray((err, document) =>{
            res.send(document)
        })
    });



  console.log('data base connected')
});






server.listen(5000, () => console.log('server is running'))
