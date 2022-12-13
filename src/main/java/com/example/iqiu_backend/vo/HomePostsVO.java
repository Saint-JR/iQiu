package com.example.iqiu_backend.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class HomePostsVO {

    private int postId;  // 帖子id
    private int postType;   //帖子类型
    private Date lastCommentTime; //最后评论时间
    private int communityId; //圈子id
    private String communityName;  // 圈名
    private String communityAvatar; //圈子头像
    private int followerCount;  // 圈子关注人数
    private int postsCount; //圈子发帖数
    private String postTitle;  // 帖子标题
    private String postContent;  // 帖子内容
    private int likeCount;  // 帖子点赞数
    private String ballType; //球类类型
    private String peopleCount; //所需人数
    private String ballLocation; //场馆地点


}
