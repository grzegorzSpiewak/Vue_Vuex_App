<template>
  <section class="notification">
    <transition-group name="pop" mode="in-out">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="alert alert-success">
          <h3>Stock name: {{ notification.name }}</h3>
          <h3>Quantity: {{ notification.quantity }}</h3>
      </div>
    </transition-group>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      notifications() {
        return this.$store.getters.notifications
      },
    },
    watch: {
      notifications() {
        this.notifications.length > 0 ? this.hideNotification() : null
      }
    },
    methods: {
      ...mapActions({
          hideNotification: 'hideNotification',
      }),
    }
  }

</script>

<style scoped>
  .notification {
    width: 250px;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
  }
  h3 {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    padding: 0;
    margin: 0;
  }
  .pop-enter {

  }
  .pop-enter-active {
    animation: popup .5s;
  }

  .pop-leave {

  }
  .pop-leave-active {
    animation: popout .5s;
  }

  @keyframes popup {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.4);
    }
    60% {
      transform: scale(1.1);
    }
    70% {
      transform: scale(1.2);
    }
    80% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes popout {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
