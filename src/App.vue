<template>
  <NavBar></NavBar>
  <div class="container mx-auto px-2 overflow-auto">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {NavBar}
}
</script>