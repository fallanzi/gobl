<template>
  <section class="main">
    <div class="block">
      <div class="line">
        <div class="md-8 md-offset-2">
          <h1> {{title}} </h1>
          <p v-for="user in users" >
            {{user.firstname}} {{user.lastname}}
          </p>
          <!-- <router-link :to="{ name: 'Hello' }">Home</router-link> -->
        </div>
      </div>
    </div>
  </section>
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
      title: 'Liste des Utilisateurs',
    }
  },
  async mounted() {
    this.users = this.$resource('http://localhost:8081/gobl/users/')
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

<style>

</style>
