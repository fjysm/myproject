<template>
  <div class="home">
    <div class="login">
      <div class="title">
        <span>账号登录</span>
      </div>
      <div class="form">
        <el-form size="large" :model="form" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="form.account" placeholder="邮箱账号或手机号码" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="form.password"
              placeholder="输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.freeLogin" label="7天免登录" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="link">
          <el-link type="info">忘记密码</el-link>
          <span></span>
          <router-link
            target="_blank"
            style="text-decoration: none"
            to="/register"
          >
            <el-link type="info">注册新账号</el-link>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "HomeView",
  setup() {
    const form = reactive({
      account: "",
      password: "",
      freeLogin: false,
    });
    function login() {}
    return {
      form,
      login,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../assets/img/bac.png") no-repeat center top;
  background-size: 100% 100%;
  overflow: hidden;
  .login {
    position: fixed;
    left: 60%;
    top: 25%;
    width: 6.7rem;
    height: 8rem;
    background-color: white;
    border-radius: 0.2rem;
    .title {
      width: 100%;
      height: 20%;
      font-weight: bolder;
      font-size: 0.5rem;
      span {
        display: inline-block;
        margin-top: 10%;
      }
    }
    .form {
      margin: 0 0.5rem;
      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          display: inline-block;
          height: 0.3rem;
          width: 0.03rem;
          background-color: #b7bcc7;
          margin: auto 0.3rem;
        }
      }
    }
  }
  //elementui样式修改
  .el-input--large {
    height: 0.8rem;
    /deep/.el-input__inner {
      font-size: 0.3rem;
    }
  }
  .el-button--large {
    width: 100%;
    height: 0.8rem;
  }
  .el-checkbox--large {
    /deep/.el-checkbox__label {
      font-size: 0.3rem;
    }
  }
  .el-link--info {
    font-size: 0.3rem;
  }
}
</style>
