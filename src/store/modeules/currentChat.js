const init ={
    userid:'',
    messages:[]
}
export default {
    state:init,
    namespaced:true,
    mutations:{
        setCurrentChat(state,payload){
            state.userid=payload.userid
        },
        setMessage(state,payload){
            state.messages.push(payload.message)
        },

    },
    actions:{
        SET_CURRENT_CHAT({commit},data){
            commit('setCurrentChat',{userid:data})
        },
        SET_SENT({commit},data){
            commit('setMessage',{message:data})
        },
        SET_RECEIVED({commit},data){
            commit('setMessage',{message:data})
        }
    },
    getters:{
        userid(state){
            return state.userid
        },
        message(state){
            return state.messages
        },


    }

}
