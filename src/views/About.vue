<template>
  <div class="about">
    <Navbar style="background: #F15E63;"/>
    <AboutMain style="background: #F8F8FF;"/>
  </div>
</template>

<script>
import AboutMain from '../components/About/AboutMain.vue'
import Navbar from "../components/Navbar.vue"
export default {
  name: 'About',
  components: {
    Navbar, AboutMain
  },
}
</script>


<style lang="sass">

</style>