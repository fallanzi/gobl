<template>
  <v-toolbar fixed class="brown darken-3" dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title> {{ site }} </v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    props: ['site'],
    data() {
      return {
        drawer: true,
      }
    },
  }
</script>
