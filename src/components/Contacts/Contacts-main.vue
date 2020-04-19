<template>
  <div class='contacts'>
    <div class="contacts__head">
      <h1 class="contacts__head__title">Наши контакты</h1>
    </div>
    <div class="contacts__main">
      <div class="write-us">
        <!-- <img src="../../assets/ContactsPage/mail.png" alt="" class="write-us__image"> -->
        <email-outline-icon class="img" :size="60"/>
        <div class="write-us__info">
          <div class="write-us__info__item">
            <p class="write-item__title">Сотрудничество и реклама</p>
            <p class="write-item__info">marketing@fix-up.org</p>
          </div>
          <div class="write-us__info__item">
            <p class="write-item__title">PR-департамент</p>
            <p class="write-item__info">pr@fix-up.org</p>
          </div>
          <div class="write-us__info__item">
            <p class="write-item__title">Служба поддержки</p>
            <p class="write-item__info">support@fix-up.org</p>
          </div>
        </div>
      </div>
      <div class="call-us">
        <!-- <img src="../../assets/ContactsPage/phone.png" alt="" class="call-us__image"> -->
        <phone-icon class="img" :size="60"/>
        <div class="call-us__info">
          <div class="call-us__info__item">
            <p class="call-item__title">Казахстан</p>
            <p class="call-item__info">+7 702 545-72-03</p>
          </div>
        </div>
      </div>
      <div class="social-us">
        <!-- <img src="../../assets/ContactsPage/account.png" alt="" class=""> -->
        <account-icon class="img" :size="60"/>
        <div class="social-us__info">
          <telegram-icon class="telegram" :size="40"/>
          <whatsapp-icon class="whatsapp" :size="40"/>
          <instagram-icon class="instagram" :size="40"/>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'ContactsMain',
  components: {},
  props: {},
  data () {
    return {}
  },
}
</script>
 
<style lang='sass' scoped>
  .contacts
    display: flex
    flex-direction: column
    align-items: center
    &__head
      display: flex
      justify-content: center
      align-items: center
      height: 200px
      width: 100%
      background: #F29291
      &__title
        font-size: 40px
        color: #fff
        text-align: center
    &__main
      display: flex
      align-items: center
      justify-content: space-between
      width: 55%
      margin-top: 50px
      .write-us
        display: flex
        flex-direction: column
        align-items: center
        height: 200px
        .img 
          margin-bottom: 20px
        &__info
          display: flex
          flex-direction: column
          align-items: center
          &__item
            display: flex
            flex-direction: column
            align-items: center
            margin-bottom: 20px
            .write-item__title
              font-size: 18px
              color: #282C34
              font-weight: 500
              margin-bottom: 5px
            .write-item__info
              font-size: 16px
              color: #F15E63
              font-weight: 500
      .call-us
        display: flex
        flex-direction: column
        align-items: center
        height: 200px
        .img
          margin-bottom: 20px
        &__info
          display: flex
          flex-direction: column
          align-items: center
          &__item
            display: flex
            flex-direction: column
            align-items: center
            .call-item__title
              font-size: 18px
              color: #282C34
              font-weight: 500
              margin-bottom: 5px
            .call-item__info
              font-size: 16px
              color: #F15E63
              font-weight: 500
      .social-us
        display: flex
        flex-direction: column
        align-items: center
        height: 200px
        .img
          margin-bottom: 20px
        &__info
          .instagram
            width: 35px
            height: 35px
            color: #F15E63
            cursor: pointer
          .whatsapp 
            width: 35px
            height: 35px
            color: #F15E63
            margin-right: 10px
            cursor: pointer
          .telegram
            width: 35px
            height: 35px
            color: #F15E63
            margin-right: 10px
            cursor: pointer
  @media (max-width: 1150px)
    .contacts__main
      width: 60%
  @media (max-width: 1000px)
    .contacts__main
      width: 70%
  @media (max-width: 860px)
    .contacts__main
      width: 80%
  @media (max-width: 750px)
    .contacts__main
      width: 90%
  @media (max-width: 650px)
    .contacts__main
      flex-direction: column
      .write-us
        height: 300px
  @media (max-width: 350px)
    .contacts__head__title
      font-size: 30px
  @media (max-width: 500px)
    .social-us
      height: 100px!important
    .call-us
      height: 150px!important
</style>