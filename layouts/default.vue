<template>
  <section class="hero is-primary is-fullheight">
    <nav-bar></nav-bar>
    <div class="hero-body">
      <div class="container has-text-centered">
       <nuxt />
      </div>
    </div>
    <foot-bar></foot-bar>
  </section>
</template>

<script>
import NavBar from '~/components/TheNavBar'
import FootBar from '~/components/TheFootBar'

export default {
  components: {
    NavBar, FootBar
  }
}
</script>


<style>
 html,body {
  font-family: 'Kanit', sans-serif;
}
.hero.is-primary {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('/dua-azkar/img/bg.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
 </style>
 
