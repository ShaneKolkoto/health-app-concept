import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      img: "https://avatars.githubusercontent.com/u/93946405?s=64&v=4",
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
