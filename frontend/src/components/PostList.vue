<template>
  <div class="postList">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped>
.postList {
  display: grid;
  grid-template-columns: 0.7fr 0.7fr;
  gap: 48px;
}
</style>
