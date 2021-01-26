<template>
  <div class="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200">
    <!-- left -->
    <Inbox_ChatList/>
    <!-- center -->
    <Inbox_Inbox_CurrentChat @show-profile="profile=true"/>

    <!-- right -->
    <Inbox_Profile  v-if="profile" @hide-profile="profile=false" />

  </div>
</template>

<script>
import Inbox_ChatList from "@/components/inbox/Inbox_ChatList";
import Inbox_Inbox_CurrentChat from "@/components/inbox/Inbox_CurrentChat";
import Inbox_Profile from "@/components/inbox/Inbox_Profile";
export default {
  name: "Inbox",
  components: {Inbox_Profile, Inbox_Inbox_CurrentChat, Inbox_ChatList},
  data(){
    return{
      profile:false
    }
  }
}
</script>

<style scoped>

</style>
