<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
    <Footer/>
    <div class="bg-triangles">
      <div class="bg-item"></div>
      <div class="bg-item"></div>
      <div class="bg-item"></div>
      <div class="bg-item"></div>
      <div class="bg-item"></div>
    </div>
  </div>
</template> 


<script>
import Nav from '@/components/Nav.vue'
import  Footer from '@/components/Footer.vue'


export default {
  name: 'app',
  components: {
    Nav,
    Footer,
  },
  data () {
    return {
    };
  },
}

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.bg-triangles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  // background-color: blue;
  float: left;

  >.bg-item{
      position: absolute;
      display: block;
      bottom: 0%;
      animation: triangle linear 25s infinite;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 0.3;
      

      &:nth-child(1) {
        left: 40%;
      width: 400px;
      height: 400px;
      background-image: url('@/components/picture/bg/triangle-blue.png');
      animation-duration: 25s;
      }
      &:nth-child(2) {
      left: 0;
      width: 50px;
      height: 50px;
        background-image: url('@/components/picture/bg/triangle-green.png');
      animation-delay: 1s;
      animation-duration: 22s;
      }
      &:nth-child(3) {
        left: 5%;
        background-image: url('@/components/picture/bg/triangle-orange.png');
      width: 150px;
      height: 200px;
      animation-delay: 10s;
      animation-duration: 25s;
      }
      &:nth-child(4) {
        left: 80%;
        background-image: url('@/components/picture/bg/triangle-pink.png');
        width: 200px;
        height: 200px;
      animation-delay: 30s;
      animation-duration: 17s;
        
      }
      &:nth-child(5) {
        left: 20%;
        background-image: url('@/components/picture/bg/triangle-purple.png');
        width: 150px;
        height: 150px;
      animation-duration: 27s;
      }
  }
}


@keyframes triangle {
      0% {
        transform: translateY(0);
        opacity: .3;
      }

      100% {
        transform: translateY(-6000px) rotate(600deg);
      }
    }

</style>
