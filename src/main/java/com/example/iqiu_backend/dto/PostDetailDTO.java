package com.example.iqiu_backend.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class PostDetailDTO {

    private int postId;     // 帖子id
    private int userId;     // 楼主用户id
    private String userAvatar; //楼主用户头像
    private String userName; //用户名
    private Date createTime; //创建时间
    private String location; //用户地点
    private int communityId; //圈子id
    private String communityName; //圈子名
    private String communityAvatar; //圈子头像
    private int followerCount; //圈子关注人数
    private String postTitle; //帖子标题
    private String postContent; //帖子内容
    private int postType; //帖子类型 0-闲聊贴 1-约球贴
    private String ballType; //球类类型
    private String peopleCount; //需求人数
    private String ballLocation; //场馆地点
    private int commentCount;//评论数
    private String comment; //评论json字符串

}
