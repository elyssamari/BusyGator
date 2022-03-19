-- Script name: databaseInserts.sql
-- Author:      CSC 648 Team 04
-- Purpose:     insert sample data to test the integrity of this database system

INSERT INTO product (product_id, category, location, title, description, image, image_thumbnail, price) 
VALUES
(1, 1, 9, 'Laptop', 'Laptop', '1_laptop.jpeg', '1_laptop_thumb.jpg', 200),
(2, 2, 3, 'Bone', 'Bone', '2_bone.jpg', '2_bone_thumb.jpg', 10),
(3, 3, 2, 'Pillow', 'Pillow', '3_pillow.jpg', '3_pillow_thumb.jpg', 25),
(4, 4, 6, 'Bike', 'Bike', '4_bike.jpg', '4_bike_thumb.jpg', 450),
(5, 5, 10, 'Textbook', 'Textbook', '5_textbook.jpg', '5_textbook_thumb.jpg', 15);
COMMIT;