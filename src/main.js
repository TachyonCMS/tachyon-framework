import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import router from './router'

import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
