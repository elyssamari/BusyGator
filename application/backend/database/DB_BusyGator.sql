--
-- FILE: DB_BusyGator.sql
-- 
-- AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
-- Samantha Saxton-Getty
--
-- PURPOSE: This file creates the BusyGator database.
-- 

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2022 at 04:33 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB_BusyGator`
--
CREATE DATABASE IF NOT EXISTS `DB_BusyGator` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `DB_BusyGator`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(9) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `description`) VALUES
(1, 'Electronics', 'euanfaofa'),
(2, 'Pets', 'awdwada'),
(3, 'Home', 'adwwad'),
(4, 'Recreational', 'igoker'),
(5, 'Books', 'uindwajkm');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `location_id` int(9) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `name`) VALUES
(1, 'Annex I & Annex II'),
(2, 'University Park North'),
(3, 'Hensill Hall'),
(4, 'Gymnasium'),
(5, 'J. Paul Leonard Library'),
(6, 'Manzanita Square'),
(7, 'University Park South'),
(8, 'Masshouf Wellness Center'),
(9, 'Parking Garage'),
(10, 'Cox Stadium');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `message_id` int(9) NOT NULL,
  `creator_id` int(9) NOT NULL,
  `receiver_id` int(9) NOT NULL,
  `product` int(9) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message_body` varchar(500) NOT NULL,
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `creator_id`, `receiver_id`, `product`, `subject`, `message_body`, `date_created`) VALUES
(1, 12, 2, 6, 'Calculator', 'Hi! I was wondering when you\'d be available to meet and exchange the calculator you listed. Thanks in advance!', '2022-04-29 18:07:36'),
(2, 15, 4, 11, 'Collar', 'hey, what size dog is the collar you listed meant for? i was hoping it\'d fit my chihuahua', '2022-04-29 18:07:36'),
(3, 6, 3, 13, 'Pet Food', 'when can you meet up for the pet food??? thx', '2022-04-29 18:07:36'),
(4, 11, 5, 21, 'Fishing Pole', 'I am interested in purchasing the fishing pole you listed. The best time for me to meet would be next Monday at 4:00 PM. -William', '2022-04-29 18:07:36'),
(5, 8, 1, 19, 'Tent', 'Hello! I\'m thinking about buying your tent. How many people does it fit?', '2022-04-29 18:07:36'),
(6, 7, 2, 23, 'Dictionary', 'would oyu be willing to sell the dictionary for $10?? i need it for my class and that\'s all i got', '2022-04-29 18:07:36'),
(7, 9, 3, 18, 'Sofa', 'Hi. Do you have any equipment for moving the sofa? It\'ll be a bit hard to carry it from the gymnasium to my car by hand. Thanks.', '2022-04-29 18:07:36'),
(8, 13, 1, 20, 'Sleeping Bag', 'hey! are you available to meet up tomorrow to exchange the sleeping bag? thanks!', '2022-04-29 18:07:36'),
(9, 10, 5, 14, 'Leash', 'can you meet up tomorrow to sell the leash? and do you have a venmo?', '2022-04-29 18:07:36'),
(10, 14, 3, 8, 'Kindle', 'Hello. Do you have any other pictures of your kindle? Thank you.', '2022-04-29 18:07:36');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(9) NOT NULL,
  `seller_id` int(9) NOT NULL,
  `category` int(9) NOT NULL,
  `location` int(9) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  `image` varchar(4096) DEFAULT NULL,
  `image_thumbnail` varchar(4096) DEFAULT NULL,
  `price` double NOT NULL,
  `approved` tinyint(4) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `seller_id`, `category`, `location`, `title`, `description`, `image`, `image_thumbnail`, `price`, `approved`, `date_created`) VALUES
