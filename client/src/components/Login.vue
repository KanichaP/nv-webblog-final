<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="container-fluid">
      <center>
        <div class="blog-wrapper">
          <h1><b>Admin Login</b></h1>
          <div style="width: 60%">
            <form v-on:submit.prevent="onLogin">
              <div class="form-group font3" style="text-align: left">
                <label for="exampleInputEmail1"
                  ><span class="font2">E-mail</span></label
                >
                
                <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
                  
                  
                  <input
                    required
                    type="email"
                    class="form-control"
                    placeholder="E-mail"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="form-group font3" style="text-align: left">
                <label for="exampleInputEmail1"
                  ><span class="font2">Password</span></label
                >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                  </div>
                  <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
              </div>
              <br />
              <div>
                <div><center>
                  <button
                    required
                    type="submit"
                    class="btn btn-dark"
                    style="width: 50%;"
                    
                  >
                     Login
									</button></center>
                  
                </div>
                <div class="col">
                  
                </div>
              </div>
              <div class="error" v-if="error">{{ error }}</div>
            </form>
            <br />
          </div>
          <br />
        </div>
      </center>
    </div>
  </div>
</template>
<script>
import AuthenService from "@/services/AuthenService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "blogs",
        });

        console.log(response);
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = "";
        this.password = "";
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
.header {
  margin-top: 0px;
  padding: 10px;
  position: relative;
  background-color: #ececec;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1) inset;
  text-shadow: 1px 1px 1px #fff;
}
.categories {
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
.blog-wrapper {
  height: 100%;
  border-radius: 50px;
  margin-top: 100px;
  width: 40%;
  background: #FFCCCC;
  padding: 30px;
}
.blog-tab {
  padding: 3px;
  background-color: #E0FFFF;
  text-align: center;
}
</style>