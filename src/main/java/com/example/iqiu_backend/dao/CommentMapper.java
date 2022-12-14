package com.example.iqiu_backend.dao;

import com.example.iqiu_backend.entity.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CommentMapper {
    void insertComment(@Param("comment") Comment comment);
}
