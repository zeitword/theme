<script setup lang="ts">
import type { TImage, TMarkerLocation } from "~~/types"

type Props = {
  image: TImage
  locations: TMarkerLocation[]
  twGradient?: string
}

const { image, locations, twGradient } = defineProps<Props>()
</script>
<template>
  <div class="relative w-full">
    <div class="size-full">
      <BaseImage
        v-bind="image"
        class="w-full"
      />
      <div
        class="absolute inset-0 size-full"
        :class="twGradient"
      />
    </div>
    <template v-for="location in locations">
      <div
        class="rounded-xlarge absolute z-20 size-12 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white p-1 shadow-lg lg:size-14"
        :style="`top: ${location.pos.top}%; left: ${location.pos.left}%;`"
        v-if="location.type === 'image' && location.img"
      >
        <BaseImage
          v-bind="location.img"
          class="rounded-large size-full object-cover"
        />
      </div>
      <BaseMapMarker2
        v-else
        :location="location"
      />
    </template>
  </div>
</template>
