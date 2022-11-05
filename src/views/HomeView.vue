<template>
  <div class="home">
    <Banner/>
    <Information/>
    <NewArrivalVue/>
    <EndingSoon/>
    <DigitalContents/>
    <RegularProducts/>
    <Event/>
    <Group   />
    <Footer/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Information from '@/components/Information.vue'
import NewArrivalVue from '@/components/NewArrival.vue'
import  DigitalContents from '@/components/DigitalContents.vue'
import  Event from '@/components/Event.vue'
import  Group from '@/components/group.vue'
import  Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
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
