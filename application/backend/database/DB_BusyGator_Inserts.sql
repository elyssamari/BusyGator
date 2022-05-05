--
-- FILE: DB_BusyGator_Inserts.sql
--
-- AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
-- Samantha Saxton-Getty
--
-- PURPOSE: This file inserts sample data to test the integrity of this database system.
--    

INSERT INTO user (user_id, first_name, last_name, email, password, administrator, date_created) 
VALUES
(1, 'Steve', 'Russel', 'steve@gmail.com', '$2a$12$Sxe.5U7k1yIBy9/crrXICOd4TXpiQO3yIUTVRcc.8ROpPgZiZ8WSW', 0, NOW()),
(2, 'Shauna', 'Jones', 'shauna@gmail.com', '$2a$12$O6sz0sWLHorP2aIAYpZtm.loxLicuCWwpmM7jOHqSaCUerY0RiYB.', 0, NOW()),
(3, 'Bryan', 'Matthew', 'bryan@gmail.com', '$2a$12$KX2REVZXZv5gBhM9jhnpbuP6OatWdtONnEQ56jwRsEgbQIfH1tIJq', 0, NOW()),
(4, 'George', 'Martin', 'george@gmail.com', '$2a$12$B83FoZN5xmKmQOFw6IpPFOih1Gq3RpawPs2Iyo3aKtFTqDshUxTdu', 0, NOW()),
(5, 'Carly', 'Brown', 'carly@gmail.com', '$2a$12$QzAImgESEq7SCMZzikfwqOBNx0.xy4gXghk84FeUfuHfUqbJTJwgO', 0, NOW()),
(6, 'Noah', 'Williams', 'noah@gmail.com', '$2a$12$yY9/4QtfyXEbjbfQ6RD1u.GBDQLN1ZI3XkWYbjW1ogM0fYBJUpp.a', 0, NOW()),
(7, 'Olivia', 'Johnson', 'olivia@gmail.com', '$2a$12$9SLjzSCtKBRzXrR.wzWU4.jw9WTisx51XJT6n/mMJZq5OoZOkFhFS', 0, NOW()),
(8, 'Emma', 'Jones', 'emma@gmail.com', '$2a$12$xWr5DHYmZgPqrKPuXP4.oe/N5g3nOwLDP.wS2/OaWkag3Yc607kmO', 0, NOW()),
(9, 'Elijah', 'Garcia', 'elijah@gmail.com', '$2a$12$LDOfcmJcZcuzROJk12QMCOf/Tzk2AbEWhIFuWwJVt8ghsKeB2XkOa', 0, NOW()),
(10, 'Charlotte', 'Miller', 'charlotte@gmail.com', '$2a$12$lPcZ/xoufithSggafEnTgOLPvM7ZZJ8B6JFfd7i8yi1qNjr.Eqz8.', 0, NOW()),
(11, 'William', 'Davis', 'william@gmail.com', '$2a$12$EiLdszQostobR1KIYctY5uiuVPQnJkvAqReqgPTzT5QHwVdaDwFoy', 0, NOW()),
(12, 'James', 'Rodriguez', 'james@gmail.com', '$2a$12$6bk/0/rKs4nsg.qQj5UzEOpJkDvtEuaPu.d2.pFw9VlO0XLB.56Mi', 0, NOW()),
(13, 'Amelia', 'Wilson', 'amelia@gmail.com', '$2a$12$tAP8HkJQn8ri5TrMzJ1jQe5pbc27LaHHuex/rUaFL67wNp.6jreea', 0, NOW()),
(14, 'Lucas', 'Anderson', 'lucas@gmail.com', '$2a$12$Xhcs/VdyCaOjmXVjvIqs0eP.7U/J/RXONudz0i/x6yWQyo8Sf0v1K', 0, NOW()),
(15, 'Evelyn', 'Thomas', 'evelyn@gmail.com', '$2a$12$.yCISdVGDNmL1pe9v/vpb.JlrdBLGm10LqBjLSeHgPHSKTeVOIU36', 0, NOW());

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

INSERT INTO message (message_id, creator_id, receiver_id, product, subject, message_body, date_created) 
VALUES
(1, 12, 2, 6, 'Calculator', 'Hi! I was wondering when you\'d be available to meet and exchange the calculator you listed. Thanks in advance!', NOW()),
(2, 15, 4, 11, 'Collar', 'hey, what size dog is the collar you listed meant for? i was hoping it\'d fit my chihuahua', NOW()),
(3, 6, 3, 13, 'Pet Food', 'when can you meet up for the pet food??? thx', NOW()),
(4, 11, 5, 21, 'Fishing Pole', 'I am interested in purchasing the fishing pole you listed. The best time for me to meet would be next Monday at 4:00 PM. -William', NOW()),
(5, 8, 1, 19, 'Tent', 'Hello! I\'m thinking about buying your tent. How many people does it fit?', NOW()),
(6, 7, 2, 23, 'Dictionary', 'would oyu be willing to sell the dictionary for $10?? i need it for my class and that\'s all i got', NOW()),
(7, 9, 3, 18, 'Sofa', 'Hi. Do you have any equipment for moving the sofa? It\'ll be a bit hard to carry it from the gymnasium to my car by hand. Thanks.', NOW()),
(8, 13, 1, 20, 'Sleeping Bag', 'hey! are you available to meet up tomorrow to exchange the sleeping bag? thanks!', NOW()),
(9, 10, 5, 14, 'Leash', 'can you meet up tomorrow to sell the leash? and do you have a venmo?', NOW()),
(10, 14, 3, 8, 'Kindle', 'Hello. Do you have any other pictures of your kindle? Thank you.', NOW());