<template>
  <nav>
    <!-- <img class="background" src="@/assets/Ресурс2.png"/> -->
    <!-- <img class="background2" src="@/assets/Ресурс3.png"/> -->
    <fixed-header>
      <nav class="fixed-menu">
        <label class="logo">FixUp</label>
        <ul class="menu">
          <li class="link" v-for="link of links" :key="link.text" router :to="link.route">
            <router-link class="router" tag="a" style="z-index: 999; color: #fff;" :to="link.route">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </fixed-header>
    
    <div class="nav-icon" @click="show">
      <div v-show="!showNav">      
        <i class="fas fa-bars fa-fw" style="color: #fff"></i>
      </div>
      <div v-show="showNav">
        <i class="fas fa-times fa-fw" style="color: #000"></i>
      </div>
    </div>

    <transition name="fade">
      <div class="nav-container" v-show="showNav">
        <ul class="menu-mobile">
          <li class="link" v-for="link of links" :key="link.text" router :to="link.route">
            <router-link class="router" style="z-index: 999" :to="link.route">{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  
    <div class="social-network">
      <i class="fab fa-instagram instagram"></i>
      <i class="fab fa-facebook facebook"></i>
      <i class="fab fa-telegram telegram"></i>
    </div>

    
  </nav>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
export default {
  components: {
    FixedHeader
  },
  data: () => ({
    showNav: false,
    links: [
      { text: 'Главная', route: '/' },
      { text: 'О нас', route: '/about'},
      { text: 'Вопросы и ответы', route: '/questions'},
      { text: 'Контакты', route: '/contact'},
    ]
  }),
  methods: {
    show() {
      this.showNav = !this.showNav;
    },
  }
}
</script>

<style lang="sass">
* 
  padding: 0
  margin: 0
  text-decoration: none
  list-style: none
body
  font-family: sans-serif
.fixed-menu
  display: flex
  justify-content: space-between
  align-items: center
  height: 80px
  width: 100%
  position: relative
.fixed-menu.vue-fixed-header--isFixed 
  position: fixed
  left: 0
  top: 0
  width: 100%
  background: #f15e63
  transition: .8s
  z-index: 99
   
label.logo
  font-size: 35px
  font-weight: bold
  padding: 0 50px
  color: #fff
ul.menu 
  display: flex
  justify-content: space-between
  padding: 0 50px 0 0
  z-index: 99
  li 
    margin-right: 50px
    text-transform: uppercase
    font-weight: bold
    list-style: none
    text-decoration: none
    &:last-child
      margin-right: 0
    a
      color: #fff
      text-decoration: none
    a:before
      content: ''
      width: 0px
      height: 4px
      background: #fff
      position: absolute
      top: 55px
      transition: .5s
  li:hover a:before
    width: 30px
.nav-icon
  position: fixed
  top: 0
  right: 0
  padding: 25px 50px
  z-index: 999
  font-size: 2rem
  cursor: pointer
  display: none
.nav-container
  position: fixed
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  height: 190vh
  background: #fff
  overflow: hidden
  z-index: 99
  ::before
    content: ''
    position: absolute
    width: 100%
    min-height: 100vh
    background: inherit
    z-index: 10
.fade-enter-active, .fade-leave-active
  transition: all .2s ease-in-out
.fade-enter, .fade-leave-to
  opacity: 0
.menu-mobile 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-top: 100%
  li 
    font-size: 24px
    font-weight: bold
    color: #000!important
    margin-top: 30px
.background
  width: 100%
  height: 100vh 
  position: absolute 
  top: 0 
  left: 0 
  z-index: -999
.background2
  display: none  
  width: 100%
  height: 120vh 
  position: absolute 
  top: 0 
  left: 0 
  z-index: -999
.social-network
  display: flex
  align-items: center
  justify-content: space-around
  width: 200px
  height: 80px
  display: none
  z-index: 999
  .instagram
    width: 40px
    height: 40px
    color: #F15E63
  .facebook
    width: 40px
    height: 40px
    color: #F15E63
  .telegram
    width: 40px
    height: 40px
    color: #F15E63

// media 
@media (max-width: 1048px) 
  label.logo
    font-size: 30px
  ul.menu li
    font-size: 15px
@media (max-width: 909px) 
  nav #icon
    display: block
  ul.menu
    display: none
  .nav-icon
    display: block
  
  // .fixed-menu.vue-fixed-header--isFixed 
    
@media (max-width: 534px)
  .background
    display: none !important
  .background2 
    display: block
  label.logo
    padding: 0 30px
  .nav-icon
    padding: 25px 30px
</style>