package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.service.CommunityService;
import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.CommunityInfoVO;
import com.example.iqiu_backend.vo.FollowCommunitiesVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/community")
public class CommunityController {
    @Autowired
    private CommunityService communityService;

    @RequestMapping("/getCommunityInfo/{communityId}")
    public CommunityInfoVO getCommunityInfo(@PathVariable int communityId){
        return communityService.getCommunityInfo(communityId);
    }

    @RequestMapping("/getFollowCommunity/{userId}")
    public List<FollowCommunitiesVO> getFollowCommunity (@PathVariable int userId){
        return communityService.getFollowCommunity(userId);
    }
}
