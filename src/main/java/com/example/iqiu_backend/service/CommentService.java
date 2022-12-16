package com.example.iqiu_backend.service;

import com.example.iqiu_backend.dao.CommentMapper;
import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.entity.Comment;
import com.example.iqiu_backend.vo.PostCommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private PostMapper postMapper;

    public PostCommentVO insertComment(Comment comment){
        commentMapper.insertComment(comment);
        PostCommentVO resComment= commentMapper.selectCommentById(comment.getId());
        postMapper.updatePostComment(comment.getPostId(),comment.getCreateTime());
        return resComment;
    }
}
