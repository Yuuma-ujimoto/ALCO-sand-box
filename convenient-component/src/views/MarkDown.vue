<template>
  <div class="md-wrapper">
    <textarea class="write-area" name="" id="" cols="30" rows="10" v-model="source"></textarea>
    <Markdown class="preview-area" :source="source" :language="'ja'" />

  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Markdown
  },
  data() {
    return {
      source: '# Hello World!'
    }
  }
}
</script>

<style>

  h1,h2,h3,h4,h5,p{
    margin: 0;
  }

  .md-wrapper{
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .write-area,.preview-area{
    width: 50%;
    height: 500px;
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px #000;
    overflow-y: auto;
  }
  .write-area{
    resize: none;
  }
  .write-area:focus{
    outline: none;
  }

</style>