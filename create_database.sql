-- Database name
code_challenge_04
-- Document you create tables pSQL here

CREATE TABLE treats (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(200),
description VARCHAR(500),
pic VARCHAR(1000)
);

INSERT INTO treats (name, description, pic) VALUES ('Crazzy Cupcake', 'tasty, tasty super DELICIOUS cupcakes!! They are otta this world!','../assets/cupcake.jpg');
INSERT INTO treats (name, description, pic) VALUES ('Dreamy Donut', 'round and round it goes!','../assets/donuts.jpg');
INSERT INTO treats (name, description, pic) VALUES ('Goldy GoldFish', 'Swim, swim, swim! Just keep on swimmin!','../assets/goldfish.jpg');
INSERT INTO treats (name, description, pic) VALUES ('I-scream Icecream', 'Shout out your love for icecream!','../assets/icecream.jpg');
INSERT INTO treats (name, description, pic) VALUES ('Ye Old Potato', 'Tried and trusted, tasty lookin russet!','../assets/potato.jpg');
