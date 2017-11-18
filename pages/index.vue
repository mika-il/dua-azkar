<template>
<div class="column is-6 is-offset-3">
  <div class="card" v-for="dua in paginates" :key="dua.name"> 
    <div class="card-image">
      <figure class="image is-3by2">
        <img :src= "dua | ampm" >
      </figure> 
     
    </div> 
    <div class="card-content" > 
      <div class="content">
        <div class="buttons has-addons is-small is-centered">
          <span class="button  is-danger is-static"><span class="has-text-danger">อ่าน {{dua.read}} ครั้ง</span></span>
           <span class="button is-danger" @click="counting" v-show="dua.read > 1">
             <span class="icon"><i class="fa fa-sort"></i></span>
             <span>นับ {{couter}}</span>
           </span>
          <span class="button is-success " @click="showMeaning = !showMeaning">ความหมาย</span>
        </div>
      </div>
       <div class="content" v-show="showMeaning">{{ dua.meaning}}</div>  
    </div> 
    <paginate :currentPage="currentPage" :totalPage="totalPage" @page-changed="pageChanged"></paginate>
  </div>
</div>
</template>

<script>
import Paginate from '~/components/ThePagination'
import duas from '~/static/data/data.json'

export default {
  components: {
    Paginate
  },
  data () {
    return {
      duas,
      couter: 0,
      showMeaning: false,
      currentPage: 0,
      itemsPerPage: 1,
      resultCount: 0
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og-image', property: 'og:image', content: 'https://mika-il.github.io/dua-azkar/img/Azkar.jpg' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'fb-app_id', property: 'fb:app_id', content: '400736526646234' }
      ]
    }
  },
  computed: {
    paginates: function () {
      this.resultCount = this.duas.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1
      }
      var index = this.currentPage * this.itemsPerPage
      return this.duas.slice(index, index + this.itemsPerPage)
    },
    totalPage () {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    }
  },
  methods: {
    pageChanged (pageNum) {
      if (pageNum > 0 && this.currentPage < this.totalPage - 1) {
        this.currentPage += 1
      } else if (this.currentPage > 0 && pageNum < 0) {
        this.currentPage -= 1
      }
      this.couter = 0
    },
    counting () {
      if (this.couter < this.duas[this.currentPage].read) {
        this.couter += 1
      }
    }
  }
}
</script>





