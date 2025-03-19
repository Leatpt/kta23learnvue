<script setup>
import { onMounted, ref } from 'vue';

let {ctx} = defineProps(['ctx']);

onMounted(() => {
    setTimeout(() => {
        console.log(ctx);
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    },0);
});
</script>
<template>
</template>