<template>
  <div id="scroll-container">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    const { SmoothScroll } = await import(
      /* webpackChunkName: "smooth-scroll" */
      '@emotionagency/smoothscroll'
    )
    this.smoothscroll = new SmoothScroll()
  },
  beforeDestroy() {
    this.smoothscroll.destroy()
  },
})
</script>
