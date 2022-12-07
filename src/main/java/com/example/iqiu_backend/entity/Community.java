package com.example.iqiu_backend.entity;

import lombok.*;

import java.util.Date;

/**
 * 圈子实体类
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Community {

    private int id;
    private String communityName;  // 圈子名字
    private int followerCount;  // 关注人数
    private Date createTime;  // 圈子创建时间

}
