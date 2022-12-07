package com.example.iqiu_backend.util;

import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public class EntityToDTOConverter {

    EntityToDTOConverter INSTANCE = Mappers.getMapper(EntityToDTOConverter.class);


}
