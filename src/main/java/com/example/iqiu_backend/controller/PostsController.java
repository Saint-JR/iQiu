package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.PostDetailVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@Controller
@RequestMapping("/posts")
public class PostsController {
    @Autowired
    private PostService postService;

    @ResponseBody
    @RequestMapping("/getPostDetail/{postId}")
    public PostDetailVO getPostDetail(@PathVariable int postId){
        PostDetailVO postDetailVO = postService.postDetail(postId);
        return postDetailVO;
    }

}
