<script setup>
import { nextTick, onMounted, onUpdated, ref, watch } from 'vue';

let {ctx, x, y, draw, radius, color} = defineProps(['ctx', 'x', 'y', 'draw', 'radius', 'color']);

onMounted(() => {
    // nextTick(() => {
    //     ctx.beginPath();
    //     ctx.arc(x, y, 40, 0, 2 * Math.PI);
    //     ctx.fillStyle = 'red';
    //     ctx.fill();
    // });
});

onUpdated(() => {
    if(draw){
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
});

// watch(() => x, (x, oldX)=>{
//     ctx.clearRect(oldX-60,y-60,100,100);
// });
// watch(() => y, (y, oldY)=>{
//     ctx.clearRect(x-60,oldY-60,100,100);
// });
</script>
<template>
</template>