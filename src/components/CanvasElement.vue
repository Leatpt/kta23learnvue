<script setup>
import { onMounted, ref, getCurrentInstance, useSlots } from 'vue';
let emit = defineEmits(['ctx'])
let mycanvas = ref(null);
const slots = useSlots()

onMounted(() => {
    let ctx = mycanvas.value.getContext('2d');
    slots.default()[0].props.ctx
    
});
</script>
<template>
    <canvas ref="mycanvas" width="1280" height="960"></canvas>
    <slot></slot>
</template>