package com.example.iqiu_backend.util;

import com.example.iqiu_backend.entity.Community;
import com.example.iqiu_backend.entity.Posts;
import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public class EntityToDTOConverter {

    EntityToDTOConverter INSTANCES = Mappers.getMapper(EntityToDTOConverter.class);

    


}
