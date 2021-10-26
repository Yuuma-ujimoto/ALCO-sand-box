<template>
  <button class="Button-design">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonDesign"
}
</script>

<style scoped>
  .Button-design{
    width: 200px;
    height: 50px;
    background: none;
    border: solid 2px #222222;
    outline: none;
    color: #222222;

  }
  .Button-design:hover{
    color: #e3e3e3;

    background: #222222;
  }

</style>