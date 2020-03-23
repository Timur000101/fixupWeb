<template>
  <div class='contacts'>
    <Navbar style="background: #F15E63;"/>
    <Contacts-main />
    <Footer style="margin-top: 100px; margin-bottom: 0;"/>
  </div>
</template>
 
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ContactsMain from '../components/Contacts/Contacts-main'
export default {
  name: 'contacts',
  components: {
    Navbar, Footer, ContactsMain
  },
  props: {},
  data () {
    return {}
  },
}
</script>
 
<style lang='sass' scoped>
  
</style>