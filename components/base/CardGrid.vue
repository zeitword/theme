<script setup lang="ts">
import type { TCard } from "@/types"

interface Props {
  cards: TCard[]
}

const { cards } = defineProps<Props>()
</script>

<template>
  <BaseScrollAnimate
    class="flex flex-wrap gap-3"
    :animation="{
      name: 'rotateIn3d',
      duration: 0.3,
      delay: 0.0,
      enabled: true,
      stagger: {
        delay: 0.1,
        enabled: true
      }
    }"
  >
		<slot></slot>
  </BaseScrollAnimate>
</template>
