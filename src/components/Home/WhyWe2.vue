<template>
  <section class="section2">
    <div class="why-content2">
      <div class="why-content_title2">
          <p>Долго ждете нового заказа?</p>
      </div>
      <div class="why-content_main2">
          <div class="why-content_main_images2">
            <img class="floor" src="@/assets/Slides/Slides-2/floor3.png" alt="">
            <img id="man" class="man" src="@/assets/Slides/Slides-2/man_with_table.svg" alt="">
            <img id="clock" class="clock" src="@/assets/Slides/Slides-2/clock.svg" alt="">
            <img id="picture" class="picture" src="@/assets/Slides/Slides-2/picture.svg" alt="">
            <img id="stairs" class="stairs" src="@/assets/Slides/Slides-2/stairs.svg" alt="">
          </div>
          <div class="why-content_main_info2">
            <p class="why-content_main_info_text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
              Neque, delectus facere totam ducimus amet ipsa nam, <br> quidem 
              eligendi.
            </p>
            <div class="mobile-platform2">
              <div class="android-button2">
                <a id="button" href="#">
                  <img src="@/assets/os/ios.png" alt="">
                  <p>Скачать сейчас</p>
                </a>
              </div>  
            </div>
          </div>
          <div class="media-photo2">
            <img id="slide2" class="slide2" src="@/assets/Slides/Slides-2/Slide2.svg" alt="slide2">
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.section2
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%  
  padding: 0 0 300px 0
  .why-content2
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    // background: #F1FAFF;
    .why-content_title2
      z-index: 2
      display: flex
      justify-content: center
      align-items: center
      margin: 50px 0 0 0
      padding: 0 10px
      color: #353551
      p 
        font-weight: bold
        font-size: 35px
    .why-content_main2
      display: flex
      justify-content: space-between
      align-items: center
      width: 90%
      margin-top: 20px 
      margin-bottom: 20px
      .why-content_main_images2
        .floor
          position: absolute;
          top: 355px
          right: 0
          width: 100%
          height: 350px
          z-index: 1
        .man
          position: absolute;
          bottom: -100px
          left: 40%
          height: 310px
          z-index: 1
        .clock
          position: absolute
          width: 80px
          top: 130px
          left: 40%      
          z-index: 1    
        .picture
          position: absolute
          width: 60px
          top: 150px
          left: 30%
          z-index: 1
        .stairs
          position: absolute
          width: 180px
          top: 39%
          left: 15%
          z-index: 1

      .why-content_main_info2
        z-index: 2
        display: flex
        text-align: right
        flex-direction: column
        width: 100%
        h1
          font-size: 30px
          color: #151948
          margin-bottom: 20px
        .why-content_main_info_text2
          display: flex
          justify-content: flex-end
          align-items: flex-end
          font-size: 20px
          margin-bottom: 30px
          padding: 0 20px
          height: 200px
        .mobile-platform2
          display: flex
          justify-content: flex-end
          align-items: center
          margin-top: 20px
          width: 100%
          .android-button2
            margin-right: 20px
            a
              display: flex
              justify-content: center
              align-items: center
              width: 200px
              height: 50px
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
      .media-photo2
        display: none
// media
@media (max-width: 1295px)
  #man
    left: 35%
@media (max-width: 1250px)
  #man
    left: 30%
  #stairs
    left: 10%
  #clock
    left: 35%
  #picture
    left: 25%
@media (max-width: 1170px)
  #man
    left: 28%
  #stairs
    left: 5%
@media (max-width: 1100px)
  .section2
    padding: 0 !important
  .why-content_main_images2
    display: none
  .why-content_main2
    justify-content: center !important
    text-align: center !important
    flex-direction: column !important
    width: 100% !important
  .why-content_main_info2
    text-align: center !important
    margin-bottom: 30px
  .mobile-platform2
    justify-content: center !important
  .android-button2
    margin: 0 !important
  .why-content_title2
    text-align: center !important
  .media-photo2
    display: block !important
    width: 100% !important
    img
      width: 100% !important
    #slide2
      width: 80% !important
@media (max-width: 500px)
  .why-content_title2
    p
      font-size: 30px !important
  .why-content_main_info_text2
    font-size: 18px !important
    height: 100px!important
  .why-content_main_info2
    h1
      font-size: 25px !important
</style>