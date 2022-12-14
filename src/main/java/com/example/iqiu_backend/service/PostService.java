package com.example.iqiu_backend.service;

import com.example.iqiu_backend.dao.CommunityMapper;
import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.dao.UserMapper;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.util.DTOToVOConverter;
import com.example.iqiu_backend.vo.CommunityPostsVO;
import com.example.iqiu_backend.vo.MyPostsVO;
import com.example.iqiu_backend.vo.PostDetailVO;
import com.example.iqiu_backend.vo.HomePostsVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostMapper postMapper;
    @Autowired
    private CommunityMapper communityMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DTOToVOConverter dtoToVOConverter;

    public List<HomePostsVO> getHomePosts() {
        List<HomePostsVO> homePostsVOS = postMapper.selectHomePosts();
        return homePostsVOS;
    }

    public List<MyPostsVO> getMyPosts(int userId) {
        List<MyPostsVO> myPostsVOS = postMapper.selectMyPosts(userId);
        return myPostsVOS;
    }

    public List<CommunityPostsVO> getCommunityPosts(int communityId) {
        List<CommunityPostsVO> communityPostsVOS = postMapper.selectCommunityPosts(communityId);
        return communityPostsVOS;
    }

    public PostDetailVO postDetail(int postId){
        PostDetailDTO postDetailDTO=postMapper.selectPostDetail(postId);
        return dtoToVOConverter.toPostDetailVO(postDetailDTO);
    }

    public void insertPost(Posts post){
        postMapper.insertPost(post);
        postMapper.addPostCount(post.getPosterId(),post.getCommunityId());
    }

}
