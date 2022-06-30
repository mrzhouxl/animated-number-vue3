import { createApp } from 'vue'
import App from './App.vue'
import AnimatedNumber from 'animated-number-vue3'

const app = createApp(App)
app.use(AnimatedNumber)
app.mount('#app')
