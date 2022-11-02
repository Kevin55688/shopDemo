<template>
  <div id="app">
    <Nav/>
    <Banner/>
    <Information/>
    <NewArrivalVue/>
    <EndingSoon/>
    <DigitalContents/>
    <RegularProducts/>
    <Event/>
    <Group/>
    <Footer/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import Information from '@/components/Information.vue'
import NewArrivalVue from './components/NewArrival.vue'
import  DigitalContents from './components/DigitalContents.vue'
import  Event from './components/Event.vue'
import  Group from './components/group.vue'
import  Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Nav,
    Banner,
    Information,
    NewArrivalVue,
    DigitalContents,
    Event,
    Group,
    Footer
  }
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

</style>
