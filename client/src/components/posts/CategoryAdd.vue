<template>
  <div>
    <t-section-title title='Add a Category'></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div class="form-container">
              <label for="name">Nom</label>
              <input type="text" name="name" id="name" v-model="name">
              <label for="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
              <button type="submit" @click="add()">Save</button>
            </div>
            <span v-for="cat in cats">
              {{cat.name}}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  // import CategoryAdd from '@/components/CategoryAdd'
  
  export default {
    components: {
      TSectionTitle,
      // CategoryAdd,
    },
    data() {
      return {
        name: '',
        description: '',
        cats: [],
      }
    },
    methods: {
      async add() {
        const formdata = {
          name: this.name,
          description: this.description,
        }
        try {
          await this.$http.post('http://localhost:8081/gobl/v1/cats',
            formdata, {
              headers: {
                Authorization: this.$store.state.token,
              },
            })
          this.$router.push({ name: 'Home' })
        } catch (error) {
          // eslint-disable-next-line
          console.log(error)
        }
      },
    },
    async mounted() {
      this.cats = await this.$http.get('http://localhost:8081/gobl/v1/cats/', {
        headers: {
          Authorization: this.$store.state.token,
        },
      })
      try {
        const response = await this.cats
        this.cats = response.data
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
  }
</script>

<style>

</style>