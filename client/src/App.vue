<template>
  <div id="app">
    <t-header></t-header>
    <t-section-title></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <h1>Titre de niveau 1</h1>
            {{ users }}
          </div>
        </div>
      </div>
    </section>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/THeader'
import TSectionTitle from '@/components/TSectionTitle'
import TFooter from '@/components/TFooter'

export default {
  name: 'app',
  components: {
    THeader,
    TSectionTitle,
    TFooter,
  },
  data() {
    return {
      users: [],
    }
  },
  async mounted() {
    this.users = this.$resource('http://localhost:8081')
    try {
      const response = await this.users.query()
      this.users = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>

<style src="../static/css/main.css"></style>
