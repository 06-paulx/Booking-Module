const express = require('express');
const path = require('path');
const app = express();
const port = 3010;
const db = require('../database/index.js');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/:listingID', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/:listingID/listings', (req, res) => {
  console.log('here');
  db.getListing(req.params.listingID, (err, data) => {
    res.status(200).json(JSON.stringify(data));
  })
})

app.get('/:listingID/bookings', (req, res) => {
  db.getBookings(req.params.listingID, (err, data) => {
    res.status(200).json(JSON.stringify(data));
  })
})

app.post('/:listingID/bookings', (req, res) => {
  db.postBooking(req.params.listingID, req.body, (err, data) => {
    if(err) {
      res.status(500).end();
    }
    res.status(201).end();
  })
});