<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, watch } from 'vue';
let props = defineProps(['zoom', 'center']);
let map = null;
onMounted(() => {
    map = L.map('map').setView([props.center.lat, props.center.lng], props.zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

watch(() => props.zoom, (zoom, oldZoom)=>{
    map.setZoom(zoom);
});
watch(() => props.center, (center)=>{
    map.panTo(center);
});
</script>

<template>
    <div id="map"></div>
</template>
<style scoped>
#map { height: 800px; }
</style>