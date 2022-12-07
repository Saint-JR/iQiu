package com.example.iqiu_backend.util;

import com.example.iqiu_backend.dto.PostsAndCommunityDTO;
import com.example.iqiu_backend.entity.Community;
import com.example.iqiu_backend.entity.Posts;
import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public class EntityToDTOConverter {

    EntityToDTOConverter INSTANCES = Mappers.getMapper(EntityToDTOConverter.class);

    public PostsAndCommunityDTO toPostsAndCommunityDTO(Posts posts, Community community) {
        if (posts == null || community == null) {
            return null;
        }
        PostsAndCommunityDTO postsAndCommunityDTO = new PostsAndCommunityDTO();

        postsAndCommunityDTO.setPostId(posts.getId());
        postsAndCommunityDTO.setFollowerCount(community.getFollowerCount());
        postsAndCommunityDTO.setTitle(posts.getTitle());
        postsAndCommunityDTO.setContent(posts.getContent());
        postsAndCommunityDTO.setLikeCount(posts.getLikeCount());
        postsAndCommunityDTO.setPosterId(posts.getPosterId());
        postsAndCommunityDTO.setCreateTime(posts.getCreateTime());

        return postsAndCommunityDTO;
    }


}
