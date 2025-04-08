import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Nora from "@primeuix/themes/nora";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Nora,
  },
});

app.mount("#app");
