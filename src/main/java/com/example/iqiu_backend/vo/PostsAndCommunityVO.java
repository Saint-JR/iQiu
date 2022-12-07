package com.example.iqiu_backend.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class PostsAndCommunityVO {

    private int postId;  // 帖子id
    private String communityHeaderUrl;  // 圈子头像
    private String communityName;  // 圈名
    private int followerCount;  // 圈子关注人数
    private int postCount;  // 圈子总帖子数
    private String title;  // 帖子标题
    private String content;  // 帖子内容
    private int likeCount;  // 帖子点赞数
    private String posterName;  // 楼主用户名
    private int posterId;  // 楼主id
    private String posterHeaderUrl;  // 楼主头像
    private Date createTime;  // 发帖时间

}
