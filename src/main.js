// js imports
import Vue from 'vue';
// import ComponentTest from './ComponentTest.vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';

// css imports
import './styles/main.scss';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: createElement => createElement(App),
}).$mount('#app')
