<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';
let coords = ref(null);
function vibrate() {
    if (window.navigator?.vibrate) {
        navigator.vibrate(200);
    }
}
function starwars() {
    if (window.navigator?.vibrate) {
        navigator.vibrate([500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]);
    }
}
function geoLocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(event => {
            console.log(event);
            coords.value = {lat: event.coords.latitude, lng: event.coords.longitude};
        }, err => {
            console.log(err);
        });
    }
}

function setBadge(){
    navigator.setAppBadge(100);
}

function notificationRequest(){
    Notification.requestPermission().then((result) => {
        console.log(result);
    });
}
function sendNotification(){
    new Notification('Hello');
}
</script>

<template>
    <button class="button is-primary" @click="vibrate">Vibrate</button>
    <button class="button is-primary" @click="starwars">StarWars</button>
    <button class="button is-primary" @click="geoLocate">geoLocate</button>
    <button class="button is-primary" @click="setBadge">set badge</button>
    <button class="button is-primary" @click="notificationRequest">Notification</button>
    <button class="button is-primary" @click="sendNotification">send notification</button>
    <LeafletMap v-if="coords" :zoom="17" :center="coords"></LeafletMap>
</template>