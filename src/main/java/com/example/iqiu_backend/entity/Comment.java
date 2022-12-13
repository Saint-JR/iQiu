package com.example.iqiu_backend.entity;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.*;

import java.util.Date;

/**
 * 评论实体类
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Comment {
    private int id;
    private int userId;  // 发布评论的用户的id
    private String userName;
    private String userAvatar;
    private String location;
    private int commentType;  // 评论类型: 0-回帖; 1-回复评论
    private int originCommentId;  // 如果是回复评论, 则表示所回复的那条评论的id; 否则为空
    private int postId;  // 评论所属帖子的id(两种类型的评论都有
    private String content; // 评论内容
    private String createTime;  // 评论发布时间
    private int likeCount=0;  // 评论的点赞数
    private String likeUsers="";  // 为评论点赞的用户id的字符串


}