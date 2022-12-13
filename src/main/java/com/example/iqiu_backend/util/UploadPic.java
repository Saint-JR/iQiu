package com.example.iqiu_backend.util;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class UploadPic {
    //上传图片工具函数 type:0-user上传图片,1-community上传图片
    public String uploadPic(MultipartFile file,String id,int type) throws IOException {
        if(file.isEmpty()){
            return null;
        }
        //当前程序路径
        String currentPath=System.getProperty("user.dir");
        String dirType=type==0?"users/":"community/";
//        String currentPath="src/main/resources/static/";
        // 上传文件/图像到指定文件夹（这里可以改成你想存放地址的相对路径）
        File savePos = new File(currentPath+dirType+id);
        if(!savePos.exists()){  // 不存在，则创建该文件夹
            savePos.mkdirs();
        }
        // 获取存放位置的规范路径
        String realPath = savePos.getCanonicalPath()+"/"+file.getOriginalFilename();
        // 上传该文件/图像至该文件夹下
        file.transferTo(new File(realPath));
        return realPath;
    }
}
