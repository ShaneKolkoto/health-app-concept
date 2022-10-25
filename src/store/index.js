import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      img: "https://shanekolkoto.github.io/assets/img/resume/131891698_806821109874906_296380606188853188_n.jpg",
      full_name: "Shane Morne Kolkoto",
      dob: "1995-04-30",
      country: "South Africa",
    },
    medical: {
      blood_type: "A+",
      height: 165,
      weight: 95,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
