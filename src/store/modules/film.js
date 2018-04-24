import api from '../api'
import * as types from '../types'

const state = {
  nowPlayingList: [],
  comingSoonList: [],
  nowPage: 0,
  comingPage: 0,
  getNowMore: true,
  getComingMore: true
}

const actions = {
  // 获取热映列表
  getNowPlayList: function ({commit}) {
    if (state.getNowMore) {
      commit(types.FILE_NOWPLAYING_NUM)
      api.getNowPlayList(state.nowPage, function (res) {
        commit(types.FILM_GET_NOWPLAYING, res.data)
      })
    }
  },
  // 获取即将上映列表
  getComingList: function ({commit}) {
    if (state.getComingMore) {
      commit(types.FILM_COMINGSOON_NUM)
      api.getComingList(state.comingPage, function (res) {
        commit(types.FILM_GET_COMINGSOON, res.data)
      })
    }
  }
}

const getters = {
  getNowPlayList: state => state.nowPlayingList,
  getComingList: state => state.comingSoonList
}

const mutations = {
  [types.FILM_GET_NOWPLAYING] (state, res) {
    state.nowPlayingList = state.nowPlayingList.concat(res.film)
    state.getNowMore = res.page.current < res.page.total ? true : false
  },
  [types.FILE_NOWPLAYING_NUM] (state) {
    state.nowPage += 1
    state.getNowMore = false
  },
  [types.FILM_GET_COMINGSOON] (state, res) {
    state.comingSoonList = state.comingSoonList.concat(res.films)
    state.getComingMore = res.page.current < res.page.total ? true : false
  },
  [types.FILM_COMINGSOON_NUM] (state) {
    state.comingPage += 1
    state.getComingMore = false
  }
}

export default {
  actions,
  getters,
  state,
  mutations
}
