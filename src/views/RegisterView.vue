<template>
  <div class="home">
    <div class="register">
      <div class="title">
        <span>欢迎注册</span>
      </div>
      <div class="form">
        <el-form size="large" :model="form" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="form.email" placeholder="邮箱地址" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="form.password"
              placeholder="输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.phone" placeholder="手机号码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "RegisterView",
  setup() {
    const form = reactive({
      email: "",
      phone: "",
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
  background: #fff;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 1100px;
  background: url("../assets/img/register-bac.png");
  background-size: 1920px 465px;
  background-position: 0 200%;
  background-color: #eff8ff;
  background-repeat: no-repeat;
  min-width: 1200px;
  .register {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
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
}
//elementui样式修改
.el-input--large {
  height: 1rem;
  margin-bottom: 0.2rem;
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
</style>
