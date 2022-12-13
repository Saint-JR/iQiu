package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.CommunityPostsVO;
import com.example.iqiu_backend.vo.MyPostsVO;
import com.example.iqiu_backend.vo.PostDetailVO;
import com.example.iqiu_backend.vo.HomePostsVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostsController {
    @Autowired
    private PostService postService;

    @RequestMapping("/getPostDetail/{postId}")
    public PostDetailVO getPostDetail(@PathVariable int postId){
        return postService.postDetail(postId);
    }

    @RequestMapping("/getHomePosts/{offset}/{limit}")
    public List<HomePostsVO> getHomePosts(@PathVariable int offset, @PathVariable int limit){
        return postService.getHomePosts(offset,limit);
    }

    @RequestMapping("/getMyPosts/{userId}/{offset}/{limit}")
    public List<MyPostsVO> getMyPosts(@PathVariable int userId,@PathVariable int offset, @PathVariable int limit){
        return postService.getMyPosts(userId,offset,limit);
    }

    @RequestMapping("/getCommunityPosts/{communityId}/{offset}/{limit}")
    public List<CommunityPostsVO> getCommunityPosts(@PathVariable int communityId, @PathVariable int offset, @PathVariable int limit){
        return postService.getCommunityPosts(communityId,offset,limit);
    }
}
