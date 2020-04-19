<template>
  <section class="question-section" id="div">
    <div class="question-blok">
      <div class="section-title">
        <h1>Вопросы и ответы</h1>
      </div>
      <div class="question">
        <div class="section-main" v-on:click="show = !show">
          <a class="question-title" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Что такое рейтинг пассажира?
          </a>
          <plus-icon class="plus" :size="25"/>
        </div>
        <div class="collapse"  v-if="show">
          Рейтинг пассажира формируется автоматически на основе его истории заказов, 
          а также зависит от наличия: ложных заказов, жалоб со стороны водителя о конфликте, неоплаченных поездок.
        </div>
      </div>
      <div class="question">
        <div class="section-main" v-on:click="show1 = !show1">
          <a class="question-title" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Как устанавливать цену, если я не ездил по этому маршруту?
          </a>
          <plus-icon class="plus" :size="25"/>
        </div>
        <div class="collapse"  v-if="show1">
          Оплатить поездку можно наличными или с помощью онлайн-перевода, предварительно указав этот 
          способ при оформлении заказа. Оплата банковской картой в сервисе не предусмотрена. 
          Это делает поездки еще выгоднее, так как позволяет избежать дополнительной комиссии банка.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  data: () => ({
    active: false,
    show: false,
    show1: false
  })
}
</script>


<style lang="sass">
.question-section
  display: flex
  justify-content: center
  width: 100%
  margin-top: 30px
  .question-blok
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    width: 50%
    .section-title
      margin-bottom: 30px
      text-align: center
      width: 100%
      h1
        font-size: 35px
    .question
      width: 520px
      margin-bottom: 10px
      .section-main
        display: flex
        justify-content: space-between
        align-items: center
        width: 100%
        height: 50px
        .question-title
          text-decoration: none
          color: #000
          font-weight: 500
          margin-right: 20px
        .plus
          color: #F15E63
          cursor: pointer
      .collapse
        display: flex
        justify-content: center
        width: 100%
        padding: 20px 20px 20px 0
        color: #333
      
      
@media (max-width: 580px) 
  .question
    width: 450px!important
@media (max-width: 580px) 
  .question
    width: 400px!important
  .section-title
    h1
      font-size: 30px!important
@media (max-width: 450px) 
  .question
    width: 350px!important
@media (max-width: 390px)
  .question 
    width: 300px!important
@media (max-width: 340px)
  .question 
    width: 260px!important
</style>