// Import Vue
import Vue from 'vue';

// Import Vue App, routes, store
import App from './App';
import { router } from './router';
import { store } from './store'

// Imports library
import 'jquery';
import 'bootstrap';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
