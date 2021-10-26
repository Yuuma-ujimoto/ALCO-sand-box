<template>
  <Button @click="openModal">OPEN</Button>
  {{this.$store.getters.isModalOpen}}

</template>

<script>

export default {
  name: 'modal',
  data(){
    return{
      isOpenModal:false
    }
  },
  methods: {
    openModal(){
      this.$store.dispatch("updateModal","OpenModal")
    }
  }
}
</script>

<style>
.modal-background{
  background:rgba(0,0,0,.65);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
}
.modal{
  width: 300px;
  height: 300px;
  background-color: #fff;
  border: solid 1px #222222;
}
</style>
