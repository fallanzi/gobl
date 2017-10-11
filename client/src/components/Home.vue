<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div v-for="post in posts">
              <h3>{{post.title}}</h3>
              <p>
                {{post.content}}
              </p>
              <span class="date"> {{post.created}} </span>
              <router-link :to="{name:'Post', params:{id: `${post._id}` } }" > Lire </router-link>
            </div>
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
      posts: [],
      name: 'Hodonou Sounton',
      presentation: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    }
  },
  async mounted() {
    this.posts = this.$resource('http://localhost:8081/gobl/posts/')
    try {
      const response = await this.posts.query()
      this.posts = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
