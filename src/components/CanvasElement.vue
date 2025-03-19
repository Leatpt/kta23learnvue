<script setup>
import { onMounted, ref, getCurrentInstance, useSlots } from 'vue';

let mycanvas = ref(null);
const slots = useSlots()
let ctx = ref(null);
onMounted(() => {
    ctx.value = mycanvas.value.getContext('2d');
    // slots.default()[0].props.ctx = ctx;
    // console.log(slots.default());
    
});
</script>
<template>
    <canvas ref="mycanvas" width="1280" height="960"></canvas>
    <slot :ctx="ctx"></slot>
</template>