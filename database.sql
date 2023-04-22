Create database "react_gallery"

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(50) NOT NULL,
	"path" VARCHAR(1000) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"likes" NUMERIC DEFAULT 0
);

INSERT INTO "gallery" ("title", "path", "description")
VALUES ('My Parents','images/gallery1.png','I wouldn''t be who I am today without their love and support.'), 
('Gaming PC','images/gallery2.png','This thing is a beast. I''ve had it for years and its still kickin.'), 
('Marlie','images/gallery3.png','She can be a bit of a trouble maker, but I love her.'),
('Chilluminati','images/gallery4.png','I''ve been attending these parties for more than a decade.'),
('Prime','images/gallery5.png','Special thanks to Chris Black from Prime Digital Academy!');