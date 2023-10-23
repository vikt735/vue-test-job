import { createApp } from 'vue';
import App from './App.vue';
import components from './components';
import directives from './directives';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(components);
app.use(directives);
app.use(store).use(router).mount('#app');
