CREATE TABLE User_Labook(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Labook_followers (
    followed_id VARCHAR(255) NOT NULL,
    follower_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (followed_id) REFERENCES User_Labook(id),
    FOREIGN KEY (follower_id) REFERENCES User_Labook(id)
);

CREATE TABLE IF NOT EXISTS Labook_posts (
	id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body mediumtext NOT NULL,
    image_url VARCHAR(255),
    post_type VARCHAR(64) NOT NULL,
    created_at DATETIME NOT NULL,
    user_id VARCHAR(255) NOT NULL
    );
    

   CREATE TABLE IF NOT EXISTS Labook_posts_likes (
	id VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User_Labook(id)
    );
    
   CREATE TABLE IF NOT EXISTS Labook_posts_comments (
	id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    comment mediumtext NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User_Labook(id)
    );