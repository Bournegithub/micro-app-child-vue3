import './assets/main.css'
// import './public-path'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#vite-child-app')


window.unmount = () => {
	app.unmount();
}
