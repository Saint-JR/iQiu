package com.example.iqiu_backend.dao;

import com.example.iqiu_backend.vo.CommunityInfoVO;
import com.example.iqiu_backend.vo.FollowCommunitiesVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CommunityMapper {

    // 查询圈子总帖子数
    int selectPostsCountByCommunityId(@Param("communityId") int communityId);

    CommunityInfoVO selectCommunityById(@Param("communityId") int communityId);

    List<FollowCommunitiesVO> selectFollowCommunities(@Param("userId") int userId);

}
