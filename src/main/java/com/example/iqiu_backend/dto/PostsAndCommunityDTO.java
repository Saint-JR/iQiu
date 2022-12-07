package com.example.iqiu_backend.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class PostsAndCommunityDTO {

    private int postId;  // 帖子id
    private String communityName;  // 圈名
    private int followerCount;  // 圈子关注人数
    private String title;  // 帖子标题
    private String content;  // 帖子内容
    private int likeCount;  // 帖子点赞数
    private int posterId;  // 楼主id
    private Date createTime;  // 发帖时间

}
