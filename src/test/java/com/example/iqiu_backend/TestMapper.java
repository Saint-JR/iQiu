package com.example.iqiu_backend;

import com.example.iqiu_backend.dao.CommentMapper;
import com.example.iqiu_backend.dao.CommunityMapper;
import com.example.iqiu_backend.dao.PostMapper;
import com.example.iqiu_backend.dao.UserMapper;
import com.example.iqiu_backend.dto.PostDetailDTO;
import com.example.iqiu_backend.entity.Comment;
import com.example.iqiu_backend.entity.Posts;
import com.example.iqiu_backend.service.CommentService;
import com.example.iqiu_backend.service.PostService;
import com.example.iqiu_backend.vo.*;
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
    private CommunityMapper communityMapper;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;

    @Test
    public void testMapper0() {
        List<HomePostsVO> posts = postMapper.selectHomePosts();
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
        PostDetailVO postDetailVO=postService.postDetail(1);
        System.out.println(postDetailVO);
    }

    @Test
    public  void testMapper4(){
        System.out.println(System.getProperty("user.dir"));

    }

    @Test
    public void testMapper5() {
        List<MyPostsVO> posts = postMapper.selectMyPosts(1);
        System.out.println(posts);
    }

    @Test
    public void testMapper6() {
        CommunityInfoVO communityInfoVO = communityMapper.selectCommunityById(1);
        System.out.println(communityInfoVO);
    }

    @Test
    public void testMapper7() {
        List<CommunityPostsVO> communityInfoVO= postMapper.selectCommunityPosts(1);
        System.out.println(communityInfoVO);
    }

    @Test
    public void testMapper8() {
        postMapper.addPostCount(1,1);
    }

    @Test
    public void testMapper9() {
        commentMapper.insertComment(new Comment(1,1,0,0,30,"1",new Date(),0,"[]"));
    }

    @Test
    public void testMapper10() {
        commentService.insertComment(new Comment(1,1,0,0,30,"1",new Date(),0,"[]"));
    }

}
