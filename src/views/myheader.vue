<template>
    <div class="header"><slot name="menu" :n="n"></slot>
        <i v-if="n===1" class="iconfont logo">&#xe82e;</i>
        <h1 v-else>{{title}}</h1>
        <slot name="find" :n="n"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"首页",
            n:1
        }
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
          this.title = "首页";
          this.n = 1;
          break;
        case "/sort":
          this.title = "分类";
          this.n = 2;
          break;
        case "/shopping":
          this.title = "购物车";
          this.n = 3;
          break;
        case "/center":
          this.title = "个人中心";
          this.n = 4;
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    .logo{
        font-size: 0.5rem !important;
    }

    h1{
        display: inline;
    }

    .header{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #1d1d1d;
        color: white;
        position: fixed;
        top: 0;
        z-index: 10;
    }
</style>

