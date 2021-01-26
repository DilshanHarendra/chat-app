const init={
    users:[],
    me:[],
}

export default {
    state:init,
    namespaced:true,
    mutations:{
        setChatList(state,payload){
            state.users=payload.users
        },
        setLastMessage(state,payload){
            let index=state.users.findIndex(user=>user._id==payload.data.id)
            state.users[index].last_message=payload.data.message
        },
        setMe(state,payload){
            state.me=payload.me
        },
        clear(state){
            Object.assign(state,init)
        }
    },
    actions:{
        SET_USERS({commit},data){
            commit('setChatList',{users:data})
        },
        SET_LAST_MESSAGE({commit},data){
            commit('setLastMessage',{data:data})
        },
        SET_ME({commit},data){
            commit('setMe',{me:data})
        }
    },
    getters:{
        users(state){
            return state.users
        },
        id:(state)=>(id)=>{
            return state.users.find(user=>user._id==id)
        },
        me(state){
            return state.me
        }
    }
}
