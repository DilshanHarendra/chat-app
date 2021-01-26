<template>
  <div class="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
    <div class="self-center flex-1 w-full overflow-y-auto pb-5 ">
      <div class="relative flex flex-col px-3 py-1 m-auto">
        <div class="self-center px-2 py-1 mx-0 my-1 text-sm text-white text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">Channel was created</div>
        <div class="self-center px-2 py-1 mx-0 my-1 text-sm text-white text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">{{getDate()}}</div>
      </div>

        <div v-for="(message, index) in messages" :key="index" class="relative flex flex-col px-3 py-1 mx-auto">
          <div v-if="!message.send" class="self-start max-width width-fit-content my-2">
            <div class="p-4 text-sm bg-white rounded-t-lg rounded-r-lg shadow">
              {{message.message}}
            </div>

          </div>
          <div v-if="message.send" class="self-end max-width width-fit-content my-2">
            <div class="p-4 text-sm bg-white rounded-t-lg rounded-l-lg shadow">
              {{message.message}}
            </div>
          </div>
        </div>


    </div>
    <Inbox_CurrentChat_MessageBox_NewMessage/>
  </div>
</template>

<script>
import Inbox_CurrentChat_MessageBox_NewMessage from "@/components/inbox/Inbox_CurrentChat_MessageBox_NewMessage";
export default {
name: "Inbox_CurrentChat_MessageBox",
  components: {Inbox_CurrentChat_MessageBox_NewMessage},
  computed:{
    messages(){
      return this.$store.getters['chat/message']
    },

  },
  methods:{
    getDate(){
      let date = new Date().toString().split(" ");
      return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`
    }
  }
}
</script>

<style scoped>
.max-width{
  max-width: 60%;
}
</style>
