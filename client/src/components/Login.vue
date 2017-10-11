<template>
<div>
  <t-section-title title="Login" ></t-section-title>
  <section class="main">
    <div class="block">
      <div class="line">
        <div class="md-8 md-offset-2">
          <div class="form-container">
            <label for="email">E-mail</label>  
            <input type="email" name="email" id="email" v-model="email"> 
            <label for="password">Password</label>  
            <input type="password" name="password" id="password" v-model="password"> 
          </div>  
          <!-- <router-link :to="{ name: 'Hello' }">Home</router-link> -->
        </div>
      </div>
    </div>
  </section>
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
      title: 'Liste des Utilisateurs',
    }
  },
  async mounted() {
    this.users = this.$resource('http://localhost:8081/gobl/login/')
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
