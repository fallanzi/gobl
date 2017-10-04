<template>
  <div id="app">
    <v-app light>
      <nav-bar></nav-bar>
      <main>
        
      </main>
    </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'app',
  components: {
    NavBar,
    SideBar,
  },
}
</script>

<style>

</style>
