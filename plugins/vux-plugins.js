import Vue from 'vue'
import { BusPlugin, TransferDom, WechatPlugin, DatetimePlugin, LoadingPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, AjaxPlugin, md5 } from 'vux'

Vue.prototype.$md5 = md5
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)
Vue.use(BusPlugin)
Vue.use(AjaxPlugin)
Vue.http.defaults.baseURL = `http://${document.domain}:3000`

Vue.directive('transfer-dom', TransferDom)