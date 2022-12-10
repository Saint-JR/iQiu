package com.example.iqiu_backend;

import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.dto.PostsAndCommunityDTO;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.PostDetailVO;
import javafx.geometry.Pos;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = IQiuBackEndApplication.class)
public class TestMapper {

    @Autowired
    private PostMapper postMapper;

    @Autowired
    private PostService postService;

    @Test
    public void testMapper0() {
        List<PostsAndCommunityDTO> posts = postMapper.selectPosts(0, 15);
        System.out.println(posts);
    }

    @Test
    public void testMapper1() {
        Posts posts=new Posts();
//        posts.setId(1);
        posts.setPosterId(1);
        posts.setTitle("111111");
        posts.setContent("content111");
        posts.setPostType(0);
        posts.setCreateTime(new Date());
        posts.setCommunityId(1);
        posts.setLikeCount(0);
        posts.setLikeUsers("0");
        postMapper.insertPost(posts);
        System.out.println(posts.getId());
    }

    @Test
    public  void testMapper2(){
        PostDetailDTO postDetailDTO= postMapper.selectPostDetail(24);
        System.out.println(postDetailDTO);

    }

    @Test
    public  void testMapper3(){
        PostDetailVO postDetailVO=postService.postDetail(24);

    }


}
