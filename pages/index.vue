<template>
  <div>
    <main class="size-section">
      <Hero />
      <AboutUs />
      <Members />
    </main>
    <SideBar />
  </div>
</template>

<script>

import Hero from '../components/index/Hero'

import AboutUs from '../components/index/AboutUs'
import Members from '../components/index/Members'
import SideBar from '../components/index/SideBar'
export default {
  components: { SideBar, Members, AboutUs, Hero }
}
</script>
