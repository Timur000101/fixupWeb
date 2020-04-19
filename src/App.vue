<template>
  <div id="app" data-server-rendered="true">
    <router-view/>
    <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap')
#app
  font-family: 'Roboto'
</style>
