<script setup lang="ts">
import todoService from "../services/TodoService";
import TaskAdd from "../components/TaskAdd.vue";
import TaskList from "../components/TaskList.vue";

// taskをすべて取得する。
todoService.getAllTasks();
</script>

<template>
  <h1 class="mt-4">Todo List</h1>
  <div class="row">
    <div class="col-xl-6 col-md-6">
      <TaskAdd @add="(newTaskTitle) => todoService.addTask(newTaskTitle)"></TaskAdd>
      <TaskList :tasks="todoService.todoTasks" @delete="(id) => todoService.deleteTask(id)" @done="(id) => todoService.doneTask(id)"></TaskList>
    </div>
  </div>
</template>
