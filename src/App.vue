<script setup>
import { ref } from "vue";
let count = ref(0);

</script>

<template>
  <div class="container content section">
    <button class="button is-primary" @click="count++">Click me</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<style scoped>

</style>
