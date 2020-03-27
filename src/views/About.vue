<template>
  <div class="about">
    <Navbar style="background: #F15E63;"/>
    <AboutMain />
    <AboutWe />
  </div>
</template>

<script>
import AboutMain from '../components/About/AboutMain.vue'
import Navbar from "../components/Navbar.vue"
import AboutWe from '../components/About/AboutWe'
export default {
  name: 'About',
  components: {
    Navbar, AboutMain, AboutWe
  },
}
</script>


<style lang="sass">

</style>