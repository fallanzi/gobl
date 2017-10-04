<template>
  <div id="app">
    <t-header></t-header>
    <t-section-title></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <h1>Titre de niveau 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

            <h2>Titre de niveau 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              <a href="#">we have a link here</a> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

            <span class="important">Here we have a very important text</span>

            <h3>Titre de niveau 3</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <span class="date">04 octobre 2017</span>
          </div>
        </div>
      </div>
    </section>
    <t-footer></t-footer>
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
}
</script>

<style src="../static/css/main.css">

</style>
