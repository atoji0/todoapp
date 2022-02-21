package com.example.todoapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.todoapp.entity.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    /** 全件取得 */
    List<Todo> findAll();
}
