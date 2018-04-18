
export default function ({ route, store, redirect, query }) {
  // console.log(route.matched[0].name, store.state)
  switch (route.matched[0].name) {
    case 'profile' :
      if (!store.state.isLogIn) {
        redirect('/signin')
        return
      }
      store.commit('setAppPath', { path: '个人中心' })
      break
    case 'signin' :
      store.commit('setAppPath', { path: '登陆' })
      break
    case 'signup' :
      store.commit('setAppPath', { path: '注册' })
      break
    case 'detail' :
      store.commit('setAppPath', { path: '投票详情' })
      break
    case 'mine' :
      query.type === 'create' ? store.commit('setAppPath', { path: '我创建的投票' }) : store.commit('setAppPath', { path: '我参与的投票' })
      break
    case 'type' :
      if (!store.state.isLogIn) {
        store.commit('setEntryPath', { entryPath: 'type' })
        next('signin')
        break
      }
      store.commit('setAppPath', { path: '类型' })
      break
    default : store.commit('setAppPath', { path: 'Lottery' })
  }

}