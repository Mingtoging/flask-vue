import Vue from 'vue';
import router from '@/router/index';
// 사용자 정의 페이지 관련 함수
import page from '@/plugins/page';
// 사용자 정의 다이얼로그 관련 함수
import dialog from '@/plugins/dialog';
// 버튼 전역 컴포넌트
import Button from '@/components/common/Button';

// 사용자 정의 함수
import common from '@/plugins/common';
import App from './App.vue';

import vuetify from './plugins/vuetify';

// 사용자 정의 페이지 함수 사용 설정
Vue.use(page);
// 사용자 정의 다이얼로그 함수 사용 설정
Vue.use(dialog);

// 사용자 정의 함수 사용 설정
Vue.use(common);

// 버튼 전역 컴포넌트 선언
Vue.component('Button', Button);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
/* import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
*/
