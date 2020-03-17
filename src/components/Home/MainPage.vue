<template>
  <div class="content">
    <div class="main-content">
      <div class="app-info">
        <h1 class="main-title">It’s All About Promote<br> Your Business</h1>
        <p class="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br> tempor anagi icdunt ut labore et dolore magna aliqua.</p>
        <div class="mobile-platform">
          <div class="android-button">
            <a href="#">
              <img src="@/assets/os/android.png" alt="">
              <p>Скачать сейчас</p>
            </a>
          </div>
          <div class="ios-button">
            <a href="#">
              <img src="@/assets/os/ios.png" alt="">
              <p>Скачать сейчас</p>
            </a>
          </div>
        </div>
      </div>
      <div class="app-phone">
        <img class="phone"  src="@/assets/Ресурс1.png" alt="">
      </div>
    </div>

    <div class="down-button_content">
      <div class="down-button">
        <img src="@/assets/Icons/icons8-arrow-pointing-down-50.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
export default {
  mounted() {
    let tlm = new TimelineMax()
    tlm
      .from('.main-title', {duration: 1, x: -100, opacity: 0})
      .from('.main-text', {duration: 0.7, y: 50, opacity: 0})
  },
}
</script>

<style lang="sass">
.content 
  display: flex
  flex-direction: column
  padding: 50px 0
  .main-content
    display: flex
    justify-content: space-between
    padding: 0 50px
    margin-bottom: 50px
    .app-info
      display: flex
      flex-direction: column
      align-items: flex-start
      h1 
        font-size: 40px
        color: #fff
        margin-bottom: 20px
      .main-text
        font-size: 20px
        color: #fff
        margin-bottom: 50px
.mobile-platform
  display: flex
  justify-content: flex-start
  align-items: center
  width: 100%
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
  // .ios-button:hover 
  //   background: #ccc
  //   border-radius: 50px

.app-phone 
  display: flex
  justify-content: center
  align-items: center
  padding-right: 50px
  .phone
    width: 550px
.down-button_content
  width: 100%
  display: flex
  justify-content: center
.down-button
  display: flex
  justify-content: center
  align-items: center
  width: 50px
  height: 50px
  border: 2px solid #fff
  border-radius: 50%
  cursor: pointer
  bottom: 15px
  left: 47% 
  animation-name: button_down
  animation-duration: 1.5s
  animation-timing-function: linear
  animation-iteration-count: infinite
  img
    margin: 3px 0 0 0
    padding: 0
    width: 45px 
    height: 35px


// media
@media (max-width: 909px)
  .app-phone
    display: none
  .content
    justify-content: center
  .app-info
    align-items: center
@media (max-width: 534px)
  .app-info
    align-items: center
    text-align: center
  .mobile-platform
    flex-direction: column
    justify-content: center
    align-items: center  
  .android-button
    a
      margin: 0 0 20px 0 !important
      height: 40px !important
  .ios-button
    a
      height: 40px !important
@media (max-width: 380px)
  .main-title
    font-size: 30px!important
  .main-text
    font-size: 16px!important
@keyframes button_down
  0% 
    opacity: 0
  50% 
    opacity: 1
  100% 
    opacity: 0
</style>