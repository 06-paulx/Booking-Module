DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  startDate datetime NOT NULL,
  endDate datetime NOT NULL,
  listingID int NOT NULL REFERENCES listing (id),
  adults int NOT NULL,
  children int NOT NULL,
  infants int NOT NULL,
  userID int,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int NOT NULL AUTO_INCREMENT,
  price int NOT NULL,
  rating int NOT NULL,
  reviewCount int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO listings (price, rating, reviewCount) VALUES (200, 5, 389);

INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-01-01', '2019-01-10', 1, 2, 1, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-01-14', '2019-01-18', 1, 1, 2, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-01-20', '2019-01-26', 1, 3, 0, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-02-01', '2019-02-02', 1, 1, 1, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-02-15', '2019-02-16', 1, 4, 0, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-02-17', '2019-02-20', 1, 2, 1, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-02-26', '2019-03-01', 1, 1, 0, 0, 1);
INSERT into bookings (startDate, endDate, listingID, adults, children, infants, userID) VALUES ('2019-03-01', '2019-03-10', 1, 2, 1, 0, 1);
