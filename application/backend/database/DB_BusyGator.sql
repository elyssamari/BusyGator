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
-- Generation Time: May 01, 2022 at 07:56 AM
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

-- -----------------------------------------------------
-- Database: `DB_BusyGator`
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `DB_BusyGator` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `DB_BusyGator`;


-- --------------------------------------------------------

--
-- Table structure for table `category`
--

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

CREATE TABLE `product` (
  `product_id` int(9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
(1, 2, 1, 9, 'Laptop', 'Laptop', '1_laptop.jpeg', '1_laptop_thumb.jpg', 200, 0, '2022-04-29 18:07:28'),
(2, 1, 2, 3, 'Bone', 'Bone', '2_bone.jpg', '2_bone_thumb.jpg', 10, 0, '2022-04-29 18:07:28'),
(3, 3, 3, 2, 'Pillow', 'Pillow', '3_pillow.jpg', '3_pillow_thumb.jpg', 25, 0, '2022-04-29 18:07:28'),
(4, 1, 4, 6, 'Bike', 'Bike', '4_bike.jpg', '4_bike_thumb.jpg', 450, 0, '2022-04-29 18:07:28'),
(5, 4, 5, 10, 'Textbook', 'Textbook', '5_textbook.jpg', '5_textbook_thumb.jpg', 15, 0, '2022-04-29 18:07:28'),
(6, 2, 1, 7, 'Calculator', 'Calculator', '6_calculator.jpg', '6_calculator_thumb.jpg', 7, 0, '2022-04-29 18:07:28'),
(7, 1, 1, 6, 'Headphones', 'Headphones', '7_headphones.jpg', '7_headphones_thumb.jpg', 40, 0, '2022-04-29 18:07:28'),
(8, 3, 1, 4, 'Kindle', 'Kindle', '8_kindle.jpg', '8_kindle_thumb.jpg', 130, 0, '2022-04-29 18:07:28'),
(9, 2, 1, 8, 'Television', 'Television', '9_television.jpg', '9_television_thumb.jpg', 618, 0, '2022-04-29 18:07:28'),
(10, 4, 2, 9, 'Pet Bowl', 'Pet Bowl', '10_pet_bowl.jpg', '10_pet_bowl_thumb.jpg', 6, 0, '2022-04-29 18:07:28'),
(11, 4, 2, 7, 'Collar', 'Collar', '11_collar.jpg', '11_collar_thumb.jpg', 9, 0, '2022-04-29 18:07:28'),
(12, 2, 2, 5, 'Pet Bed', 'Pet Bed', '12_pet_bed.jpg', '12_pet_bed_thumb.jpg', 20, 0, '2022-04-29 18:07:28'),
(13, 3, 2, 2, 'Pet Food', 'Pet Food', '13_pet_food.jpg', '13_pet_food_thumb.jpg', 21, 0, '2022-04-29 18:07:28'),
(14, 5, 2, 1, 'Leash', 'Leash', '14_leash.jpg', '14_leash_thumb.jpg', 15, 0, '2022-04-29 18:07:28'),
(15, 3, 3, 7, 'Mattress', 'Mattress', '15_mattress.jpg', '15_mattress_thumb.jpg', 619, 0, '2022-04-29 18:07:28'),
(16, 5, 3, 6, 'Shower Curtain', 'Shower Curtain', '16_shower_curtain.jpg', '16_shower_curtain_thumb.jpg', 11, 0, '2022-04-29 18:07:28'),
(17, 4, 3, 10, 'Lamp', 'Lamp', '17_lamp.jpg', '17_lamp_thumb.jpg', 17, 0, '2022-04-29 18:07:28'),
(18, 3, 3, 4, 'Sofa', 'Sofa', '18_sofa.jpg', '18_sofa_thumb.jpg', 630, 0, '2022-04-29 18:07:28'),
(19, 1, 4, 2, 'Tent', 'Tent', '19_tent.jpg', '19_tent_thumb.jpg', 125, 0, '2022-04-29 18:07:28'),
(20, 1, 4, 10, 'Sleeping Bag', 'Sleeping Bag', '20_sleeping_bag.jpg', '20_sleeping_bag_thumb.jpg', 40, 0, '2022-04-29 18:07:28'),
(21, 5, 4, 9, 'Fishing Pole', 'Fishing Pole', '21_fishing_pole.jpg', '21_fishing_pole_thumb.jpg', 48, 0, '2022-04-29 18:07:28'),
(22, 3, 4, 3, 'Basketball', 'Basketball', '22_basketball.jpg', '22_basketball_thumb.jpg', 19, 0, '2022-04-29 18:07:28'),
(23, 2, 5, 5, 'Dictionary', 'Dictionary', '23_dictionary.jpg', '23_dictionary_thumb.jpg', 21, 0, '2022-04-29 18:07:28'),
(24, 2, 5, 5, 'Encyclopedia', 'Encyclopedia', '24_encyclopedia.jpg', '24_encyclopedia_thumb.jpg', 18, 0, '2022-04-29 18:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` binary(60) NOT NULL,
  `administrator` tinyint(4) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email`, `password`, `administrator`, `date_created`) VALUES
(1, 'Steve', 'Russel', 'steve@gmail.com', 0x243261243132245378652e3555376b3179494279392f6372725849434f643454587069514f3379495554565263632e38524f7050675a695a38575357, 0, '2022-04-29 18:05:32'),
(2, 'Shauna', 'Jones', 'shauna@gmail.com', 0x243261243132244f36737a3073574c486f72503261494159705a746d2e6c6f784c696375435777706d4d376a4f48715361435565725930526959422e, 0, '2022-04-29 18:05:32'),
(3, 'Bryan', 'Matthew', 'bryan@gmail.com', 0x243261243132244b58325245565a585a76356742684d396a686e70627550364f61745764744f4e6e455135366a775273456762514966483174494a71, 0, '2022-04-29 18:05:32'),
(4, 'George', 'Martin', 'george@gmail.com', 0x24326124313224423833466f5a4e35786d4b6d514f467736497050464f6968314771335270617750733249796f33614b744654714473685578546475, 0, '2022-04-29 18:05:32'),
(5, 'Carly', 'Brown', 'carly@gmail.com', 0x24326124313224517a41496d67455345713753434d5a7a696b6677714f424e78302e787934675867686b3834466555667548665571624a544a77674f, 0, '2022-04-29 18:05:32'),
(6, 'Noah', 'Williams', 'noah@gmail.com', 0x243261243132247959392f34517466795845626a62665136524431752e474244514c4e315a4933586b5759626a57316f674d306659424a5570702e61, 0, '2022-04-29 18:05:32'),
(7, 'Olivia', 'Johnson', 'olivia@gmail.com', 0x2432612431322439534c6a7a5343744b42527a5872522e777a5755342e6a773957546973783531584a54366e2f6d4d4a5a71354f6f5a4f6b46684653, 0, '2022-04-29 18:05:32'),
(8, 'Emma', 'Jones', 'emma@gmail.com', 0x24326124313224785772354448596d5a675071724b50755850342e6f652f4e3567336e4f774c44502e7753322f4f61576b61673359633630376b6d4f, 0, '2022-04-29 18:05:32'),
(9, 'Elijah', 'Garcia', 'elijah@gmail.com', 0x243261243132244c444f66636d4a635a63757a524f4a6b3132514d434f662f547a6b32416245576849467557774a5674386768734b654232586b4f61, 0, '2022-04-29 18:05:32'),
(10, 'Charlotte', 'Miller', 'charlotte@gmail.com', 0x243261243132246c50635a2f786f75666974685367676166456e54674f4c50764d375a5a4a3842364a466664376938796931714e6a722e45717a382e, 0, '2022-04-29 18:05:32'),
(11, 'William', 'Davis', 'william@gmail.com', 0x2432612431322445694c64737a516f73746f6252314b4959637459357569755650516e4a6b7641715265716750547a54355148775664614477466f79, 0, '2022-04-29 18:05:32'),
(12, 'James', 'Rodriguez', 'james@gmail.com', 0x2432612431322436626b2f302f724b73346e73672e71516a35557a454f704a6b44767445756150752e64322e70467739566c4f30584c422e35364d69, 0, '2022-04-29 18:05:32'),
(13, 'Amelia', 'Wilson', 'amelia@gmail.com', 0x2432612431322474415038486b4a516e3872693554724d7a4a316a51653570626332374c6148487565782f725561464c3637774e702e366a72656561, 0, '2022-04-29 18:05:32'),
(14, 'Lucas', 'Anderson', 'lucas@gmail.com', 0x24326124313224586863732f56647943614f6a6d58566a764971733065502e37552f4a2f52584f4e75647a30692f7836795751796f3853663076314b, 0, '2022-04-29 18:05:32'),
(15, 'Evelyn', 'Thomas', 'evelyn@gmail.com', 0x243261243132242e79434953645647444e6d4c31706539762f7670622e4a6c7264424c476d31304c71426a4c536548675048534b5465564f49553336, 0, '2022-04-29 18:05:32');

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
  ADD KEY `PRODUCT_CATEGORY_FK` (`category`),
  ADD KEY `PRODUCT_LOCATION_FK` (`location`),
  ADD KEY `PRODUCT_USER_FK` (`seller_id`);

--
-- Indexes for table `user`
--

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
