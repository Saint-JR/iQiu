package com.example.iqiu_backend.service;

import com.example.iqiu_backend.dao.CommunityMapper;
import com.example.iqiu_backend.vo.CommunityInfoVO;
import com.example.iqiu_backend.vo.FollowCommunitiesVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityService {
    @Autowired
    private CommunityMapper communityMapper;

    public CommunityInfoVO getCommunityInfo(int communityId){
        return communityMapper.selectCommunityById(communityId);
    }

    public List<FollowCommunitiesVO> getFollowCommunity(int userId){
        return communityMapper.selectFollowCommunities(userId);
    }
}
