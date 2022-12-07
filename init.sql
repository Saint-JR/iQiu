DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
                         `id` INT(11) NOT NULL auto_increment,
                         `username` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `password` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `register_date` TIMESTAMP NULL DEFAULT NULL,
                         `gender` INT(11) NOT NULL,  # 0-未选择;1-男;2-女
                         `signature` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `location` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `phone_number` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `posts` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `follow_community` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `follower` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `fans` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
                         `id` INT(11) NOT NULL auto_increment,
                         `poster_id` INT(11) NOT NULL,
                         `title` VARCHAR(70) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `content` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                         `post_type` INT(11) NULL DEFAULT NULL COMMENT '0-闲聊; 1-约球',
                         `location` VARCHAR(70) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,  # 约球地点
                         `ball_type` INT(11) NOT NULL,  # 球的类型
                         `people_counts` INT(11) NOT NULL,  # 加入的人数
                         `create_time` TIMESTAMP NULL DEFAULT NULL,
                         `community_id` INT(11) NOT NULL,  # 帖子所在圈子id
                         `like_count` INT(11),
                         `like_users` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
                         PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

DROP TABLE IF EXISTS `community`;
CREATE TABLE `community`  (
                            `id` INT(11) NOT NULL AUTO_INCREMENT,
                            `community_name` VARCHAR(50)CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                            `follower_count` INT(11),  # 关注人数
                            `create_time` TIMESTAMP NULL DEFAULT NULL,
                            PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;


DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
                            `id` INT(11) NOT NULL AUTO_INCREMENT,
                            `user_id` INT(11) NULL DEFAULT NULL,
                            `comment_type` INT(11) NULL DEFAULT NULL COMMENT '0-回帖; 1-回复评论',
                            `comment_id` INT(11) NULL DEFAULT NULL,  # 如果是回复评论，则有comment_id存储所回复的那条评论的id
                            `post_id` INT(11) NULL DEFAULT NULL,
                            `content` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
                            `create_time` TIMESTAMP NULL DEFAULT NULL,
                            `like_count` INT(11),
                            `like_users` VARCHAR(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
                            PRIMARY KEY (`id`) USING BTREE,
                            INDEX `index_user_id`(`user_id`) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;
