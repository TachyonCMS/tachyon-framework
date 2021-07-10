import Vue from 'vue'
import App from './App.vue'

import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import router from './router'
import store from './store'

Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
