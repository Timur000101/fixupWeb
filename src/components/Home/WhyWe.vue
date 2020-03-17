<template>
  <section id="whyWe-section">
    <div id="qwer" class="top-numbers-content">
      <div class="city">
        <div class="city-number">
          <animated-number
            :value="city"
            :formatValue="formatToPrice"
            :duration="6000"
          />
          <p>+</p>
        </div>
        <div class="city-card-title">
          городов
        </div>
      </div>
      <div class="happy-customers">
        <div class="happy-users-number">
          <animated-number
            :value="happy"
            :formatValue="formatToPrice"
            :duration="6000"
          />
          <p>тыс</p>
        </div>
        <div class="happy-card-title">
          довольных пользователей
        </div>
      </div>
      <div class="users">
        <div class="users-number">
          <animated-number
            :value="users"
            :formatValue="formatToPrice"
            :duration="6000"
          />
          <p>тыс</p>
        </div>
        <div class="users-card-title">
          заказов
        </div>
      </div>
    </div>

    <div class="why-content">
      <div class="why-content_title">
          <p>Срочно ищите специалиста?</p>
      </div>
      <div class="why-content_main">
        <div class="why-content_main_info">
          <h1>Keep Track Of Stock <br> Wherever You Are</h1>
          <p class="why-content_main_info_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Neque, delectus facere totam ducimus amet ipsa nam, <br> quidem 
            eligendi.
          </p>
          <div class="mobile-platform1">
            <div class="android-button1">
              <a href="#">
                <img src="@/assets/os/android.png" alt="">
                <p>Скачать сейчас</p>
              </a>
            </div>
          </div>
        </div>
        <div class="why-content_main_images">
          <img class="wall" src="@/assets/Slides/Slides-1/Ресурс11.svg" alt="">
          <img class="floor" src="@/assets/Slides/Slides-1/Floor4.png" alt="">
          <img id="books" class="books" src="@/assets/Slides/Slides-1/Ресурс9.svg" alt="">
          <img id="flowers" class="flowers" src="@/assets/Slides/Slides-1/flowers.svg" alt="">
          <img id="woman" class="woman" src="@/assets/Slides/Slides-1/Ресурс6.svg" alt="">
          <div class="computer-complect">
            <img id="computer" class="computer" src="@/assets/Slides/Slides-1/table.svg" alt="">
            <img id="spark" class="spark" src="@/assets/Slides/Slides-1/spark.svg" alt="">
            <img id="smoke" class="smoke" src="@/assets/Slides/Slides-1/smoke.svg" alt="">
          </div>
        </div>
        <div class="media-photo">
          <img id="slide1" class="slide1" src="@/assets/Slides/Slides-1/Slide12.svg" alt="SLide1">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      city: 15,
      happy: 259,
      users: 865,
      
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed (0)}`;
    }
  },
}
</script>

<style lang="sass">
section
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  padding: 0 0 150px 0
  .top-numbers-content 
    display: flex
    justify-content: space-around
    align-items: center
    width: 100%
    padding: 20px 0
    // height: 150px
    background: #F1FAFF
    .city 
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .city-number 
        display: flex
        font-size: 40px
        p 
          margin-left: 10px
      .city-card-title 
        font-size: 30px
      
    .happy-customers 
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .happy-users-number 
        display: flex
        font-size: 40px
        p 
          margin-left: 10px
      .happy-card-title 
        font-size: 30px
    .users 
      display: flex;
      flex-direction: column
      justify-content: center
      align-items: center
      .users-number 
        display: flex
        font-size: 40px
        p 
          margin-left: 10px
      .users-card-title 
        font-size: 30px
  
  .why-content
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    background: #F1FAFF;
    .why-content_title
      z-index: 2
      display: flex
      justify-content: center
      align-items: center
      margin: 50px 0 0 0
      color: #353551
      text-align: center
      p 
        font-weight: bold
        font-size: 35px
    .why-content_main
      display: flex
      justify-content: space-between
      align-items: center
      width: 90%
      margin-top: 50px 
      .why-content_main_info
        z-index: 2
        display: flex
        flex-direction: column
        width: 100%
        padding: 0 20px
        
        h1
          font-size: 30px
          color: #151948
          margin-bottom: 20px
        .why-content_main_info_text
          font-size: 20px
          margin-bottom: 30px
          padding: 0 10px
        .mobile-platform1
          display: flex
          justify-content: flex-start
          align-items: center
          margin-top: 20px
          width: 100%
          .android-button1
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
      .why-content_main_images
        .wall 
          position: absolute;
          top: 0
          right: 0
          width: 100%
          height: 420px
          z-index: 1
        .floor
          position: absolute;
          top: 365px
          right: 0
          width: 100%
          height: 350px
          z-index: 1
        .woman 
          position: absolute
          z-index: 1
          width: 70px
          top: 30%
          right: 15%
          transform: translateX(200px)
        .books
          position: absolute
          z-index: 1
          width: 200px
          top: 15%
          left: 45%
        .flowers
          position: absolute
          z-index: 1
          width: 70px
          left: 40%
          top: 50%
        .computer-complect
          // position: relative
          // right: 50%
        .computer
          position: absolute
          z-index: 1
          width: 260px
          right: 400px
          // bottom: 
        .spark
          position: absolute
          z-index: 1
          right: 375px
          top: 73%
          width: 100px
          height: 100px
        .smoke
          position: absolute
          z-index: 1
          width: 90px
          top: 55%
          right: 375px
      .media-photo
        display: none 
@media (max-width: 1295px)
  .wall 
    top: 20px !important
@media (max-width: 1247px)
  .wall
    top: 50px !important
  #woman
    width: 60px
  #computer
    width: 240px
    right: 315px
    // bottom: -15%
  #spark
    right: 24%
    width: 80px
  #smoke
    top: 60%
    right: 25%
    width: 80px
  #books
    width: 160px 
    top: 30% 
  #flowers
    width: 60px
    top: 55%
@media (max-width: 1115px)
  // #computer
  //   bottom: -5%
  #spark
    right: 27%
    top: 70%
  #smoke
    right: 29%
    top: 55%
@media (max-width: 1100px)
  #whyWe-section
    padding-bottom: 0 
  .why-content_main_images
    display: none
  .why-content_main
    justify-content: center !important
    text-align: center !important
    width: 100% !important
  .android-button1
    margin: 0 !important
  .mobile-platform1
    justify-content: center !important
  .why-content_main
    flex-direction: column
  .media-photo
    display: block !important
    width: 100% !important
    margin-top: 30px !important
    img
      width: 100% !important
    #slide1
      width: 80% !important
      margin-bottom: 50px
@media (max-width: 740px)
  .top-numbers-content
    margin: 0 20px
    flex-direction: column
    .city 
      margin-bottom: 50px
      .city-number
        span
          font-size: 35px
        p
          font-size: 35px
      .city-card-title
        font-size: 25px !important
    .happy-customers
      margin-bottom: 50px
      .happy-users-number
        span 
          font-size: 35px
        p
          font-size: 30px
      .happy-card-title
        font-size: 25px !important
    .users
      .users-number
        span
          font-size: 35px
        p
          font-size: 30px
      .users-card-title
        font-size: 25px !important
@media (max-width: 500px)
  .why-content_title
    p
      font-size: 30px !important
  .why-content_main_info_text
    font-size: 18px !important
  .why-content_main_info
    h1
      font-size: 25px !important

@media (max-width: 370px)
  .happy-card-title
    text-align: center !important

</style>