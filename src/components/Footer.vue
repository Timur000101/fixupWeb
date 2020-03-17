<template>
  <section class="section-footer">
    <div class="footer-section">
      <div class="footer-section_head">
        <div class="footer-logo">
          <img src="@/assets/logo.png" alt="logo">
          <h2>FixUp</h2>
        </div>
        <div class="footer-buttons">
          <div class="android-button">
            <a href="#">
              <img src="@/assets/os/android.png" alt="">
              <p>Скачать сейчас</p>
            </a>
          </div>
          <div class="ios-button">
            <a href="#">
              <img src="@/assets/os/ios.png" alt="ios">
              <p>Скачать сейчас</p>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-section_bottom">
        <div class="footer-menu">
          <div class="footer-mainmenu">
            <ul class="menu">
              <li class="link" v-for="link of links" :key="link.text" router :to="link.route">
                <router-link class="router" tag="a" style="color: #fff;" :to="link.route">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
          <div class="footer-submenu">
            <ul class="submenu">
              <li class="link" v-for="link of data" :key="link.text" router :to="link.route">
                <router-link class="router" tag="a" style="color: #fff;" :to="link.route">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="social-network">
          <i class="fab fa-instagram instagram"></i>
          <i class="fab fa-facebook facebook"></i>
          <i class="fab fa-telegram telegram"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: 'О нас', route: '/about'},
      { text: 'Вопросы и ответы', route: '/questions'},
      { text: 'Контакты', route: '/contact'},
    ],
    data: [
      { text: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', route: '/polit'},
      { text: 'ОФЕРТА', route: '/ofert'},
    ]
  })
}
</script>


<style lang="sass">
.section-footer
  display: flex
  flex-direction: column
  justify-content: flex-end
  padding-bottom: 0
.footer-section
  display: flex
  flex-direction: column
  width: 100%
  .footer-section_head
    display: flex
    align-items: center
    justify-content: space-between
    // padding: 0 50px
    // height: 95px
    padding: 20px 50px
    .footer-logo
      display: flex
      align-items: center
      justify-content: space-between
      // width: 170px
      img
        width: 70px
        height: 70px
        margin-right: 20px
      h2 
        font-size: 35px
        color: #fff
    .footer-buttons
      display: flex
      flex-direction: row
      .android-button
        a
          display: flex
          justify-content: center
          align-items: center
          width: 200px
          height: 50px
          margin: 0 20px 0 0
          border: 3px solid #f15e63
          border-radius: 50px
          background: #f15e63
          img
            width: 30px
            height: 30px
            margin-right: 10px
          p 
            font-weight: bold
            color: #fff
      .ios-button
        a
          display: flex
          justify-content: center
          align-items: center
          width: 200px
          height: 50px
          border: 3px solid #fff
          border-radius: 50px
          img 
            width: 30px
            height: 30px
            margin-right: 10px
          p
            font-weight: bold
            color: #fff
            
  .footer-section_bottom
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 50px
    background: #F15E63
    // height: 200px
    .footer-menu
      display: flex
      .footer-mainmenu
        display: flex
        flex-direction: column
        .menu 
          display: flex
          flex-direction: column
          align-items: center
          li
            text-align: center
            margin: 10px 0
      .footer-submenu
        display: flex
        flex-direction: column
        .submenu
          display: flex
          flex-direction: column
          align-items: center
          li
            text-align: center
            margin: 10px 0
            font-weight: 600
    .social-network
      display: flex
      align-items: center
      justify-content: space-around
      width: 200px
      height: 80px
      .instagram
        width: 40px
        height: 40px
        color: #fff
      .facebook
        width: 40px
        height: 40px
        color: #fff
      .telegram
        width: 40px
        height: 40px
        color: #fff
@media (max-width: 750px)
  .footer-section_head
    flex-direction: column
    .footer-logo
      margin-bottom: 30px
    .footer-buttons
      .android-button
        margin-right: 20px
        a
          width: 150px!important
          height: 40px!important
          img 
            width: 20px!important
            height: 20px!important
          p
            font-size: 14px
      .ios-button
        a
          width: 150px!important
          height: 40px!important
          img 
            width: 20px!important
            height: 20px!important
          p
            font-size: 14px
@media (max-width: 380px)
  .footer-buttons
    flex-direction: column!important
  .footer-logo
    justify-content: center!important
    img
      width: 50px!important
      height: 50px!important
      margin-right: 10px!important
    h2
      font-size: 30px!important
  .android-button
    margin-right: 0!important
  .social-network
    .instagram
      width: 35px!important
      height: 35px!important
    .facebook
      width: 35px!important
      height: 35px!important
    .telegram
      width: 35px!important
      height: 35px!important
@media (max-width: 600px)
  .footer-section_bottom
    flex-direction: column!important
    .footer-menu
      flex-direction: column!important
      margin-top: 50px
      .footer-mainmenu
        .menu
          padding: 0
    .social-network
      margin-bottom: 20px!important
</style>