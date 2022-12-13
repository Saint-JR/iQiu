package com.example.iqiu_backend.util;

import com.alibaba.fastjson.JSONArray;
import com.example.iqiu_backend.dto.PostCommentDTO;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.entity.Comment;
import com.example.iqiu_backend.vo.PostCommentVO;
import com.example.iqiu_backend.vo.PostDetailVO;
import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        postDetailVO.setUserAvatar(postDetailDTO.getUserAvatar());
        postDetailVO.setCreateTime(postDetailDTO.getCreateTime());
        postDetailVO.setLocation(postDetailDTO.getLocation());
        postDetailVO.setCommunityId(postDetailDTO.getCommunityId());
        postDetailVO.setCommunityName(postDetailDTO.getCommunityName());
        postDetailVO.setCommunityAvatar(postDetailDTO.getCommunityAvatar());
        postDetailVO.setFollowerCount(postDetailDTO.getFollowerCount());
        postDetailVO.setPostTitle(postDetailDTO.getPostTitle());
        postDetailVO.setPostContent(postDetailDTO.getPostContent());
        postDetailVO.setPostType(postDetailDTO.getPostType());
        postDetailVO.setBallType(postDetailDTO.getBallType());
        postDetailVO.setPeopleCount(postDetailDTO.getPeopleCount());
        postDetailVO.setBallLocation(postDetailDTO.getBallLocation());
        postDetailVO.setCommentCount(postDetailDTO.getCommentCount());
        postDetailVO.setComment(postDetailDTO.getCommentCount()!=0?
                toPostCommentVO(JSONArray.parseArray(postDetailDTO.getComment(), PostCommentDTO.class))
                :null
        );
        return postDetailVO;
    }

    public List<PostCommentVO> toPostCommentVO(List<PostCommentDTO> postCommentDTOS){
        List<PostCommentVO> postCommentVOS=new ArrayList<>();
        int order=1;
        for (PostCommentDTO postCommentDTO:postCommentDTOS) {
            PostCommentVO postCommentVO=new PostCommentVO();
            postCommentVO.setCommentId(postCommentDTO.getCommentId());
            postCommentVO.setCommentUserId(postCommentDTO.getCommentUserId());
            postCommentVO.setCommentUserName(postCommentDTO.getCommentUserName());
            postCommentVO.setCommentUserAvatar(postCommentDTO.getCommentUserAvatar());
            postCommentVO.setCommentLocation(postCommentDTO.getCommentLocation());
            postCommentVO.setCommentType(postCommentDTO.getCommentType());
            postCommentVO.setCommentContent(postCommentDTO.getCommentContent());
            postCommentVO.setCommentCreateTime(postCommentDTO.getCommentCreateTime());
            postCommentVO.setOrderId(order);
            postCommentVOS.add(postCommentVO);
            order++;
        }
        return postCommentVOS;

    }

}
