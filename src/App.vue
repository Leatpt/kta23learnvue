<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

let titles = ['Home', 'About', 'Contacts'];
let contents = [
    'Home page is cool',
    'About page is cool',
    'Contacts page is cool',
];
let activeTab = ref(0);
function tabChanged(key){
    activeTab.value = key;
}

</script>

<template>
    <Tabs :items="titles" @change="tabChanged"></Tabs>
    <div class="container section content">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>