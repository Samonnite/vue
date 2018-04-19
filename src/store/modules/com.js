import * as types from '../types'

/**
* App通用设置
*/
const state = {
  title: '',
  loading: 0,
  leftNavState: false
}

const getters = {
  comConf: state => state,
  loading: state => state.loading,
  title: state => state.title,
  leftNavState: state => state.leftNavState
}

const mutations = {
  [types.COM_CONF] (state, setting) {
    state = Object.assign(state, setting)
  },
  [types.COM_LOADING_STATUS] (state, status) {
    if (state.loading === 0 || !status) {
      return
    }
    state.loading = status ? ++state.loading : --state.loading
  },
  [types.CHANGE_LEFTNAV_STATUS] (state, status) {
    state.leftNavState = status
  }
}

const actions = {
  // 设置标题栏
  comConf ({commit}, setting) {
    commit(types.COM_CONF, setting)
  },
  // 左侧导航栏的开关
  changeLeftNavState ({commit}, status) {
    commit(types.CHANGE_LEFTNAV_STATUS, status)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
