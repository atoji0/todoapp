package com.example.todoapp.entity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Todo {
    @Id
    private Long id;

    @NotBlank
    @Size(min = 1, max = 20)
    private String title;

    @NotNull
    private Boolean done;
}
