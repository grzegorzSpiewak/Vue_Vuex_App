<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link
          to="/"
          class="navbar-brand"
          >Stock Trader
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link
            to="/portfolio"
            activeClass="active"
            tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link
            to="/stocks"
            activeClass="active"
            tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <div class="nav navbar-nav navbar-right">
          <button
            class="btn btn-primary"
            @click="setNewPrice">Simulate Market</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions({
        setNewPrice: 'setNewPrice',
      }),
    }
  }
</script>

<style scoped>
  button {
    margin: .6em;
    outline: none;
  }
  .navbar {
    margin-bottom: 2em;
  }
</style>
