package com.example.iqiu_backend.entity;

import lombok.*;

import java.io.Serializable;

/**
 * 用户实体类
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class User implements Serializable {

    private static final Long serialVersionUID = 1L;
    private Long id;
    private String username;
    private String password;


}
