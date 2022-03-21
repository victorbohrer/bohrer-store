<template class="">
  <Header/>
    <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/shared/HeaderShared.vue'
import Footer from './components/shared/FooterShared.vue'


export default {

  components : {
    Header,
    Footer
  }
   
}
</script>

<style>
</style>
