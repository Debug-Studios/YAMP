/* global TNS_ENV */
import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import App from './components/App.vue';

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

// Plugins
Vue.registerElement(
  'BottomNavigation',
  () => require('nativescript-bottom-navigation').BottomNavigation, //eslint-disable-line
);
Vue.registerElement(
  'BottomNavigationTab',
  () => require('nativescript-bottom-navigation').BottomNavigationTab, //eslint-disable-line
);

new Vue({
  render: h => h('frame', [h(App)]),
}).$start();
