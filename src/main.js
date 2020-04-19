import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import TelegramIcon from 'vue-material-design-icons/Telegram.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import WhatsappIcon from 'vue-material-design-icons/Whatsapp.vue';
import EmailOutlineIcon from 'vue-material-design-icons/Emailoutline.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import AccountIcon from 'vue-material-design-icons/AccountOutline.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'


Vue.component('menu-icon', MenuIcon);
Vue.component('close-icon', CloseIcon);
Vue.component('telegram-icon', TelegramIcon);
Vue.component('instagram-icon', InstagramIcon);
Vue.component('whatsapp-icon', WhatsappIcon);
Vue.component('email-outline-icon', EmailOutlineIcon);
Vue.component('phone-icon', PhoneIcon);
Vue.component('account-icon', AccountIcon);
Vue.component('plus-icon', PlusIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
      document.dispatchEvent(new Event('render-event'))
  },  
  el: '#app',
  render: h => h(App)
})
