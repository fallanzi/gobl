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
            <button type="submit" @click="login()">Login</button> 
          </div>  
          <!-- <router-link :to="{ name: 'Hello' }">Home</router-link> -->
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import TSectionTitle from '@/components/TSectionTitle'
import Home from '@/components/Home'
// import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  components: {
    TSectionTitle,
    Home,
  },
  methods: {
    async login() {
      try {
        const formlogin = {
          email: this.email,
          password: this.password,
        }
        const response = await this.$http.post('http://localhost:8081/login', formlogin)
        const t = response.data.token
        const u = response.data.user
        this.$store.dispatch('setTokenAct', t)
        this.$store.dispatch('setUserAct', u)
        this.email = ''
        this.password = ''
        response.headers.set('Authorization', `Bearer ${t}`)
        this.$router.push({ name: 'Home' })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style>

</style>
