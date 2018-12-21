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