package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/posts")
public class PostsController {
    @Autowired
    private PostService postService;

    @RequestMapping("/getPostDetail/{postId}")
    public PostDetailVO getPostDetail(@PathVariable int postId){
        return postService.postDetail(postId);
    }

    @RequestMapping("/getHomePosts")
    public List<HomePostsVO> getHomePosts(){
        return postService.getHomePosts();
    }

    @RequestMapping("/getMyPosts/{userId}")
    public List<MyPostsVO> getMyPosts(@PathVariable int userId){
        return postService.getMyPosts(userId);
    }

    @RequestMapping("/getCommunityPosts/{communityId}")
    public List<CommunityPostsVO> getCommunityPosts(@PathVariable int communityId){
        return postService.getCommunityPosts(communityId);
    }

    @PostMapping("/insertPost")
    public Map<String, Integer> insertPost(@RequestBody Posts post){
        Map<String, Integer> map=new HashMap<>();
        try {
            postService.insertPost(post);
        }catch (Exception e){
            System.out.println(e);
            map.put("code",-1);
            return map;
        }
        map.put("code",1);
        return map;
    }
}
