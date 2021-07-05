import { createApp } from 'vue'
import App from './App.vue'

import infiniteScroll from '../packages/index'

let app = createApp(App)
app.use(infiniteScroll)
// app.use(GjfIcon)
app.mount('#app')