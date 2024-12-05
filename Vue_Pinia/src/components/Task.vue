<template>
  <div class="task">
    <p>{{ task.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
/* Add styles if needed */
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
