<template>
  <div class="bg">
    <ButtonDesign>TEST</ButtonDesign>
  </div>
</template>

<script>
import ButtonDesign from "../components/ButtonDesign";
export default {
  name: "Button",
  components:{
    ButtonDesign
  }
}
</script>

<style scoped>
  .bg{
    width: 500px;
    height: 500px;
    background: powderblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>