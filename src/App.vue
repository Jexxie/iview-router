<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

      <Menu :active-name="activeName">
        <MenuItem name="/home" to="/home">Home</MenuItem>
        <MenuItem name="/about" to="/about">About</MenuItem>
        <MenuItem name="/login" to="/login">Login</MenuItem>
        <MenuItem name="/admin" to="/admin">Admin</MenuItem>
      </Menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: this.$route.path
      }
    },
    watch: {
      '$route' () {
        this.activeName = this.$route.path
      }
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
