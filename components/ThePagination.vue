<template>
<footer class="card-footer">
  <p class="card-footer-item">
   <a href="#" @click.prevent="movePage(-1)" :disabled="currentPage === 0" class="button is-primary">
      <span class="icon"><i class="fa fa-angle-double-left"></i></span>
      <span>ก่อนหน้า</span>
    </a>
  </p>  
  <p class="card-footer-item">
    <span>{{currentPage + 1}}/{{totalPage}}</span>
  </p>
  <p class="card-footer-item">
    <a href="#" @click.prevent="movePage(1)" :disabled="currentPage >= totalPage -1"  class="button is-primary">
      <span>ถัดไป</span>
      <span class="icon"><i class="fa fa-angle-double-right"></i></span>
    </a>
  </p> 
   
</footer>
</template>

<script>
export default {
  props: {
    'currentPage': Number,
    'totalPage': Number
  },
  methods: {
    movePage (pageNumber) {
      this.$emit('page-changed', pageNumber)
    }
  }
}
</script>
