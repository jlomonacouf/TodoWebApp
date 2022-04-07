import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import { BACKEND_ADDRESS } from '../info.env';
import axios from "axios";

axios.defaults.baseURL = BACKEND_ADDRESS;

const app = createApp(App);

app.use(router);

app.mount("#app");
