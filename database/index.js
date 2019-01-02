const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

const getListing = function(id, callback) {
  var query = `SELECT * from listings WHERE ID = ?`;
  var params = [id];
  connection.query(query, params, function(err, data) {
    if(err) {
      callback(err, null);
    }
    callback(null, data);
  })
}

const getBookings = function(id, callback) {
  var query = `SELECT * from bookings WHERE listingID = ?`;
  var params = [id];
  connection.query(query, params, function(err, data) {
    if(err) {
      callback(err, null);
    }
    callback(null, data);
  })
}

const postBooking = function(id, body, callback) {
  var query = `INSERT INTO bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  var params = [Number(body.startDay), Number(body.startMonth), Number(body.startYear), Number(body.endDay), Number(body.endMonth), Number(body.endYear), Number(body.duration), Number(id), Number(body.userID)];
  connection.query(query, params, function(err, data) {
    if(err) {
      callback(err, null);
    }
    callback(null, data);
  })
}

module.exports = {
  getListing,
  getBookings,
  postBooking
};