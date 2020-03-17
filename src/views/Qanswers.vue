<template>
  <div class="qanswers">
    <Navbar />
    <QuestionBlog />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import QuestionBlog from '../components/Qanswers/QuestionBlog.vue'
export default {
  components: {
    Navbar, QuestionBlog,
  }
}
</script>


<style lang="sass">

</style>