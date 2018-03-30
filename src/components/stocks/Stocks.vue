<template>
  <section class="row">
    <div v-if="funds > 0">
      <Stock v-for="stock in stocks" :stock="stock" />
    </div>
    <div v-else>
      <div class="panel panel-warning">
        <div class="panel-heading">Warning</div>
        <div class="panel-body">
          <h4>Not enuff funds</h4>
          <router-link to="/portfolio" class="btn btn-default btn-sm">
            Sell stocks
          </router-link>
        </div>
      </div>
    </div>
    <h1 class="text-right">Cash: {{ funds }}</h1>
  </section>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Stock,
  },
  computed: {
    ...mapGetters([
      'stocks',
      'funds'
    ])
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
h1 {
  margin: .4em;
}
</style>
