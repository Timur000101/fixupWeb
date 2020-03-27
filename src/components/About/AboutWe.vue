<template>
  <div class="about-we">
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
    <div class="main-content">
      <div class="left-main-info">
        <h2 class="left-main-info__title">Наша задача</h2>
        <p class="left-main-info__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br> 
          Molestiae, laboriosam eum ipsam voluptas repellendus iure.<br> Bdolor sit amet consectetur adipisicing elit.<br> 
          Molestiae.
        </p>
        <div class="download-buttons">
          <div class="android-button">
            <a href="#">
              <img src="@/assets/os/android.png" alt="">
              <p>Скачать сейчас</p>
            </a>
          </div>
          <div class="ios-button">
            <a href="#">
              <img src="@/assets/os/apple-logo-red.png" alt="">
              <p>Скачать сейчас</p>
            </a>
          </div>
        </div>
      </div>
      <div class="right-main-cards">
        <div class="right-main-cards__first-column">
          <div class="right-main-cards__first-column__first-row">
            <img src="#" alt="" class="right-main-cards__first-column__first-row__image">
            <h4 class="right-main-cards__first-column__first-row__title">
              Lorem ipsum dolor sit amet.
            </h4>
            <p class="right-main-cards__first-column__first-row__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ex!
            </p>
          </div>
          <div class="right-main-cards__first-column__second-row">
            <img src="#" alt="" class="right-main-cards__first-column__second-row__image">
            <h4 class="right-main-cards__first-column__second-row__title">
              Lorem ipsum dolor sit.
            </h4>
            <p class="right-main-cards__first-column__second-row__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel quos est!
            </p>
          </div>
        </div>
        <div class="right-main-cards__second-column">
          <div class="right-main-cards__second-column__first-row">
            <img src="" alt="" class="right-main-cards__second-column__first-row__image">
            <h4 class="right-main-cards__second-column__first-row__title">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <p class="right-main-cards__second-column__first-row__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente?
            </p>
          </div>
          <div class="right-main-cards__second-column__second-row">
            <img src="" alt="" class="right-main-cards__second-column__second-row__image">
            <h4 class="right-main-cards__second-column__second-row__title">
              Lorem ipsum dolor sit.
            </h4>
            <p class="right-main-cards__second-column__second-row__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod molestias voluptate est.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name: 'AboutWe',
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
.about-we
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  .main-content
    display: flex
    justify-content: space-between
    align-items: center
    width: 80%
    // height: 70vh
    margin-bottom: 40px
    .left-main-info
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center
      // width: 500px
      &__title
        font-size: 30px
        margin-bottom: 10px
      &__text
        margin-bottom: 20px
      .download-buttons
        display: flex
        flex-direction: column
        justify-content: center
        align-items: flex-start
        width: 100%
        .android-button
          margin-bottom: 10px
          a
            display: flex
            justify-content: center
            align-items: center
            width: 200px
            height: 40px
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
            height: 40px
            border: 3px solid #f15e63
            border-radius: 50px
            img 
              width: 30px
              height: 30px
              margin-right: 10px
            p
              font-weight: bold
              color: #f15e63
    .right-main-cards
      display: flex
      justify-content: space-evenly
      align-items: center
      &__first-column
        display: flex
        flex-direction: column
        align-items: center
        &__first-row
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          text-align: center
          margin-bottom: 20px
          width: 300px
          padding: 20px 10px
          border-radius: 15px
          -webkit-box-shadow: 0px 0px 12px 0px #D2D2D2
          -moz-box-shadow: 0px 0px 12px 0px #D2D2D2
          box-shadow: 0px 0px 12px 0px #D2D2D2
          &__image
            width: 60px
            height: 60px
            background: #ccc
        &__second-row
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          text-align: cente+r
          width: 300px
          padding: 20px 10px
          border-radius: 15px
          -webkit-box-shadow: 0px 0px 12px 0px #D2D2D2
          -moz-box-shadow: 0px 0px 12px 0px #D2D2D2
          box-shadow: 0px 0px 12px 0px #D2D2D2
          &__image
            width: 60px
            height: 60px
            background: #ccc
      &__second-column
        display: flex
        flex-direction: column
        align-items: center
        margin-left: 20px
        margin-top: 150px 
        &__first-row
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          text-align: center
          width: 300px
          padding: 20px 10px
          margin-bottom: 20px
          border-radius: 15px
          -webkit-box-shadow: 0px 0px 12px 0px #D2D2D2
          -moz-box-shadow: 0px 0px 12px 0px #D2D2D2
          box-shadow: 0px 0px 12px 0px #D2D2D2
          &__image
            width: 60px
            height: 60px
            background: #ccc
        &__second-row
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          text-align: center
          width: 300px
          padding: 20px 10px
          border-radius: 15px
          -webkit-box-shadow: 0px 0px 12px 0px #D2D2D2
          -moz-box-shadow: 0px 0px 12px 0px #D2D2D2
          box-shadow: 0px 0px 12px 0px #D2D2D2
          &__image
            width: 60px
            height: 60px
            background: #ccc
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
@media (max-width: 1260px)
  .main-content 
    flex-direction: column
    margin-top: 50px
    .left-main-info
      align-items: center!important
      &__text
        text-align: center
      .download-buttons
        align-items: center!important
        .android-button a
          margin-right: 0!important
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
        text-align: center
    .users
      .users-number
        span
          font-size: 35px
        p
          font-size: 30px
      .users-card-title
        font-size: 25px !important
  .right-main-cards
    flex-direction: column!important
    margin-top: 50px
    &__second-column
      margin-top: 20px!important
  @media (max-width: 380px)
    .right-main-cards
      &__first-column
        &__first-row
          width: 250px!important
        &__second-row
          width: 250px!important
      &__second-column
        &__first-row
          width: 250px!important
        &__second-row
          width: 250px!important
</style>