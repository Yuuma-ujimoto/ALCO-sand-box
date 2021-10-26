<template>
  <button @click="OpenAlert">Open</button>
  <div class="alert-wrapper" v-if="AlertArray.length">
    <div class="alert-box" v-for="(alert,index) in AlertArray" :key="index">
      {{index}}
    <p>{{alert}}</p>
    <button @click="CloseAlert(index)">Close</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      AlertArray:[]
    }
  },
  methods:{
    OpenAlert(){
      this.AlertArray.push("message")
    },
    CloseAlert(index){
      console.log(index)
      this.AlertArray.splice(index,1)
      // this.isOpenAlert = false
    }
  }
}
</script>

<style>
  .alert-wrapper{
    width: 300px;
    position: fixed;
    right: 10px;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    top:0;
  }
  .alert-box{

    width: 280px;
    height: 80px;
    margin: 10px;
    box-sizing: border-box;
    background: greenyellow;
    border: green solid 1px;
    /*position: fixed;*/
    /*right: 10px;*/
    justify-content: space-between;
    display: flex;
  }
</style>
