<template>
  <nav>
    <fixed-header style="z-index: 999; position: fixed;">
      <nav class="fixed-menu">
        <img @click="logoClick()" src="../assets/Icons/F2_3.png" alt="" class="logo">
        <ul class="menu">
          <router-link class="link" tag="li" router to="{name: 'home'}">Главная</router-link>
          <router-link class="link" tag="li" router :to="{name: 'about'}">О нас</router-link>
          <router-link class="link" tag="li" router to="/questions">Вопросы и ответы</router-link>
          <router-link class="link" tag="li" router to="/contact">Контакты</router-link>
        </ul>
      </nav>
    </fixed-header>
    <div class="nav-icon" @click="show" style="position: fixed;">
      <div v-show="!showNav">      
        <menu-icon fillColor="#FFF" :size="40"/>
      </div>
      <div v-show="showNav">
        <close-icon fillColor="#F15E63" :size="40"/>
      </div>
    </div>

    <div class="nav-container" v-show="showNav" style="background: #fff">
      <ul class="menu-mobile">
        <router-link class="link" tag="li" v-for="link of links" :key="link.text" router :to="link.route">
          {{ link.text }}
        </router-link>
      </ul>
      <div class="menu-button">
        <div class="button">
          <a href="#">
            <p>Скачать сейчас</p>
            <img src="../assets/os/android.png" alt="">
            <img src="../assets/os/ios.png" alt="ios">
          </a>
        </div>
      </div>
      <div class="social-network">
        <i class="fab fa-instagram instagram"></i>
        <i class="fab fa-facebook facebook"></i>
        <i class="fab fa-telegram telegram"></i>
      </div>
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
      { text: 'Вопросы и ответы', route: '/questions',},
      { text: 'Контакты', route: '/contact'},
    ]
  }),
  methods: {
    show() {
      this.showNav = !this.showNav;
    },
    logoClick() {
      this.$router.push({ path: '/', force: true })
      document.location.reload(true)
    }
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
nav 
  display: flex
  justify-content: space-between
  align-items: center
  height: 80px
  width: 100%
  position: relative
  z-index: 9
.fixed-menu.vue-fixed-header--isFixed 
  position: fixed!important
  left: 0
  top: 0
  width: 100%
  background: #f15e63
  transition: .8s   
  z-index: 999!important
.logo
  padding: 0 50px
  width: 70px
  height: 70px
  cursor: pointer
ul.menu 
  display: flex
  justify-content: space-between
  padding: 0 50px 0 0
  .link 
    margin-right: 50px
    text-transform: uppercase
    font-weight: bold
    color: #fff
    cursor: pointer
    &:last-child
      margin-right: 0
    &:before
      content: ''
      width: 0px
      height: 4px
      background: #fff
      position: absolute
      top: 55px
      transition: .5s
    &:hover &:before
      width: 30px
.nav-icon
  position: fixed
  right: 0
  padding: 25px 50px
  z-index: 9999!important
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
  height: 200vh
  background: #fff
  overflow: hidden
  z-index: 999!important
  ::before
    content: ''
    position: absolute
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
  margin-top: 150%
  margin-bottom: 30px
  li 
    font-size: 24px
    font-weight: bold
    color: #000!important
    margin-top: 30px
    cursor: pointer
.menu-button
  display: flex
  justify-content: center
  align-items: center
  width: 250px
  height: 40px
  background: #F15E63
  border: 3px solid #f15e63
  border-radius: 50px
  margin-bottom: 20px
  .button  
    display: flex
    justify-content: center
    align-items: center
    color: #fff
    a
      display: flex
      flex-direction: row
      align-items: center
      color: #fff
      p 
        margin-right: 10px
      img
        width: 30px
        height: 30px
  
.social-network-title
  color: #333
  margin-bottom: 20px
  font-size: 18px
.social-network
  width: 150px
  text-align: center
  padding-top: 20px
  .instagram
    width: 40px
    height: 40px
    color: #F15E63
    margin-right: 10px
  .facebook
    width: 40px
    height: 40px
    color: #F15E63
    margin-right: 10px
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
  .logo
    width: 50px
    height: 50px
    padding: 0 30px
  .nav-icon
    padding: 25px 30px
  nav
    height: 60px
</style>