<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title text-right">
          {{  stock.name }}
          <small>Price: {{  stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-primary"
            @click="buyStuck"
            :disabled="quantity <= 0"
            >
              Buy stock
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
      quantity: 0
    }
  },
  methods: {
    ...mapActions([
      'buyStock',
      'showNotification'
    ]),
    buyStuck() {
      const order = {
        name: this.stock.name,
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.buyStock(order)
      this.showNotification(order)
      this.quantity = 0
    },
  }
}
</script>
