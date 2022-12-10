package com.example.iqiu_backend.service;

import com.example.iqiu_backend.dao.CommunityMapper;
import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.dao.UserMapper;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.dto.PostsAndCommunityDTO;
import com.example.iqiu_backend.util.DTOToVOConverter;
import com.example.iqiu_backend.vo.PostDetailVO;
import com.example.iqiu_backend.vo.PostsAndCommunityVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostMapper postMapper;
    @Autowired
    private CommunityMapper communityMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DTOToVOConverter dtoToVOConverter;

    public List<PostsAndCommunityVO> listPosts(int offset, int limit) {
        List<PostsAndCommunityVO> postsAndCommunityVOS = new ArrayList<>();
        List<PostsAndCommunityDTO> postsAndCommunityDTOS = postMapper.selectPosts(offset, limit);
        for (PostsAndCommunityDTO postAndCommunityDTO : postsAndCommunityDTOS) {
            postsAndCommunityVOS.add(new PostsAndCommunityVO(
                    postAndCommunityDTO.getPostId(),
                    null,
                    postAndCommunityDTO.getCommunityName(),
                    postAndCommunityDTO.getFollowerCount(),
                    // 圈子总帖子数
                    communityMapper.selectPostsCountByCommunityId(postMapper.selectCommunityIdByPostsId(postAndCommunityDTO.getPostId())),
                    postAndCommunityDTO.getTitle(),
                    postAndCommunityDTO.getContent(),
                    postAndCommunityDTO.getLikeCount(),
                    // 楼主用户名
                    userMapper.selectUsernameByUserId(postAndCommunityDTO.getPosterId()),
                    postAndCommunityDTO.getPosterId(),
                    null,
                    postAndCommunityDTO.getCreateTime()));
        }
        return postsAndCommunityVOS;
    }

    public PostDetailVO postDetail(int postId){
        PostDetailDTO postDetailDTO=postMapper.selectPostDetail(postId);
        PostDetailVO postDetailVO=dtoToVOConverter.toPostDetailVO(postDetailDTO);
        return postDetailVO;
    }

}
