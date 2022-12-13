package com.example.iqiu_backend.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class CommunityPostsVO {
    private int postId;  // 帖子id
    private int postType;   //帖子类型
    private int userId; //创建者用户id
    private String userName; //创建者用户名
    private String userAvatar; //用户头像
    private Date createTime; //创建时间
    private Date lastCommentTime; //最后评论时间
    private String postTitle;  // 帖子标题
    private String postContent;  // 帖子内容
    private int likeCount;  // 帖子点赞数
    private String ballType; //球类类型
    private String peopleCount; //所需人数
    private String ballLocation; //场馆地点
}
