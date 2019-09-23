import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import messages from "./i18.js"
import {Input,Button} from 'element-ui';
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueLazyload)
Vue.use(Vuex)
Vue.use(Input);
Vue.use(Button);

const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages, // 设置地区信息
})
const store = new Vuex.Store({
  state: {
    isShow:true,
    i18n:{
      menuCommunity:i18n.t('message.menuCommunity'),
      menuProduct:i18n.t('message.menuProduct'),
      menuWhitePaper: i18n.t('message.menuWhitePaper'),
      selectPlaceholder:i18n.t('message.selectPlaceholder'),
      introduction:i18n.t('message.introduction'),
      networkImg:i18n.t('message.networkImg'),
      notice:i18n.t('message.notice'),
      networkWidth:i18n.t('message.networkWidth'),
      noticeWidth:i18n.t('message.noticeWidth'),
      noticeTitle:i18n.t('message.noticeTitle'),
      noticeConect:i18n.t('message.noticeConect')
    }
  },
  mutations: {
    increment (state,obj) {
      state.i18n=obj
    },
    switchPage (state,bool) {
      state.isShow=bool;
    }
  }
})
new Vue({
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
