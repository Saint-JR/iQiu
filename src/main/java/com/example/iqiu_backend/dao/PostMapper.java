package com.example.iqiu_backend.dao;

import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.vo.CommunityPostsVO;
import com.example.iqiu_backend.vo.HomePostsVO;
import com.example.iqiu_backend.vo.MyPostsVO;
import com.example.iqiu_backend.vo.PostDetailVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

@Mapper
public interface PostMapper {

    //homepage的帖子列表
    List<HomePostsVO> selectHomePosts();

    //mypage的帖子列表
    List<MyPostsVO> selectMyPosts(@Param("userId") int userId);

    //communitypage的帖子列表
    List<CommunityPostsVO> selectCommunityPosts(@Param("communityId") int communityId);

    // 根据帖子id查询帖子所在圈子的id
    int selectCommunityIdByPostsId(@Param("postsId") int postsId);

    int insertPost(@Param("post") Posts post); //插入帖子
    void addPostCount(@Param("userId") int userId,@Param("communityId") int communityId);//更新圈子和个人的帖子数

    PostDetailDTO selectPostDetail(@Param("postId") int postId);//查看帖子详情

    void updatePostComment(@Param("postId") int postId, @Param("lastCommentTime") Date lastCommentTime);

}
