package com.example.iqiu_backend.entity;

import lombok.*;

import java.util.Date;

/**
 * 帖子实体类
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Posts {

    private int id;
    private int posterId;
    private String title;
    private String content;
    private int postType;  // 帖子类型：0-闲聊; 1-约球
    private String location;  // 若为约球贴, 则有约球地点; 若为闲聊贴, 则此属性为null
    private String ballType;  //若为约球贴, 则有球的类型; 若为闲聊贴, 则此属性为null
    private String peopleCount;  // 若为约球贴, 则有参加人数; 若为闲聊贴, 则此属性为null
    private Date createTime;  // 发帖时间
    private int communityId;  // 帖子所在圈子的id
    private int likeCount;  // 帖子点赞数
    private String likeUsers;  // 帖子点赞用户id的字符串

}
