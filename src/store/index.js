import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    abouts: null,
    markets: null,
    videos: null,
    latest: null,
    clients: null,
    testimonials: null,
  },
  mutations: {
    SET_ABOUT_DATA(state, abouts){
      state.abouts = abouts
    },
    SET_MARKET_DATA(state, markets){
      state.markets = markets
    },
    SET_VIDEOS(state, videos){
      state.videos = videos
    },
    SET_LATEST(state, latest){
      state.latest = latest
    },
    SET_CLIENTS(state, clients){
      state.clients = clients
    },
    SET_TESTIMONIAL(state, testimonials){
      state.testimonials = testimonials
    },
  },
  actions: {
    addAboutData({commit}, abouts){
      commit('SET_ABOUT_DATA', abouts)
    },
    addMarketData({commit}, markets){
      commit('SET_MARKET_DATA', markets)
    },
    addVideos({commit}, videos){
      commit('SET_VIDEOS', videos)
    },
    addLatest({commit}, latest){
      commit('SET_LATEST', latest)
    },
    addClients({commit}, clients){
      commit('SET_CLIENTS', clients)
    },
    addTestimonials({commit}, testimonials){
      commit('SET_TESTIMONIAL', testimonials)
    }
  },
  modules: {
  }
})
