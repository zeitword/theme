<script setup lang="ts">
import type { TMarkerLocation } from "~~/types"

type Props = {
  location: TMarkerLocation
}

const { location } = defineProps<Props>()

const randAnimDelay = computed(() => {
  return Math.round(Math.random() * 1000)
})

const randAnimDuration = computed(() => {
  const min = 1800
  const max = 3000
  return Math.floor(Math.random() * (max - min + 1)) + min
})
</script>

<template>
  <div>
    <NuxtLink
      class="absolute"
      :id="`marker-${location.name}`"
      :style="`top: ${location.pos.top}%; left: ${location.pos.left}%;`"
      :to="location.link"
      target="_blank"
    >
      <div>
        <!-- Marker dot -->
        <div
          class="bg-primary marker-grow pointer-events-none absolute right-1/2 left-1/2 z-10 size-2 -translate-1/2 rounded-[999rem]"
          :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
        />

        <div
          class="marker-pulse bg-primary/20 pointer-events-none absolute right-1/2 left-1/2 size-32 -translate-1/2 rounded-[999rem] opacity-0 transition-all"
          :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
@keyframes marker-grow {
  0% {
    transform: scale(0.5);
  }
  10% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}

@keyframes marker-pulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  20% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.marker-pulse {
  animation-name: marker-pulse;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.marker-grow {
  animation-name: marker-grow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
