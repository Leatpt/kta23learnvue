import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { createRouter, createWebHistory } from 'vue-router';

import ChuckNorris from './pages/ChuckNorris.vue';
import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import CanvasExample from './pages/CanvasExample.vue';
import MapsExample from './pages/MapsExample.vue';
import CookieClicker from './pages/CookieClicker.vue';
import Chat from './pages/Chat.vue';
import WebApis from './pages/WebApis.vue';

const routes = [
  { path: '/', component: Modals, name: 'Modals' },
  { path: '/todo', component: ToDo, name: 'ToDo' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty' },
  { path: '/canvas', component: CanvasExample, name: 'Canvas', meta: { container: false } },
  { path: '/maps', component: MapsExample, name: 'Maps', meta: { container: false } },
  { path: '/cookieclicker', component: CookieClicker, name: 'Cookie Clicker', meta: { container: false } },
  { path: '/chat', component: Chat, name: 'Chat' },
  { path: '/webapis', component: WebApis, name: 'WebApis' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#root');

if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered', registration);
    }).catch(error => {
      console.log('SW register failed', error);
    });
  });
}