<template>
  <div>
    <Header />
    <nuxt />
    <Footer class="size-section"/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: "default",
  components: { Header, Footer }
}
</script>

<style scoped>

</style>
