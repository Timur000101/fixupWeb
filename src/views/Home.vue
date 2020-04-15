<template>
  <div class="home">
    <Navbar style="background: #F29291; z-index: 9999!important"/>
    <MainPage style="overflow-x: hidden; overflow-y: hidden; background: #F29291;"/>
    <WhyWe style="  overflow-x: hidden; overflow-y: hidden;"/>
    <WhyWe2 style="margin-top: 50px;  overflow-x: hidden; overflow-y: hidden;" />
    <WhyWe3 style="background: #F7E5E2" />
    <WhyWe4 />
    <QuestionBlog />
    <Footer style="background: #F5AEAE;"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import MainPage from "../components/Home/MainPage.vue"
import WhyWe from "../components/Home/WhyWe.vue"
import WhyWe2 from "../components/Home/WhyWe2.vue"
import WhyWe3 from "../components/Home/WhyWe3.vue"
import WhyWe4 from "../components/Home/WhyWe4.vue"
import Footer from "../components/Footer.vue"
import QuestionBlog from '../components/Qanswers/QuestionBlog.vue'
export default {
  name: 'Home',
  components: {
    Navbar, MainPage, WhyWe, WhyWe2, WhyWe3, WhyWe4, Footer, QuestionBlog
  },
  data: () => ({
    
  }),
  created() {
    window.onload = function() {
      // First slide constants
      const WOMAN = document.querySelector("#woman")
      const COMPUTER = document.querySelector('#computer')
      const SPARK = document.querySelector('#spark')
      const SMOKE = document.querySelector('#smoke')
      // Second slide constants
      const MAN = document.querySelector("#man")
      const STAIRS = document.querySelector("#stairs")
      const PICTURE = document.querySelector("#picture")
      const CLOCK = document.querySelector("#clock")
      // Third slide constants
      const MAN_LOCATION = document.querySelector("#man_location")
      const WOMAN_LOCATION = document.querySelector("#woman_location")
      const ROAD = document.querySelector("#road")
      // Forth slide constants
      const MAN_WOMAN = document.querySelector("#man_woman")
      const BOOKS = document.querySelector("#books")
      const COMP_TABLE = document.querySelector("#comp_table")
      const STARS = document.querySelector('#stars')


      // First slide listeners
      window.addEventListener('scroll', scrollWoman)
      window.addEventListener('scroll', scrollComputer)
      window.addEventListener('scroll', scrollSpark)
      window.addEventListener('scroll', scrollSmoke)
      // Second slide listeners
      window.addEventListener('scroll', scrollMan)
      window.addEventListener('scroll', scrollStairs)
      window.addEventListener('scroll', scrollPicture)
      window.addEventListener('scroll', scrollClock)
      // Third slide listeners
      window.addEventListener('scroll', scrollManlocation)
      window.addEventListener('scroll', scrollWomanlocation)
      window.addEventListener('scroll', scrollRoad) 
      // Forth slide listeners 
      window.addEventListener('scroll', scrollManwoman)
      window.addEventListener('scroll', scrollBooks)
      window.addEventListener('scroll', scrollComptable)
      window.addEventListener('scroll', scrollStars)


      // First slide illustrations
      // Scroll computer table animation
      function scrollComputer() {
        if(window.scrollY >= 650) {
          COMPUTER.style.opacity = '1'
          COMPUTER.style.transition = '0.9s ease-in-out'
          COMPUTER.style.transform = 'translateX(0px)'
        } else {
          COMPUTER.style.opacity = '0'
          COMPUTER.style.transform = 'translateX(100px)'
        }
      }
      // Scroll woman animation
      function scrollWoman() {
        if(window.scrollY >= 550) {
          WOMAN.style.opacity = '1'
          WOMAN.style.transform = 'translateX(0px)'
          WOMAN.style.transition = '0.9s ease-in-out'
        } else {
          WOMAN.style.opacity = '0'
          WOMAN.style.transform = 'translateX(200px)'
        }
      }
      // Scroll spark animation
      function scrollSpark() {
        if(window.scrollY >= 750) {
          SPARK.style.opacity = '1'
          SPARK.style.transition = '1s ease-in-out'
        } else {
          SPARK.style.opacity = '0'
        }
      }
      // Scroll smoke animation
      function scrollSmoke() {
        if(window.scrollY >= 850) {
          SMOKE.style.opacity = '1'
          SMOKE.style.transform = 'translateY(0px)'
          SMOKE.style.transition = '0.9s ease-in-out'
        } else {
          SMOKE.style.opacity = '0'
          SMOKE.style.transform = 'translateY(50px)'
        }
      }


      // Second slide illustrations
      function scrollMan() {
        if(window.scrollY >= 1200) {
          MAN.style.opacity = '1'
          MAN.style.transition = '0.8s ease-in-out'
          MAN.style.transform = 'translateX(0px)'
        } else {
          MAN.style.opacity = '0'
          MAN.style.transform = 'translateX(-100px)'
        }
      }

      function scrollStairs() {
        if(window.scrollY >= 1250) {
          STAIRS.style.opacity = '1'
          STAIRS.style.transition = '0.8s ease-in-out'
          STAIRS.style.transform = 'translateX(0px)'
        } else {
          STAIRS.style.opacity = '0'
          STAIRS.style.transform = 'translateX(-100px)'
        }
      }

      function scrollPicture() {
        if(window.scrollY >= 1300) {
          PICTURE.style.opacity = '1'
          PICTURE.style.transition = '0.6s ease-in-out'
          PICTURE.style.transform = 'translateX(0px)'
        } else {
          PICTURE.style.opacity = '0'
          PICTURE.style.transform = 'translateX(-50px)'
        }
      }

      function scrollClock() {
        if(window.scrollY >= 1300) {
          CLOCK.style.opacity = '1'
          CLOCK.style.transition = '0.6s ease-in-out'
          CLOCK.style.transform = 'translateX(0px)'
        } else {
          CLOCK.style.opacity = '0'
          CLOCK.style.transform = 'translateX(-50px)'
        }
      }


      // Third slide illustrations
      function scrollManlocation() {
        if(window.scrollY >= 2000) {
          MAN_LOCATION.style.opacity = '1'
          MAN_LOCATION.style.transition = '0.6s ease-in-out'
          MAN_LOCATION.style.transform = 'translateX(0px)'
        } else {
          MAN_LOCATION.style.opacity = '0'
          MAN_LOCATION.style.transform = 'translateX(-200px)'
        }
      }

      function scrollRoad() {
        if(window.scrollY >= 2150) {
          ROAD.style.opacity = '1'
          ROAD.style.transition = '0.8s ease-in-out'
          ROAD.style.transform = 'translateX(0px)'
        } else {
          ROAD.style.opacity = '0'
          ROAD.style.transform = 'translateX(50px)'
        }
      }

      function scrollWomanlocation() {
        if(window.scrollY >= 2250) {
          WOMAN_LOCATION.style.opacity = '1'
          WOMAN_LOCATION.style.transition = '0.8s ease-in-out'
          WOMAN_LOCATION.style.transform = 'translateX(0px)'
        } else {
          WOMAN_LOCATION.style.opacity = '0'
          WOMAN_LOCATION.style.transform = 'translateX(100px)'
        }
      }

      // Forth slide illustrations
      function scrollBooks() {
        if(window.scrollY >= 2500) {
          BOOKS.style.opacity = '1'
          BOOKS.style.transition = '0.9s ease-in-out'
          BOOKS.style.transform = 'translateX(0px)'
        } else {
          BOOKS.style.opacity = '0'
          BOOKS.style.transform = 'translateX(-100px)'
        }
      }

      function scrollComptable() {
        if(window.scrollY >= 2600) {
          COMP_TABLE.style.opacity = '1'
          COMP_TABLE.style.transition = '1s ease-in-out'
          COMP_TABLE.style.transform = 'translateX(0px)'
        } else {
          COMP_TABLE.style.opacity = '0'
          COMP_TABLE.style.transform = 'translateX(-100px)'
        }
      }

      function scrollManwoman() {
        if(window.scrollY >= 2500) {
          MAN_WOMAN.style.opacity = '1'
          MAN_WOMAN.style.transition = '0.8s ease-in-out'
          MAN_WOMAN.style.transform = 'translateX(0px)'
        } else {
          MAN_WOMAN.style.opacity = '0'
          MAN_WOMAN.style.transform = 'translateX(-100px)'
        }
      }

      function scrollStars() {
        if(window.scrollY >= 2750) {
          STARS.style.opacity = '1'
          STARS.style.transition = '0.8s ease-in-out'
        } else {
          STARS.style.opacity ='0'
        }
      }
    }
  }
}
</script>

<style lang="sass">
</style>
