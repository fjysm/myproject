<template>
  <LoginView></LoginView>
</template>
<script>
import LoginView from "@/views/LoginView";
export default {
  name: "App",
  components: {
    LoginView,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: url("./assets/img/bac.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  overflow: hidden;
}
</style>
