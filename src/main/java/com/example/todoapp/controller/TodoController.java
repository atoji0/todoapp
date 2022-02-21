package com.example.todoapp.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.todoapp.entity.Todo;
import com.example.todoapp.repository.TodoRepository;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
public class TodoController {

    private final TodoRepository todoRepository;

    @GetMapping
    List<Todo> getAll() {
        return todoRepository.findAll();
    }

    @GetMapping("{id}")
    Todo get(@PathVariable("id") Long id) {
        return todoRepository.findById(id).get();
    }

    @PostMapping
    Todo insert(@Validated @RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable("id") Long id) {
        todoRepository.deleteById(id);
    }
}
