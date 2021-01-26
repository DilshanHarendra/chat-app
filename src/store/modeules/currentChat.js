const init ={
    userid:'',
    messages:{}
}
export default {
    state:init,
    namespaced:true,
    mutations:{
        setCurrentChat(state,payload){
            state.userid=payload.userid
        },
        setMessage(state,payload){
            if (state.messages[payload.message.receiver]){
                state.messages[payload.message.receiver].push(payload.message)
            }else{
                state.messages={...state.messages,[payload.message.receiver]:[payload.message]}
            }
        },
        setReceiveMessage(state,payload){
            if (state.messages[payload.message.sender]){
                state.messages[payload.message.sender].push(payload.message)
            }else{
                state.messages={...state.messages,[payload.message.sender]:[payload.message]}
            }
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
            commit('setReceiveMessage',{message:data})
        }
    },
    getters:{
        userid(state){
            return state.userid
        },
        message:(state)=>(id)=>{
            return state.messages[id]
        },



    }

}
