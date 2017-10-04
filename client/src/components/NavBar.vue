<template>
  <v-toolbar class="white">
    <img src="../assets/tecnonia.png" width="40">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Menu</v-btn>      
      <v-btn flat>Menu</v-btn>      
      <v-btn flat>Menu</v-btn>      
      <v-btn flat>Menu</v-btn>      
      <v-btn flat>Menu</v-btn>      
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  data() {
    return {
      title: 'Tencnonia Blog',
    }
  },
}
</script>