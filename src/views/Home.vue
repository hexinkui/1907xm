<template>
  <div class="home">
    <img src="../assets/banner.png" class="banner">
    <div class="content">
      <h2>热销商品</h2>
      <span>></span>
    </div>
    <div class="section">
      <ul>
          <li>
            <img src="https://resource.smartisan.com/resource/578116bddf1d170c89e9af7ba5073fb6.jpg?x-oss-process=image/resize,w_256/format,webp" />
            <p>smartisan 帆布鞋</p>
            <p class="wenz">一双踏实、舒适的帆布鞋</p>
            <p class="price">￥ 199.00</p>
          </li>
          <li>
            <img src="https://resource.smartisan.com/resource/9bffe702b1f0aea221b1f18ddf886958.jpg?x-oss-process=image/resize,w_256/format,webp" />
            <p>各色DNA检测套装</p>
            <p class="wenz">千万级基因位点数据解读</p>
            <p class="price">￥ 499.00</p>
          </li>
          <li>
            <img src="https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png?x-oss-process=image/resize,w_256/format,webp" />
            <p>畅呼吸智能空气净化</p>
            <p class="wenz">超强净化能力、超低耗能</p>
            <p class="price">￥ 2,799.00</p>
          </li>
      </ul>
    </div>
    <div class="bag">
      <h2>新品箱包</h2>
      <img src="https://resource.smartisan.com/resource/406f785ab2bf3ed281f7c9c08f8bf22c.png?x-oss-process=image/resize,w_675/format,webp" />
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.home{
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  top: 1rem;
}
.banner{
  width: 7rem;
  height: 2.9rem;
  margin-top: 0.2rem;
}

.content{
  overflow: hidden;
  border-bottom: 0.02rem solid #666;
  background: #fff;
  margin-top: 0.1rem;
}
h2{
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.325rem;
  font-weight: 700;
  color: #666;
  float: left;
  margin-left: 0.25rem;
}

.content span{
  display: inline-block;
  float: right;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
  font-family: "宋体";
  font-weight: bolder;
}

.section{
  overflow: hidden;
  border-bottom: 0.02rem solid #666;
  background: #fff;
}

li{
  width: 2.5rem;
  height: 3.86rem;
  float: left;
  list-style: none;
}

li img{
  width: 2.5rem;
  height: 2.5rem;
}

li p{
  font-weight: bolder;
}

li .wenz{
  font-size: 0.08rem;
  color: #7f7f7f;
  padding-top: 0.04rem;
}

li .price{
  color: red;
}

.bag img{
  width: 7.12rem;
  height: 7.12rem;
}

.footer{
  height: 1rem;
}
</style>

