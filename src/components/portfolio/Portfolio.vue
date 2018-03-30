<template>
  <section class="row">
    <div>
      <Stock v-for="stock in ownStocks" :stock="stock" />
    </div>
    <h1 class="text-right">Cash: {{ funds }}</h1>
  </section>
</template>

<script>
import Stock from './Stock.vue'

export default {
  components: {
    Stock,
  },
  computed: {
    ownStocks() {
      return this.$store.getters.ownStocks
    },
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>
