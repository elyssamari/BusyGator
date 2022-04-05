-- Script name: DB_BusyGator_Inserts.sql
-- Author:      CSC 648 Team 04
-- Purpose:     insert sample data to test the integrity of this database system

INSERT INTO user (user_id, first_name, last_name, email, password, administrator, date_created) 
VALUES
(1, 'Steve', 'Russel', 'steve@gmail.com', '&2=8392', 0, NOW()),
(2, 'Shauna', 'Jones', 'shauna@gmail.com', 'heay3@683q', 0, NOW());

INSERT INTO product (product_id, seller_id, category, location, title, description, image, image_thumbnail, price, approved, date_created) 
VALUES
(1, 2, 1, 9, 'Laptop', 'Laptop', '1_laptop.jpeg', '1_laptop_thumb.jpg', 200.00, 0, NOW()),
(2, 1, 2, 3, 'Bone', 'Bone', '2_bone.jpg', '2_bone_thumb.jpg', 10.00, 0, NOW()),
(3, 2, 3, 2, 'Pillow', 'Pillow', '3_pillow.jpg', '3_pillow_thumb.jpg', 25.00, 0, NOW()),
(4, 1, 4, 6, 'Bike', 'Bike', '4_bike.jpg', '4_bike_thumb.jpg', 450.00, 0, NOW()),
(5, 2, 5, 10, 'Textbook', 'Textbook', '5_textbook.jpg', '5_textbook_thumb.jpg', 15.00, 0, NOW());