<template>
  <div>
  <t-section-title :title='post.title' :resume='post.resume'></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <p>
              {{post.content}}
            </p>
            <span class="date"> {{post.updated}} </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TSectionTitle from '@/components/TSectionTitle'

export default {
  components: {
    TSectionTitle,
  },
  name: 'app',
  data() {
    return {
      post: {},
    }
  },
  async mounted() {
    this.post = this.$resource(`http://localhost:8081/gobl/posts/${this.$route.params.id}/`)
    this.tags = this.post.tags
    try {
      const response = await this.post.query()
      this.post = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
