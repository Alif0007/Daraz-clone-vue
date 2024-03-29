import './assets/main.css'
import VueCountdown from '@chenfengyuan/vue-countdown';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.component(VueCountdown.name, VueCountdown);


app.use(createPinia())
app.use(router)

app.mount('#app')
