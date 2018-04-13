import Vue from 'vue';
import VueRouter from 'vue-router' ;
import VueI18n from 'vue-i18n'
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';
import commonUtil from './util/util.js';

Vue.use(commonUtil);

Vue.use(VueRouter);
const router = new VueRouter(require('./router'))
Vue.use(ElementUI);

//将axios改写为Vue原型链，在其他组件中才可以使用
Vue.prototype.axios = axios;

Vue.use(VueI18n)
import messages from './i18n/i18n';

const Language = window.navigator.language.split("-")[0];
const i18n = new VueI18n({
  locale: Language,    // 语言标识
  messages
});


new Vue({
    el: '#app',
    i18n,
    router: router,
    render: h => h(App),
    data:{
      Bus:new Vue()
    }
})  