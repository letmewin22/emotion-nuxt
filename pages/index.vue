<template>
  <div>
    <h1 ref="h1" @click="h1Anim">
      At the <span class="italic">intersection</span> of technology, marketing
      and aesthetics
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'

export default Vue.extend({
  async mounted() {
    const h1 = this.$refs.h1
    const { default: splitting } = await import('splitting')
    splitting({ target: h1, by: 'chars' })
  },
  methods: {
    h1Anim() {
      const spans = this.$refs.h1.querySelectorAll('.char')

      gsap.set(spans, {
        opacity: 0,
        transform: 'translateY(100%) rotateX(-90deg) scale(0.9)',
      })

      gsap.to(spans, {
        duration: 1,
        rotateX: 0,
        scale: 1,
        y: 0,
        opacity: 1,
        ease: 'expo.out', // back.out(1.05)
        stagger: 0.015,
      })
    },
  },
})
</script>

<style lang="scss">
body {
  background-color: var(--black);
}
.italic {
  font-style: italic;
  font-weight: 400;
}
h1 {
  position: absolute;
  width: 1205px;
  height: 327px;
  left: 85px;
  top: 58%;
  z-index: 2;
  font-family: HelveticaNeueCyr;
  font-style: normal;
  font-weight: 300;
  font-size: 95px;
  line-height: 115%;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  color: #d6d6d6;
  perspective: 2000px;
}
.char {
  display: inline-block;
  transform-origin: top;
  backface-visibility: hidden;
  opacity: 0;
  transform: translateY(100%) rotateX(-90deg) scale(0.9);
  letter-spacing: -0.005em;
}
</style>
