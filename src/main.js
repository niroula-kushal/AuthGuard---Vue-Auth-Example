import {createApp} from 'vue'
import App from './App.vue'
import router from './router.js'

import './index.css'
import {Initialize} from "./auth/AuthHandler";

Initialize();

const app = createApp(App);
app.use(router);
app.mount('#app')    
