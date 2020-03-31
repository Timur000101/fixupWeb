<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<<script>
export default {
  created() {
    // document.location.reload(true)
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap')
#app
  font-family: 'Roboto'
</style>
