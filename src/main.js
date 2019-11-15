// OLD
// import Vue from 'vue';
// import App from './App';
// import router from './router';

// // My imports
// // import '../src/js/demo4';
// // import '../src/js/imagesloaded.pkgd.min';


// new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App }
// })

// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './router';

// Imports library
import 'jquery';
import 'bootstrap';

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
