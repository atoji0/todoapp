<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (eventName: "add", newTaskTitle: string): void;
}>();

const newTaskTitle = ref("");

const addTask = () => {
  // テキストが1文字以上のとき、イベントを起こす。
  if (newTaskTitle.value.length > 0) {
    emit("add", newTaskTitle.value);
    newTaskTitle.value = "";
  }
};
</script>

<template>
  <form class="form-floating">
    <input v-model="newTaskTitle" type="text" class="form-control mt-4" placeholder="Add Task" @keydown.enter.prevent="addTask()" />
    <label>Add Task</label>
  </form>
</template>
