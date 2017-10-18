<template>
  <div>
    <t-section-title title='Add a Post'></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div class="form-container">
              <label for="category">Category</label>
              <select name="category" id="category" v-model="category" >
                <option v-for="category in cats" v-bind:value='category._id'> {{category.name}} </option>
              </select>
              <label for="title">Title</label>
              <input type="text" name="title" id="title" v-model="title">
              <label for="tags">Tags</label>
              <input type="text" name="tags" id="tags" v-model="tags">
              <label for="resume">Résumé</label>
              <textarea name="resume" id="resume" cols="30" rows="10" v-model="resume"></textarea>
              <label for="content">Contenu</label>
              <textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
              <p v-bind="content"></p>
              <button type="submit" @click="add()">Save</button>
            </div>
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
  },
  data() {
    return {
      category: {},
      title: '',
      tags: [],
      resume: '',
      content: '',
      author: {},
      cats: [],
    }
  },
  methods: {
    async add() {
      // eslint-disable-next-line
      const formpost = {
        category: this.category,
        title: this.title,
        tags: this.tags,
        resume: this.resume,
        content: this.content,
        // eslint-disable-next-line
        author: this.$store.state.user._id,
      }
      try {
        await this.$http.post('http://localhost:8081/gobl/v1/posts',
          formpost, {
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
