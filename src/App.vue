<template>
  <nav-bar />
  <router-view />
</template>
<script>
import NavBar from "./components/Global/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #566069;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
