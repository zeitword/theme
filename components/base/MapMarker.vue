<script setup lang="ts">
import { MapPin, WavesIcon } from "lucide-vue-next"
import type { TMarkerLocation } from "~~/types"

enum TLocationType {
  PORT = "port",
  TERMINAL = "terminal"
}

type Props = {
  special: boolean
  active: boolean
  location: TMarkerLocation
}

const { active = false, location } = defineProps<Props>()

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
      :class="[active ? 'z-20' : '']"
      :to="location.link"
      target="_blank"
    >
      <div>
        <!-- Marker dot -->
        <div
          class="bg-primary marker-grow absolute right-1/2 left-1/2 z-10 size-2 -translate-1/2 rounded-[999rem]"
          :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
        />

        <!-- Pulse effect -->
        <div
          v-if="special"
          class="marker-pulse bg-accent/90 absolute right-1/2 left-1/2 size-32 -translate-1/2 rounded-[999rem] opacity-0 transition-all"
          :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
        />
        <div
          v-else
          class="marker-pulse absolute right-1/2 left-1/2 -translate-1/2 rounded-[999rem] opacity-0 transition-all"
          :class="[active ? 'bg-secondary/90 size-20' : 'bg-primary/10 size-10']"
          :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
        />
      </div>

      <!-- Popup -->
      <Transition name="scale-fade">
        <div v-if="active" class="bg-neutral absolute top-[calc(100%+7px)] left-1/2 -translate-x-1/2 rounded-md p-1 shadow-sm">
          <div class="font-weight-medium text-primary flex items-center gap-1 text-xs uppercase">
            <template v-if="location.type === TLocationType.PORT">
              <WavesIcon class="size-[14px] stroke-3" />
              <p>Hafen</p>
            </template>
            <template v-else>
              <MapPin class="size-[14px] stroke-3" />
              <p>TERMINAL</p>
            </template>
          </div>
          <p class="text-neutral">{{ location.name }}</p>
          <BaseImage v-if="location.img" :src="location.img.src" :alt="location.name" class="mt-1 max-h-5 w-full object-contain object-left" />
        </div>
      </Transition>
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
