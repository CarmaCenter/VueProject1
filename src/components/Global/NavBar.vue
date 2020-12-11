<template>
  <div class="nav-bar">
    <div class="container">
      <div class="logo">
        <h2>CARMA</h2>
      </div>
      <div id="nav">
        <router-link to="/" exact>Home</router-link> |
        <router-link to="/blog" replace>Blog</router-link>|
        <router-link to="/about">About</router-link> |
        <router-link to="/help">Help</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss" scoped>
.nav-bar {
  background-color: #000;
  overflow: hidden;
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    float: left;
    color: #42b983;
    width: 20%;
    h2 {
      margin: 0;
    }
  }
  #nav {
    float: right;
    text-align: right;
    width: calc(100%-20%);
    margin: 0px;
  }
}
</style>
