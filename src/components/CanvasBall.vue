<script setup>
import { onMounted } from 'vue';

let props = defineProps(['ctx']);

onMounted(() => {
    console.log(props);
    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();
});
</script>
<template>
</template>