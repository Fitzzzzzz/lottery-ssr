import Vue from 'vue'
import VueSocketIo from 'vue-socket.io'

Vue.use(VueSocketIo, `http://${document.domain}:3000`)
