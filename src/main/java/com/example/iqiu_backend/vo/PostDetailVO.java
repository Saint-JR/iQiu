package com.example.iqiu_backend.vo;

import com.alibaba.fastjson.JSONArray;
import com.example.iqiu_backend.entity.Comment;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class PostDetailVO {

    private int postId;     // 帖子id
    private int userId;     // 楼主用户id
    private String userName; //用户名
    private Date createTime; //创建时间
    private String location; //用户地点
    private int communityId; //圈子id
    private String communityName; //圈子名
    private int followerCount; //圈子关注人数
    private String title; //帖子标题
    private String content; //帖子内容
    private int postType; //帖子类型 0-闲聊贴 1-约球贴
    private String ballType; //球类类型
    private String peopleCount; //需求人数
    private String ballLocation; //场馆地点
    private int commentCount;//评论数
    private List<Comment> comment; //评论数组
}
