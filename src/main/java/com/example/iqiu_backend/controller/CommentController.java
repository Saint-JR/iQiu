package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.entity.Comment;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/insertComment")
    public Map<String, Integer> insertPost(@RequestBody Comment comment){
        Map<String, Integer> map=new HashMap<>();
        try {
            commentService.insertComment(comment);
        }catch (Exception e){
            System.out.println(e);
            map.put("code",-1);
            return map;
        }
        map.put("code",1);
        return map;
    }
}
