<template>
  <div class="about">
    <Navbar style="background: #F15E63;"/>
    <AboutMain />
    <AboutWe />
    <Footer />
  </div>
</template>

<script>
import AboutMain from '../components/About/AboutMain.vue'
import Navbar from "../components/Navbar.vue"
import AboutWe from '../components/About/AboutWe'
import Footer from '../components/Footer.vue'
export default {
  name: 'About',
  components: {
    Navbar, AboutMain, AboutWe, Footer
  },
}
</script>


<style lang="sass">

</style>