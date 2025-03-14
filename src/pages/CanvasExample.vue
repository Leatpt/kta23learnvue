<script setup>
import { ref } from 'vue';
import CanvasBall from '../components/CanvasBall.vue';
import CanvasElement from '../components/CanvasElement.vue';
let ctx = ref(null);
function setCtx(ctx){
    console.log(ctx);
    ctx.value = ctx;
}

</script>
<template>
    <CanvasElement @ctx="setCtx">
        <CanvasBall :ctx="ctx"></CanvasBall>
    </CanvasElement>
</template>