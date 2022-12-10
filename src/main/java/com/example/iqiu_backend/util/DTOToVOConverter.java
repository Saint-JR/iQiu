package com.example.iqiu_backend.util;

import com.alibaba.fastjson.JSONArray;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.entity.Comment;
import com.example.iqiu_backend.vo.PostDetailVO;
import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class DTOToVOConverter {

//    DTOToVOConverter INSTANCES = Mappers.getMapper(DTOToVOConverter.class);
    public PostDetailVO toPostDetailVO(PostDetailDTO postDetailDTO) {
        if(postDetailDTO==null)
            return null;
        PostDetailVO postDetailVO=new PostDetailVO();
        postDetailVO.setPostId(postDetailDTO.getPostId());
        postDetailVO.setUserId(postDetailDTO.getPostId());
        postDetailVO.setUserName(postDetailDTO.getUserName());
        postDetailVO.setCreateTime(postDetailDTO.getCreateTime());
        postDetailVO.setLocation(postDetailDTO.getLocation());
        postDetailVO.setCommunityId(postDetailDTO.getCommunityId());
        postDetailVO.setCommunityName(postDetailDTO.getCommunityName());
        postDetailVO.setFollowerCount(postDetailDTO.getFollowerCount());
        postDetailVO.setTitle(postDetailDTO.getTitle());
        postDetailVO.setContent(postDetailDTO.getContent());
        postDetailVO.setPostType(postDetailDTO.getPostType());
        postDetailVO.setBallType(postDetailDTO.getBallType());
        postDetailVO.setPeopleCount(postDetailDTO.getPeopleCount());
        postDetailVO.setBallLocation(postDetailDTO.getBallLocation());
        postDetailVO.setCommentCount(postDetailDTO.getCommentCount());
        postDetailVO.setComment(JSONArray.parseArray(postDetailDTO.getComment(), Comment.class));
        return postDetailVO;
    }


}
