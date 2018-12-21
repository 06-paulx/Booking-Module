DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  startDay int NOT NULL,
  startMonth int NOT NULL,
  startYear int NOT NULL,
  endDay int NOT NULL,
  endMonth int NOT NULL,
  endYear int NOT NULL,
  duration int NOT NULL,
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

INSERT INTO listings (price, rating, reviewCount) VALUES (200, 3, 389);

INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (1, 1, 2019, 11, 1, 2019, 10, 1, 2, 1, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (22, 1, 2019, 28, 1, 2019, 6, 1, 1, 2, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (4, 2, 2019, 14, 2, 2019, 10, 1, 3, 0, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (19, 2, 2019, 23, 2, 2019, 4, 1, 1, 1, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (26, 2, 2019, 8, 3, 2019, 12, 1, 4, 0, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (18, 3, 2019, 20, 3, 2019, 2, 1, 2, 1, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (1, 4, 2019, 11, 4, 2019, 10, 1, 1, 0, 0, 1);
INSERT into bookings (startDay, startMonth, startYear, endDay, endMonth, endYear, duration, listingID, adults, children, infants, userID) VALUES (11, 4, 2019, 15, 4, 2019, 4, 1, 2, 1, 0, 1);
