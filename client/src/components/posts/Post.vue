<template>
  <div>
  <t-section-title :title='post.title' :resume='post.resume'></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2"> 
            <vue-markdown :source="post.content" >  </vue-markdown>
            <span class="date"> {{post.updated}} </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import TSectionTitle from '@/components/includes/TSectionTitle'

export default {
  components: {
    TSectionTitle,
    VueMarkdown,
  },
  name: 'app',
  data() {
    return {
      post: {},
    }
  },
  async mounted() {
    this.post = await this.$http.get(`http://localhost:8081/gobl/v1/posts/${this.$route.params.id}/`, {
      headers: {
        Authorization: this.$store.state.token,
      },
    })
    this.tags = this.post.tags
    try {
      const response = await this.post
      this.post = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
