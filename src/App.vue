<template>
  <div id="app">
    <myHeader>
      <template #menu="{n}">
        <i class="iconfont menu" v-if="n===1 || n===2">&#xe653;</i>
      </template>
      <template #find="{n}">
        <i class="iconfont find" v-if="n===1 || n===2">&#xe61c;</i>
      </template>
    </myHeader>

    <router-view />
    <div id="nav">
      <router-link to="/">
        <img src="./assets/shouye.png" />
        <span>首页</span>
      </router-link>
      <router-link to="/sort">
        <img src="./assets/分类.png" />
        <span>分类</span>
      </router-link>
      <router-link to="/shopping">
        <img src="./assets/gouwc.png" />
        <span>购物车</span>
      </router-link>
      <router-link to="/center">
        <img src="./assets/geren.png" />
        <span>个人中心</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import myHeader from "./views/myheader";
export default {
  components: {
    myHeader
  },
  created() {
    this.changeTitle(this.$route.path);
    this.$router.beforeEach((to, from, next) => {
      this.changeTitle(to.path);
      next();
    });
  },
  methods: {
    changeTitle(path) {
      switch (path) {
        case "/":
          document.title = "首页";
          document.n = 1;
          break;
        case "/sort":
          document.title = "分类";
          document.n = 2;
          break;
        case "/shopping":
          document.title = "购物车";
          document.n = 3;
          break;
        case "/center":
          document.title = "个人中心";
          document.n = 4;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: Helvetica Neue, Helvetica, Arial, SCREEN GP Sans SC, sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#nav {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background: #ffffff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  flex: 1;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.router-link-exact-active img {
  background: #42b983;
}
.menu {
  float: left;
  font-size: 0.5rem !important;
  color: white;
  margin-left: 0.2rem;
}

.find {
  float: right;
  font-size: 0.5rem !important;
  color: white;
  margin-right: 0.2rem;
}

#nav a img {
  width: 0.54rem;
  height: 0.54rem;
}
span {
  display: block;
}
</style>
