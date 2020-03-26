<template>
  <section class="section4">
    <div class="why-content4">
      <div class="why-content_title4">
          <p>FixUp объединяет<br> заказчиков и специалистов!</p>
      </div>
      <div class="why-content_main4">
          <div class="why-content_main_images4">
            <img id="wall4" class="wall4" src="@/assets/Slides/Slides-4/wall4.svg" alt="wall">
            <img id="floor4" class="floor4" src="@/assets/Slides/Slides-4/floor44.svg" alt="floor">
            <img id="man_woman" class="man_woman" src="@/assets/Slides/Slides-4/man_woman.svg" alt="man_woman">
            <img id="comp_table" class="comp_table" src="@/assets/Slides/Slides-4/comp_tablel.svg" alt="comp_table">
            <img id="books" class="books" src="@/assets/Slides/Slides-1/Ресурс9.svg" alt="">
          </div>
          <div class="why-content_main_info4">
            <p class="why-content_main_info_text4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
              Neque, delectus facere totam ducimus amet ipsa nam, <br> quidem 
              eligendi.
            </p>
            <div class="mobile-platform4">
              <div class="android-button4">
                <a href="#">
                  <img src="@/assets/os/ios.png" alt="">
                  <p>Скачать сейчас</p>
                </a>
              </div>
            </div>
          </div>
          <div class="media-photo4">
            <img id="slide4" class="slide4" src="@/assets/Slides/Slides-4/Slide-4.svg" alt="slide4">
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
.section4
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%  
  padding-bottom: 250px
  .why-content4
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    // background: #F1FAFF;
    .why-content_title4
      z-index: 2
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      margin: 50px 0 0 0
      color: #353551
      p 
        font-weight: bold
        font-size: 35px
    .why-content_main4
      display: flex
      justify-content: space-between
      align-items: center
      width: 90%
      margin-top: 20px 
      .why-content_main_images4
        .wall4
          position: absolute
          width: 100%
          left: 0
          top: 0
        .floor4
          position: absolute
          width: 100%
          left: 0
          bottom: -238px
        .man_woman
          position: absolute
          width: 450px
          top: 150px
          left: 200px
          z-index: 1
        .comp_table
          position: absolute
          width: 270px
          top: 250px
          left: 260px
        .books
          position: absolute
          width: 200px
          top: 60px
          left: 100px
      .why-content_main_info4
        z-index: 2
        display: flex
        text-align: right
        flex-direction: column
        width: 100%
        h1
          font-size: 30px
          color: #151948
          margin-bottom: 20px
        .why-content_main_info_text4
          display: flex
          align-items: flex-end
          justify-content: flex-end
          height: 200px
          font-size: 20px
          margin-bottom: 30px
        .mobile-platform4
          display: flex
          justify-content: flex-end
          align-items: center
          margin-top: 20px
          width: 100%
          .android-button4
            margin: 0 20px 0 0
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
@media (max-width: 1295px)
  #wall4
    top: 19%  
  #floor4
    top: 420px
  #books
    width: 180px
    top: 90px
  #man_woman
    width: 400px
    top: 190px
    left: 230px
  #comp_table
    width: 250px
@media (max-width: 1200px)
  #wall4
    top: 21%
  #floor4
    top: 400px
@media (max-width: 1100px)
  .section4
    padding-bottom: 20px
  .why-content_main_images4
    display: none
  .why-content_main4
    justify-content: center !important
    width: 100%!important
    flex-direction: column!important
    text-align: center!important
  .why-content_main_info4
    text-align: center !important
    margin-bottom: 20px !important
    width: 100% !important
  .why-content_title4
    text-align: center !important
  .why-content_main_info_text4
    padding: 0 20px !important
  .mobile-platform4
    justify-content: center !important
  .android-button4
    margin: 0 !important
  .media-photo4
    display: block !important
    width: 100% !important
    img
      width: 100% !important
    #slide4
      width: 80% !important
@media (max-width: 500px)
  .why-content_title4
    p
      font-size: 30px !important
  .why-content_main_info_text4
    font-size: 18px !important
    height: 100px!important
  .why-content_main_info4
    h1
      font-size: 25px !important
</style>