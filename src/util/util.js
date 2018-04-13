import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../i18n/i18n';

Vue.use(VueI18n)

const Language = window.navigator.language.split("-")[0];
const i18n = new VueI18n({
  locale: Language,    // 语言标识
  messages
});

export default{
	//引用vue
	install(vue){
		vue.prototype.commonUtil = this;
	},

	test(param){
		alert(param);
	}
}