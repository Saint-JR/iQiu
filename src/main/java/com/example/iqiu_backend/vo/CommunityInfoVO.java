package com.example.iqiu_backend.vo;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class CommunityInfoVO {
    private int communityId;
    private String communityName;  // 圈子名字
    private String communityAvatar;
    private int followerCount;  // 关注人数
    private int postsCount; //帖子数量
}
