import './assets/main.css'
import 'material-icons/iconfont/material-icons.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {createApp} from 'vue'
import App from "@/App.vue";
import router from "@/router/index.js";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');
