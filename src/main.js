import { createApp } from 'vue'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';



import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css'


const app = createApp(App)
app.use(PrimeVue);

app.component('Button', Button);
app.component('Checkbox', Checkbox);

app.mount("#app");