<template>
  <div>
    <h5>All Users</h5>    
    {{ users }}
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
