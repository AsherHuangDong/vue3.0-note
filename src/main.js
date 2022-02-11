import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App);
app.directive('directive1', () => {
    console.log('my-directive1');
});
app.mount('#app');