(1, 2, 1, 9, 'Laptop', 'Laptop', '1_laptop.jpeg', '1_laptop_thumb.jpg', 200, 1, '2022-04-29 18:07:28'),
(2, 1, 2, 3, 'Bone', 'Bone', '2_bone.jpg', '2_bone_thumb.jpg', 10, 1, '2022-04-29 18:07:28'),
(3, 3, 3, 2, 'Pillow', 'Pillow', '3_pillow.jpg', '3_pillow_thumb.jpg', 25, 1, '2022-04-29 18:07:28'),
(4, 1, 4, 6, 'Bike', 'Bike', '4_bike.jpg', '4_bike_thumb.jpg', 450, 1, '2022-04-29 18:07:28'),
(5, 4, 5, 10, 'Textbook', 'Textbook', '5_textbook.jpg', '5_textbook_thumb.jpg', 15, 1, '2022-04-29 18:07:28'),
(6, 2, 1, 7, 'Calculator', 'Calculator', '6_calculator.jpg', '6_calculator_thumb.jpg', 7, 1, '2022-04-29 18:07:28'),
(7, 1, 1, 6, 'Headphones', 'Headphones', '7_headphones.jpg', '7_headphones_thumb.jpg', 40, 1, '2022-04-29 18:07:28'),
(8, 3, 1, 4, 'Kindle', 'Kindle', '8_kindle.jpg', '8_kindle_thumb.jpg', 130, 1, '2022-04-29 18:07:28'),
(9, 2, 1, 8, 'Television', 'Television', '9_television.jpg', '9_television_thumb.jpg', 618, 1, '2022-04-29 18:07:28'),
(10, 4, 2, 9, 'Pet Bowl', 'Pet Bowl', '10_pet_bowl.jpg', '10_pet_bowl_thumb.jpg', 6, 1, '2022-04-29 18:07:28'),
(11, 4, 2, 7, 'Collar', 'Collar', '11_collar.jpg', '11_collar_thumb.jpg', 9, 1, '2022-04-29 18:07:28'),
(12, 2, 2, 5, 'Pet Bed', 'Pet Bed', '12_pet_bed.jpg', '12_pet_bed_thumb.jpg', 20, 1, '2022-04-29 18:07:28'),
(13, 3, 2, 2, 'Pet Food', 'Pet Food', '13_pet_food.jpg', '13_pet_food_thumb.jpg', 21, 1, '2022-04-29 18:07:28'),
(14, 5, 2, 1, 'Leash', 'Leash', '14_leash.jpg', '14_leash_thumb.jpg', 15, 1, '2022-04-29 18:07:28'),
(15, 3, 3, 7, 'Mattress', 'Mattress', '15_mattress.jpg', '15_mattress_thumb.jpg', 619, 1, '2022-04-29 18:07:28'),
(16, 5, 3, 6, 'Shower Curtain', 'Shower Curtain', '16_shower_curtain.jpg', '16_shower_curtain_thumb.jpg', 11, 1, '2022-04-29 18:07:28'),
(17, 4, 3, 10, 'Lamp', 'Lamp', '17_lamp.jpg', '17_lamp_thumb.jpg', 17, 1, '2022-04-29 18:07:28'),
(18, 3, 3, 4, 'Sofa', 'Sofa', '18_sofa.jpg', '18_sofa_thumb.jpg', 630, 1, '2022-04-29 18:07:28'),
(19, 1, 4, 2, 'Tent', 'Tent', '19_tent.jpg', '19_tent_thumb.jpg', 125, 1, '2022-04-29 18:07:28'),
(20, 1, 4, 10, 'Sleeping Bag', 'Sleeping Bag', '20_sleeping_bag.jpg', '20_sleeping_bag_thumb.jpg', 40, 0, '2022-04-29 18:07:28'),
(21, 5, 4, 9, 'Fishing Pole', 'Fishing Pole', '21_fishing_pole.jpg', '21_fishing_pole_thumb.jpg', 48, 0, '2022-04-29 18:07:28'),
(22, 3, 4, 3, 'Basketball', 'Basketball', '22_basketball.jpg', '22_basketball_thumb.jpg', 19, 0, '2022-04-29 18:07:28'),
(23, 2, 5, 5, 'Dictionary', 'Dictionary', '23_dictionary.jpg', '23_dictionary_thumb.jpg', 21, 0, '2022-04-29 18:07:28'),
(24, 2, 5, 5, 'Encyclopedia', 'Encyclopedia', '24_encyclopedia.jpg', '24_encyclopedia_thumb.jpg', 18, 0, '2022-04-29 18:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(9) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` longtext NOT NULL,
  `administrator` tinyint(4) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email`, `password`, `administrator`, `date_created`) VALUES
(1, 'Steve', 'Russel', 'steve@gmail.com', '$2a$12$Sxe.5U7k1yIBy9/crrXICOd4TXpiQO3yIUTVRcc.8ROpPgZiZ8WSW', 0, '2022-04-29 18:05:32'),
(2, 'Shauna', 'Jones', 'shauna@gmail.com', '$2a$12$O6sz0sWLHorP2aIAYpZtm.loxLicuCWwpmM7jOHqSaCUerY0RiYB.', 0, '2022-04-29 18:05:32'),
(3, 'Bryan', 'Matthew', 'bryan@gmail.com', '$2a$12$KX2REVZXZv5gBhM9jhnpbuP6OatWdtONnEQ56jwRsEgbQIfH1tIJq', 0, '2022-04-29 18:05:32'),
(4, 'George', 'Martin', 'george@gmail.com', '$2a$12$B83FoZN5xmKmQOFw6IpPFOih1Gq3RpawPs2Iyo3aKtFTqDshUxTdu', 0, '2022-04-29 18:05:32'),
(5, 'Carly', 'Brown', 'carly@gmail.com', '$2a$12$QzAImgESEq7SCMZzikfwqOBNx0.xy4gXghk84FeUfuHfUqbJTJwgO', 0, '2022-04-29 18:05:32'),
(6, 'Noah', 'Williams', 'noah@gmail.com', '$2a$12$yY9/4QtfyXEbjbfQ6RD1u.GBDQLN1ZI3XkWYbjW1ogM0fYBJUpp.a', 0, '2022-04-29 18:05:32'),
(7, 'Olivia', 'Johnson', 'olivia@gmail.com', '$2a$12$9SLjzSCtKBRzXrR.wzWU4.jw9WTisx51XJT6n/mMJZq5OoZOkFhFS', 0, '2022-04-29 18:05:32'),
(8, 'Emma', 'Jones', 'emma@gmail.com', '$2a$12$xWr5DHYmZgPqrKPuXP4.oe/N5g3nOwLDP.wS2/OaWkag3Yc607kmO', 0, '2022-04-29 18:05:32'),
(9, 'Elijah', 'Garcia', 'elijah@gmail.com', '$2a$12$LDOfcmJcZcuzROJk12QMCOf/Tzk2AbEWhIFuWwJVt8ghsKeB2XkOa', 0, '2022-04-29 18:05:32'),
(10, 'Charlotte', 'Miller', 'charlotte@gmail.com', '$2a$12$lPcZ/xoufithSggafEnTgOLPvM7ZZJ8B6JFfd7i8yi1qNjr.Eqz8.', 0, '2022-04-29 18:05:32'),
(11, 'William', 'Davis', 'william@gmail.com', '$2a$12$EiLdszQostobR1KIYctY5uiuVPQnJkvAqReqgPTzT5QHwVdaDwFoy', 0, '2022-04-29 18:05:32'),
(12, 'James', 'Rodriguez', 'james@gmail.com', '$2a$12$6bk/0/rKs4nsg.qQj5UzEOpJkDvtEuaPu.d2.pFw9VlO0XLB.56Mi', 0, '2022-04-29 18:05:32'),
(13, 'Amelia', 'Wilson', 'amelia@gmail.com', '$2a$12$tAP8HkJQn8ri5TrMzJ1jQe5pbc27LaHHuex/rUaFL67wNp.6jreea', 0, '2022-04-29 18:05:32'),
(14, 'Lucas', 'Anderson', 'lucas@gmail.com', '$2a$12$Xhcs/VdyCaOjmXVjvIqs0eP.7U/J/RXONudz0i/x6yWQyo8Sf0v1K', 0, '2022-04-29 18:05:32'),
(15, 'Evelyn', 'Thomas', 'evelyn@gmail.com', '$2a$12$.yCISdVGDNmL1pe9v/vpb.JlrdBLGm10LqBjLSeHgPHSKTeVOIU36', 0, '2022-04-29 18:05:32'),
(16, 'Vishal', 'Sharma', 'vsharma5@mail.sfsu.edu', '$2b$12$nYQK0ytd3/VKVMadIfILj.dKkRig2E/Sv0D/r52zHk50jOdHmdbJy', 0, '2022-05-16 18:25:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `MESSAGE_USER_FK_idx` (`creator_id`),
  ADD KEY `MESSAGE_USER2_FK_idx` (`receiver_id`),
  ADD KEY `MESSAGE_PRODUCT_FK_idx` (`product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `PRODUCT_CATEGORY_FK` (`category`),
  ADD KEY `PRODUCT_LOCATION_FK` (`location`),
  ADD KEY `PRODUCT_USER_FK` (`seller_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `MESSAGE_PRODUCT_FK` FOREIGN KEY (`product`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `MESSAGE_USER1_FK` FOREIGN KEY (`creator_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `MESSAGE_USER2_FK` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `PRODUCT_CATEGORY_FK` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PRODUCT_LOCATION_FK` FOREIGN KEY (`location`) REFERENCES `location` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PRODUCT_USER_FK` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
