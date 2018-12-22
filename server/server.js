const express = require('express');
const path = require('path');
const app = express();
const port = 3010;
const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/:listingID', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/:listingID/listings', (req, res) => {
  db.getListing(req.params.listingID, (err, data) => {
    res.status(200).json(JSON.stringify(data));
  })
})

app.get('/:listingID/bookings', (req, res) => {
  db.getBookings(req.params.listingID, (err, data) => {
    res.status(200).json(JSON.stringify(data));
  })
})