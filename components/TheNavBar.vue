<template>
 <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/" ><img src="~/assets/logo.png" alt="Logo"></nuxt-link>
          <span class="navbar-burger burger" data-target="navbarMenu" :class="{'is-active' : isActive}" @click=" isActive = !isActive ">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu" :class="{'is-active' : isActive}">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/" >บทซิกิรฺ</nuxt-link>
            <nuxt-link class="navbar-item" to="/zikirtime" >เวลาอ่านซิกิรฺ</nuxt-link>           
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>


<style>
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
