<script setup lang="ts">
import { Task } from "../models/Task";

defineProps<{ tasks: Task[] }>();

const emit = defineEmits<{
  (eventName: "done", id?: number): void;
  (eventName: "delete", id?: number): void;
}>();
</script>

<template>
  <table class="table table-striped align-middle mt-4">
    <thead>
      <tr>
        <th scope="col" width="50">#</th>
        <th scope="col" width="600">Task</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(task, index) in tasks" :key="index">
        <tr :class="{ 'table-primary': task.done }">
          <td>
            <input class="form-check-input" type="checkbox" :checked="task.done" @click="emit('done', task.id)" />
          </td>
          <td>
            <label v-if="task.done" class="form-check-label">
              <del>{{ task.title }}</del>
            </label>
            <label v-else class="form-check-label">
              {{ task.title }}
            </label>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="emit('delete', task.id)"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
