<template>
  <div class="home">
    <div class="login">
      <div class="title">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="less" scoped>
.home {
  .login {
    position: fixed;
    left: 60%;
    top: 25%;
    width: 6.7rem;
    height: 8rem;
    background-color: white;
    .title {
      width: 100%;
      height: 20%;
      font-weight: bolder;
    }
  }
}
</style>
