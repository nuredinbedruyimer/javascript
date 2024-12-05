<template>
  <main>
    <header>
      <div>
        <p>Pinia Task Manegment</p>
      </div>
    </header>
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id">
        <Task :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useTaskStore } from "./stores/taskStore";
import Task from "./components/Task.vue";

const taskStore = useTaskStore();

const tasks = computed(() => taskStore.tasks);
</script>

<style lang="css" scoped></style>
