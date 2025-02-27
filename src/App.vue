<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  let button = document.querySelector('#btn');
  let count = document.querySelector('#count');
  let i = 0;
  count.innerHTML = i;
  button.addEventListener('click', () => {
    i++;
    count.innerHTML = i;
  });
});

</script>

<template>
  <div class="container content section">
    <button id="btn" class="button is-primary">Click me</button>
    <h1 id="count"></h1>
  </div>
</template>

<style scoped>

</style>
