<script setup>
defineProps(["cookie"]);
</script>
<template>
  <div
    class="cookie"
    :style="{
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }"
  >
    <img
      src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png"
      alt="Cookie"
      style="width: 80%; height: 80%"
    />
  </div>
</template>
