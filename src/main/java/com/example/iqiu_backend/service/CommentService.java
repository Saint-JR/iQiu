package com.example.iqiu_backend.service;

import com.example.iqiu_backend.dao.CommentMapper;
import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.entity.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private PostMapper postMapper;

    public void insertComment(Comment comment){
        commentMapper.insertComment(comment);
        postMapper.updatePostComment(comment.getPostId(),comment.getCreateTime());
    }
}
