<template>
<div class="head">
  <input type="text" v-model="title"></input>
  <input type = "submit" v-on:click="golist()" ></input>
</div>
</template>

<script>
export default {
    data() {
      return {
        title: "这是登录界面"
      }
    },
  methods :{
  golist(){
    this.$router.push({path:"/register"});
  }
  }
}
</script>

<style scoped>

</style>