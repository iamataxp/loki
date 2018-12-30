<template>
  <div class="login-wrap">
    <h1 class="title">工程造价材料查询系统</h1>
    <!--<img src="../assets/title1.png" style=" alignment: center;margin-top: 50px;margin-left: 200px"/>-->
    <el-form :rules="rules" v-loading="loading" class="login_container" :model="loginForm"  >
      <el-form-item  prop="account">
        <el-input icon="el-icon-search" v-model="loginForm.account">
          <template slot="prepend">账号</template>
        </el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input v-model="loginForm.password" type="password">
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <el-checkbox class="login_remember" v-model="checked">记住密码</el-checkbox>
      <el-form-item >
        <!--<el-button type="primary" @click="register" style="margin-right: 50px; margin-left:0px">注册</el-button>-->
        <el-button style="width: 100%" type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        rules: {account:[{required:true, message:"请输入账号",trigger:'blur'}],
                password:[{required:true, message:"请输入密码",trigger:'blur'}]},
        loading: false,
        loginForm: {
          account: "",
          password: ""
        },
        checked:true,
      }
    },
    methods: {
      submitForm(loginForm) {
        alert("登录成功！");

      },
    }


  }
</script>

<style>
  .login_container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 50px auto;
    width: 350px;
    height: 100%;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_remember {
    margin: 0px 0px 12px 0px;
    text-align: left;

  }
  .title {
    margin: 0px 0px 0px 0px;
    text-align: center;
    color: #fff;
    padding-top: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 50px;
  }

  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
    min-height: 100vh;
    background-image: url("../assets/bgr.jpg");
    background-size:100% 100%;

  }
</style>
