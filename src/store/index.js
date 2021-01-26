import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import usersModule from "@/store/modeules/usersModule";
import currentChat from "@/store/modeules/currentChat";







Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        users:usersModule,
        chat: currentChat
    },
  //  plugins:[createPersistedState()]
})
