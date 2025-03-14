<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

const zoom = ref(13);
const center = ref({lat: 59.42684, lng:24.74345})
</script>

<template>
    <button class="button is-primary" @click="center={lat: 59.41168443184372, lng:24.60720352311295}">Go to Home</button>
    <input type="range" v-model="zoom" min="0" max="20">{{ zoom }}
    <LeafletMap :zoom="zoom" :center="center"></LeafletMap>
</template>
