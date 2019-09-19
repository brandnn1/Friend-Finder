DROP DATABASE IF EXISTS friends;

CREATE DATABASE friends;

USE friends;

CREATE  TABLE friendsList (
    friends_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    Name varchar (100) NOT NULL, 
    Photo varchar (8000), 
	Answer_1 int NOT NULL, 
    Answer_2 int NOT NULL, 
    Answer_3 int NOT NULL, 
    Answer_4 int NOT NULL, 
    Answer_5 int NOT NULL, 
    Answer_6 int NOT NULL, 
    Answer_7 int NOT NULL, 
    Answer_8 int NOT NULL, 
    Answer_9 int NOT NULL, 
    Answer_10 int NOT NULL
);

INSERT INTO friendsList (Name, Photo, Answer_1, Answer_2, Answer_3, Answer_4, Answer_5, Answer_6, Answer_7, Answer_8, Answer_9, Answer_10) values (
 'The Demogorgon','https://vignette.wikia.nocookie.net/animaljam/images/8/8a/Demogorgon.jpg/revision/latest?cb=20171122032931', 5, 1, 1, 5, 1, 3, 1, 5, 1, 5
);

INSERT INTO friendsList (Name, Photo, Answer_1, Answer_2, Answer_3, Answer_4, Answer_5, Answer_6, Answer_7, Answer_8, Answer_9, Answer_10) values (
'IT','https://vignette.wikia.nocookie.net/monster/images/b/b0/It.jpeg/revision/latest/scale-to-width-down/350?cb=20180529123005',4, 2, 3, 2, 3, 3, 1, 2, 5, 2
);

INSERT INTO friendsList (Name, Photo, Answer_1, Answer_2, Answer_3, Answer_4, Answer_5, Answer_6, Answer_7, Answer_8, Answer_9, Answer_10) values (
'Pinhead','https://vignette.wikia.nocookie.net/monster-and-slashers/images/6/60/Pinhead.jpg/revision/latest?cb=20180427050825',4, 2, 4, 5, 1, 1, 3, 5, 4, 3
);

INSERT INTO friendsList (Name, Photo, Answer_1, Answer_2, Answer_3, Answer_4, Answer_5, Answer_6, Answer_7, Answer_8, Answer_9, Answer_10) values (
'Jason Voorhees','https://vignette.wikia.nocookie.net/monstermovies/images/3/34/Jason_Voorhees.jpg/revision/latest?cb=20171017181248',4, 2, 3, 5, 2, 3, 2, 3, 1, 5
);

INSERT INTO friendsList (Name, Photo, Answer_1, Answer_2, Answer_3, Answer_4, Answer_5, Answer_6, Answer_7, Answer_8, Answer_9, Answer_10) values (
'Michael Myers','https://s-media-cache-ak0.pinimg.com/736x/18/aa/a2/18aaa22470d4f3864219820904589cf1--michael-myers-tattoo-horror-wallpaper.jpg',2, 1, 1, 1, 1, 3, 4, 5, 4, 5
);