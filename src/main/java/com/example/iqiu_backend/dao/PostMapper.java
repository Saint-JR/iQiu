package com.example.iqiu_backend.dao;

import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.dto.PostsAndCommunityDTO;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.vo.PostDetailVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {

    List<PostsAndCommunityDTO> selectPosts(@Param("offset")int offset, @Param("limit")int limit);

    // 根据帖子id查询帖子所在圈子的id
    int selectCommunityIdByPostsId(@Param("postsId") int postsId);

    int insertPost(Posts post); //插入闲聊贴

    PostDetailDTO selectPostDetail(@Param("postId") int postId);

}