package com.example.iqiu_backend.controller;

import com.example.iqiu_backend.service.UserService;
import com.example.iqiu_backend.util.UploadPic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UserService userService;

    @Autowired
    private UploadPic uploadUtils;

    @ResponseBody
    @PostMapping("/uploadAvatar")
    public String UploadPicture(@RequestParam("file") MultipartFile file,@RequestParam("userId") String userId) throws IOException {
        String path= uploadUtils.uploadPic(file,userId,0);
        System.out.println(path);
        return path!=null?"添加成功":"添加失败";
    }

}
