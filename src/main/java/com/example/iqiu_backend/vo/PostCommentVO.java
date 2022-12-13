package com.example.iqiu_backend.vo;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class PostCommentVO {
    private int commentId;
    private int orderId;    //楼层顺序号
    private int commentUserId;  // 发布评论的用户的id
    private String commentUserName; //发布评论用户的用户名
    private String commentUserAvatar; //发布评论用户的用户头像
    private String commentLocation; //发布评论的用户地点
    private int commentType;  // 评论类型: 0-回帖; 1-回复评论
//    private int originCommentId;  // 如果是回复评论, 则表示所回复的那条评论的id; 否则为空
    private String commentContent; // 评论内容
    private String commentCreateTime;  // 评论发布时间
//    private int likeCount=0;  // 评论的点赞数
//    private String likeUsers="";  // 为评论点赞的用户id的字符串
}
