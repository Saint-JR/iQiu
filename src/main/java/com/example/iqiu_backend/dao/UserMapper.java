package com.example.iqiu_backend.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    // 根据用户id查询用户名
    String selectUsernameByUserId(@Param("userId") int userId);

}
