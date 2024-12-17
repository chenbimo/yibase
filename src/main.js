// #region 区域
import App from '@/App.vue';
// #endregion
const $App = createApp(App);
const $Pinia = createPinia();

$App.use($Router);
$App.use($Pinia);
$App.use($I18n);

$App.mount('#app');
