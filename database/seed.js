const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

var daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var endCalculator = function(startDay, startMonth, startYear, duration) {
    var endDay = startDay + duration;
    var endMonth = startMonth;
    var endYear = startYear;
    if ( endDay > daysArr[startMonth - 1]) {
        if( endMonth === 12 ) {
            endMonth = 1;
            endYear = endYear + 1;
        } else {
            endMonth = endMonth + 1;
        }
        endDay = endDay - daysArr[startMonth - 1];
    }
    return [endDay, endMonth, endYear];
}

const seedDatabase = function(num) {
    
    for (var i = 0; i < num; i++) {
        var price = Math.floor(Math.random()*150) + 50;
        var rating = Math.floor(Math.random()*6);
        var reviewCount = Math.floor(Math.random()*2000) + 10;
        var query = `INSERT INTO listings (price, rating, reviewCount) VALUES (?, ?, ?);`;
        var params = [price, rating, reviewCount];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            } 
        });

        var query = `INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        var startDay = 1;
        var startMonth = 1;
        var startYear = 2019;
        var duration = Math.ceil(Math.random()*12);

        var arr = endCalculator(startDay, startMonth, startYear, duration); 
        var endDay = arr[0];
        var endMonth = arr[1];
        var endYear = arr[2];
        var adults = Math.ceil(Math.random() * 3); 
        var children = Math.floor(Math.random()*3);
        var infants = Math.floor(Math.random()*1);
        var params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        var offsetDuration = Math.floor(Math.random() * 15);
        var startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });

        offsetDuration = Math.floor(Math.random() * 15);
        startArr = endCalculator(endDay, endMonth, endYear, offsetDuration);
        startDay = startArr[0];
        startMonth = startArr[1];
        startYear = startArr[2];
        duration = Math.ceil(Math.random()*12);
        arr = endCalculator(startDay, startMonth, startYear, duration);
        endDay = arr[0];
        endMonth = arr[1];
        endYear = arr[2];
        adults = Math.ceil(Math.random() * 3); 
        children = Math.floor(Math.random()*3);
        infants = Math.floor(Math.random()*1);
        params = [startDay, startMonth, startYear, endDay, endMonth, endYear, duration, i + 1, adults, children, infants, 1];
        connection.query(query, params, function(err, data) {
            if(err) {
                console.log(err);
            }
        });
    }
    console.log(num + ' listings seeded!');
    console.log(num * 13 + ' bookings seeded');
}

seedDatabase(100);