<template>
  <div class="qanswers">
    <Navbar style="background: #F15E63;"/>
    <QuestionBlog style="margin-top: 150px;"/>
    <Footer style="margin-top: 100px; margin-bottom: 0;"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import QuestionBlog from '../components/Qanswers/QuestionBlog.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar, QuestionBlog, Footer,
  }
}
</script>


<style lang="sass">

</style>