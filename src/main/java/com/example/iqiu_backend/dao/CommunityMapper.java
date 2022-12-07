package com.example.iqiu_backend.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CommunityMapper {

    // 查询圈子总帖子数
    int selectPostsCountByCommunityId(@Param("communityId") int communityId);

}
