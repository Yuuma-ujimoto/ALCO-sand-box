<template>
  <ul>
    <li>
      <router-link to="/markdown">markdown</router-link>
    </li>
    <li>
      <router-link to="/toast">toast</router-link>
    </li>
    <li>
      <router-link to="/toggle">toggle switch</router-link>
    </li>
    <li>
      <router-link to="/modal">modal</router-link>
    </li>
  </ul>
  <router-view/>

  <global-modal/>

</template>

<script>
  import globalModal from "./components/globalModal";
  export default {
    name:"APP",
    components:{
      globalModal
    }
  }
</script>