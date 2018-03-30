<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title text-right">
          {{ stock.name }}
          <small>Market Price: {{ currentStockPrice(stock.id) }}</small>
        </h3>
      </div>
      <div class="panel-body">
      <h5 class="text-left">Was bought for: {{ stock.boughtPrice }}</h5>
      <h5 class="text-left">You own: {{ stock.quantity }}</h5>
      <h5 class="text-left">Profit: {{ marketPrice - stock.boughtPrice }}</h5>
      <hr>
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: controlSell}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="controlSell || quantity <= 0"
          >
            {{ !controlSell ? "Sell stocks" : "To much" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
      marketPrice: 0,
    }
  },
  computed: {
    controlSell() {
      return this.quantity > parseInt(this.stock.quantity)
    }
  },
  methods: {
    ...mapActions({
        sell: 'sellStock',
        showNotification: 'showNotification',
    }),
    currentStockPrice(id) {
      const ownStockMarketPrice = this.$store.getters.stocks.find(stock => stock.id === id)
      this.marketPrice = ownStockMarketPrice.price
      return this.marketPrice
    },
    sellStock() {
      const order = {
        name: this.stock.name,
        stockId: this.stock.id,
        soldPrice: this.marketPrice,
        quantity: this.quantity
      }
      this.sell(order)
      this.showNotification(order)
      this.quantity = 0
    }
  },
}
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>
