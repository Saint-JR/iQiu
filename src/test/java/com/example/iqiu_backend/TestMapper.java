package com.example.iqiu_backend;

import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.dto.PostsAndCommunityDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = IQiuBackEndApplication.class)
public class TestMapper {

    @Autowired
    private PostMapper postMapper;

    @Test
    public void testMapper0() {
        List<PostsAndCommunityDTO> posts = postMapper.selectPosts(0, 15);
        System.out.println(posts);
    }
}
