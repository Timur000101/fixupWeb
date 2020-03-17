<template>
  <section class="section3">
    <div class="why-content3">
      <div class="why-content_title3">
          <p>FixUp предлагает наиболее удобные<br> и близкие варианты!</p>
      </div>
      <div class="why-content_main3">
          <div class="why-content_main_info3">
            <h1>Keep Track Of Stock <br> Wherever You Are</h1>
            <p class="why-content_main_info_text3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
              Neque, delectus facere totam ducimus amet ipsa nam, <br> quidem 
              eligendi.
            </p>
            <div class="mobile-platform3">
              <div class="android-button3">
                <a href="#">
                  <img src="@/assets/os/android.png" alt="">
                  <p>Скачать сейчас</p>
                </a>
              </div>
            </div>
          </div>
          <div class="why-content_main_images3">
            <!-- <img class="background" src="@/assets/Slides/Slides-3/back_1.png" alt="background"> -->
            <img id="map" class="map" src="@/assets/Slides/Slides-3/map.svg" alt="map">
            <img id="man_location" class="man_location" src="@/assets/Slides/Slides-3/man_location.svg" alt="man_location">
            <img id="woman_location" class="woman_location" src="@/assets/Slides/Slides-3/woman_location.svg" alt="woman_location">
            <img id="road" class="road" src="@/assets/Slides/Slides-3/road.svg" alt="road">
          </div>
          <div class="media-photo3">
            <img id="slide3" class="slide3" src="@/assets/Slides/Slides-3/Slide3.svg" alt="slide3">
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
  }
}
</script>

<style lang="sass">
.section3
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  padding: 0 0 250px 0
  .why-content3
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    .why-content_title3
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
    .why-content_main3
      display: flex
      justify-content: space-between
      align-items: center
      width: 90%
      margin-top: 50px 
      .why-content_main_info3
        z-index: 2
        display: flex
        flex-direction: column
        width: 100%
        
        h1
          font-size: 30px
          color: #151948
          margin-bottom: 20px
        .why-content_main_info_text3
          font-size: 20px
          margin-bottom: 30px
          color: #000
        .mobile-platform3
          display: flex
          justify-content: flex-start
          align-items: center
          margin-top: 20px 
          width: 100%
          .android-button3
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
      .why-content_main_images3 
        position: relative 
        .background
          position: absolute
          top: -70px  
        .floor3
          position: absolute;
          top: 365px
          right: 0
          width: 100%
          height: 350px
          z-index: 1
        .map
          position: absolute
          top: -200px
          right: 50px
          width: 450px
        .man_location
          position: absolute
          width: 120px
          right: 370px
          z-index: 1
        .woman_location
          position: absolute
          width: 120px
          right: 80px
          top: 60px
          z-index: 1
        .road
          position: absolute
          width: 350px
          right: 110px
          top: 150px
      .media-photo
        display: none
@media (max-width: 1140px)
  #map
    right: 30px
@media (max-width: 1100px)
  .section3
    padding: 0
  .why-content_main_images3
    display: none
  .why-content_main3
    justify-content: center !important
    text-align: center !important
    flex-direction: column !important
    width: 100% !important
  .why-content_main_info3
    text-align: center !important
    margin-bottom: 30px
  .why-content_main_info_text3
    text-align: center !important
    padding: 0 20px
  .mobile-platform3
    justify-content: center !important
  .android-button3
    margin: 0 !important
  .media-photo3
    display: block !important
    width: 100% !important
    margin-top: 30px !important
    img
      width: 100% !important
    #slide3
      width: 80% !important
@media (max-width: 500px)
  .why-content_title3
    p
      font-size: 30px !important
  .why-content_main_info_text3
    font-size: 18px !important
  .why-content_main_info3
    h1
      font-size: 25px !important
</style>