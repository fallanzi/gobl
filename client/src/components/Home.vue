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
                {{post.resume}}
              </p>
              <router-link :to="{name:'Post', params:{id: `${post._id}` } }" > Lire </router-link>
            </div>
          </div>
          <router-link to="/posts" v-if="user.role == 'client'" > Backend </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import THeader from '@/components/includes/THeader'
import TSectionTitle from '@/components/includes/TSectionTitle'
import TFooter from '@/components/includes/TFooter'

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
      user: {},
    }
  },
  async mounted() {
    this.posts = await this.$http.get('http://localhost:8081/gobl/v1/posts', {
      headers: {
        Authorization: this.$store.state.token,
      },
    })
    try {
      const response = await this.posts
      this.posts = response.data
      this.user = this.$store.state.user
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
