<script setup>
import CanvasBall from '../components/CanvasBall.vue';
import CanvasElement from '../components/CanvasElement.vue';


</script>
<template>
    <CanvasElement v-slot="{ctx}">

        <CanvasBall :ctx="ctx"></CanvasBall>
    </CanvasElement>
</template>