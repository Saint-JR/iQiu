package com.example.iqiu_backend.entity;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户实体类
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class User implements Serializable {

    private static final Long serialVersionUID = 1L;
    private int id;
    private String username;
    private String avatar;
    private String password;
    private Date registerDate;  // 用户注册时间
    private int gender;  // 性别：0-未选择;1-男;2-女
    private String signature;  // 个性签名
    private String location;  // 用户所在地
    private String phoneNumber;  // 用户手机号码
    private int postCount; //用户发帖数
    private String followCommunity;  // 用户关注的圈子id字符串
    private String follower;  // 用户关注的用户id字符串
    private String fans;  // 用户粉丝的用户id字符串

}
