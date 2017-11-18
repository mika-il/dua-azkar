import Vue from 'vue'

Vue.filter('ampm', function (value) {
  if (!value) return ''
  let hours = new Date().getHours()
  if (hours > 12 && value.ampm) {
    return '/dua-azkar/img/dua/' + value.img + '-1.jpg'
  } else {
    return '/dua-azkar/img/dua/' + value.img + '.jpg'
  }
})
