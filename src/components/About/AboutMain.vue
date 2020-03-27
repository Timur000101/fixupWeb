<template>
  <div class='about-main'>
    <div class="about-main__title">
      <h1>О нас</h1>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'aboutMain',
  components: {},
  props: {},
  data () {
    return {}
  },
}
</script>
 
<style lang='sass' scoped>
  .about-main
    display: flex
    justify-content: center
    align-items: center
    height: 250px
    width: 100%
    background: #F29291!important
    &__title
      display: flex
      justify-content: center
      align-items: center
      color: #fff
      font-size: 20px!important
      text-align: center
</style>