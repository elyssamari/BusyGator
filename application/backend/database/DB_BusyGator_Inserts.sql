-- Script name: DB_BusyGator_Inserts.sql
-- Author:      CSC 648 Team 04
-- Purpose:     insert sample data to test the integrity of this database system

INSERT INTO user (user_id, first_name, last_name, email, password, administrator, date_created) 
VALUES
(1, 'Steve', 'Russel', 'steve@gmail.com', '&2=8392', 0, NOW()),
(2, 'Shauna', 'Jones', 'shauna@gmail.com', 'heay3@683q', 0, NOW()),
(3, 'Bryan', 'Matthew', 'bryan@gmail.com', 'jg4a9j$@#a', 0, NOW()),
(4, 'George', 'Martin', 'george@gmail.com', 'rng9j3$^$', 0, NOW()),
(5, 'Carly', 'Brown', 'carly@gmail.com', 'g9j4ag$#v', 0, NOW());

INSERT INTO product (product_id, seller_id, category, location, title, description, image, image_thumbnail, price, approved, date_created) 
VALUES
(1, 2, 1, 9, 'Laptop', 'Laptop', '1_laptop.jpeg', '1_laptop_thumb.jpg', 200.00, 0, NOW()),
(2, 1, 2, 3, 'Bone', 'Bone', '2_bone.jpg', '2_bone_thumb.jpg', 10.00, 0, NOW()),
(3, 3, 3, 2, 'Pillow', 'Pillow', '3_pillow.jpg', '3_pillow_thumb.jpg', 25.00, 0, NOW()),
(4, 1, 4, 6, 'Bike', 'Bike', '4_bike.jpg', '4_bike_thumb.jpg', 450.00, 0, NOW()),
(5, 4, 5, 10, 'Textbook', 'Textbook', '5_textbook.jpg', '5_textbook_thumb.jpg', 15.00, 0, NOW()),
(6, 2, 1, 7, 'Calculator', 'Calculator', '6_calculator.jpg', '6_calculator_thumb.jpg', 7.00, 0, NOW()),
(7, 1, 1, 6, 'Headphones', 'Headphones', '7_headphones.jpg', '7_headphones_thumb.jpg', 40.00, 0, NOW()),
(8, 3, 1, 4, 'Kindle', 'Kindle', '8_kindle.jpg', '8_kindle_thumb.jpg', 130.00, 0, NOW()),
(9, 2, 1, 8, 'Television', 'Television', '9_television.jpg', '9_television_thumb.jpg', 618.00, 0, NOW()),
(10, 4, 2, 9, 'Pet Bowl', 'Pet Bowl', '10_pet_bowl.jpg', '10_pet_bowl_thumb.jpg', 6.00, 0, NOW()),
(11, 4, 2, 7, 'Collar', 'Collar', '11_collar.jpg', '11_collar_thumb.jpg', 9.00, 0, NOW()),
(12, 2, 2, 5, 'Pet Bed', 'Pet Bed', '12_pet_bed.jpg', '12_pet_bed_thumb.jpg', 20.00, 0, NOW()),
(13, 3, 2, 2, 'Pet Food', 'Pet Food', '13_pet_food.jpg', '13_pet_food_thumb.jpg', 21.00, 0, NOW()),
(14, 5, 2, 1, 'Leash', 'Leash', '14_leash.jpg', '14_leash_thumb.jpg', 15.00, 0, NOW()),
(15, 3, 3, 7, 'Mattress', 'Mattress', '15_mattress.jpg', '15_mattress_thumb.jpg', 619.00, 0, NOW()),
(16, 5, 3, 6, 'Shower Curtain', 'Shower Curtain', '16_shower_curtain.jpg', '16_shower_curtain_thumb.jpg', 11.00, 0, NOW()),
(17, 4, 3, 10, 'Lamp', 'Lamp', '17_lamp.jpg', '17_lamp_thumb.jpg', 17.00, 0, NOW()),
(18, 3, 3, 4, 'Sofa', 'Sofa', '18_sofa.jpg', '18_sofa_thumb.jpg', 630.00, 0, NOW()),
(19, 1, 4, 2, 'Tent', 'Tent', '19_tent.jpg', '19_tent_thumb.jpg', 125.00, 0, NOW()),
(20, 1, 4, 10, 'Sleeping Bag', 'Sleeping Bag', '20_sleeping_bag.jpg', '20_sleeping_bag_thumb.jpg', 40.00, 0, NOW()),
(21, 5, 4, 9, 'Fishing Pole', 'Fishing Pole', '21_fishing_pole.jpg', '21_fishing_pole_thumb.jpg', 48.00, 0, NOW()),
(22, 3, 4, 3, 'Basketball', 'Basketball', '22_basketball.jpg', '22_basketball_thumb.jpg', 19.00, 0, NOW()),
(23, 2, 5, 5, 'Dictionary', 'Dictionary', '23_dictionary.jpg', '23_dictionary_thumb.jpg', 21.00, 0, NOW()),
(24, 2, 5, 5, 'Encyclopedia', 'Encyclopedia', '24_encyclopedia.jpg', '24_encyclopedia_thumb.jpg', 18.00, 0, NOW());
