<template>
  <section>
    <div class="questionBlog">
      <div class="section-header">
        <h1>Вопросы и ответы</h1>
      </div>
      <div class="questions">
        <ul class="question-list">
          <li class="question-list_item">
            <a href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="fa fa-minus-circle"></i></a>
            <div id="faq1" class="collapse">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. 
                Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    active: false,
  })
}
</script>


<style lang="sass">
section 
  display: flex
  justify-content: center
  background: #fff
  height: 90vh
  .questionBlog
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    padding-top: 5%
    width: 80%
    border: 1px solid #000    
</style>