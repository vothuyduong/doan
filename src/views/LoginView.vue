<template>
  <div class="container-fluid">
    <div class="center">
      <h1>Đăng nhập</h1>
      <form @submit.prevent="login">
        <div class="mess-err">
          <p>{{ this.messager }}</p>
        </div>
        <div class="txt_field">
          <input type="text" v-model="user.username" required />
          <span></span>
          <label>Tên đăng nhập</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="user.password" required />
          <span></span>
          <label>Mật khẩu</label>
        </div>
        <div class="pass">Quên mật khẩu?</div>
        <input type="submit" value="Đăng nhập" />
        <div class="signup_link">
          Bạn không phải là thành viên?
          <router-link :to="{ name: 'register' }">Đăng kí</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/api/customer.js'

export default {
  data() {
    return {
      messager: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      let response = await api.login(this.user);
      console.log(response);
      if(response.status === 500) {
        this.messager = "Đăng nhập thất bại!";
      } else if(response.status === 400) {
        this.messager = "Tên đăng nhập hoặc mật khẩu không đúng!"
      } else {
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("username", response.data.username);
        this.$router.push({name: "home"});
      }
    }
  }
};
</script>

<style scoped>
.container-fluid {
  font-family: montserrat;
  background: linear-gradient(120deg, #21340cc9, #ada044);
  height: 100vh;
  overflow: hidden;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
}
.center h1 {
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid silver;
}
.center .mess-err p {
 color: red;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #35bd14ad;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #35bd14ad;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #35bd14ad;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
input[type="submit"]:hover {
  border-color: #35bd14ad;
  transition: 0.5s;
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a {
  color: #35bd14ad;
  text-decoration: none;
}
.signup_link a:hover {
  text-decoration: underline;
}
</style>