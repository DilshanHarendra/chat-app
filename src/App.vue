<template>
  <div id="app" class="w-full">
    <div class="mx-auto w-64 h-48 bg-gray-100 p-5 border border-gray-500" v-if="!login">
      <label for="">ID</label>
      <input type="text" class="w-full p-1 " v-model="id">
      <button class="bg-gray-300 text-white px-4 py-1 mt-3 rounded-md" @click="connect">Ok</button>
    </div>
    <Inbox v-if="login"/>
  </div>
</template>

<script>


import Inbox from "@/pages/Inbox";
export default {
  name: 'App',
  components: {
    Inbox
  },
  data(){
    return{
      login:true,
      id:''
    }
  },
  created() {
    this.$socket.emit('newUser')
    },
  methods:{
    connect(){
      this.$socket.emit('login',this.id)
      this.login=true
    }
  },
  sockets:{
    users(users){
      this.$store.dispatch('users/SET_USERS',users)
    },
    me(me){
      this.$store.dispatch('users/SET_ME',me)
    },
    receive(message){
      this.$store.dispatch('users/SET_LAST_MESSAGE',{id:message.sender,message:message.message})
      this.$store.dispatch('chat/SET_RECEIVED',message)
    }
  },
}
</script>

<style>

</style>
