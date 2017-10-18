<template>
  <div id="app">
    <t-header></t-header>
    <router-view></router-view>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/includes/THeader'
import TSectionTitle from '@/components/includes/TSectionTitle'
import TFooter from '@/components/includes/TFooter'

export default {
  name: 'app',
  components: {
    THeader,
    TSectionTitle,
    TFooter,
  },
  data() {
    return {
      user: [],
    }
  },
  async mounted() {
    this.user = this.$store.state.user
    try {
      const response = await this.user
      this.user = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>

<style src="../static/css/main.css"></style>
