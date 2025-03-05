<script setup lang="ts">
import type { TFactCard } from "~~/types"
const { number, animated = false, description, trailing, leading } = defineProps<TFactCard>()
</script>

<template>
  <div class="border-neutral border-b py-6 nth-[1]:border-t md:p-6 md:odd:border-r md:nth-[2]:border-t">
    <p class="text-neutral text-4xl">
      <span>{{ leading }}</span>
      <span v-if="animated"><BaseAnimatedNumber :end="parseInt(number)"></BaseAnimatedNumber></span>
      <span v-else>{{ number }}</span>
      <span>{{ trailing }}</span>
    </p>
    <p class="text-neutral-subtle text-sm">{{ description }}</p>
  </div>
</template>
