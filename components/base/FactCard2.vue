<script setup lang="ts">
import type { TFactCard } from "@/types"

const { number, animated = false, description } = defineProps<TFactCard>()
</script>

<template>
  <div class="py-6">
    <BaseTitle :level="3" class="text-neutral text-4xl">
      <span>{{ leading }}</span>
      <span v-if="animated">
        <BaseAnimatedNumber :end="parseInt(number)"></BaseAnimatedNumber>
      </span>
      <span v-else>{{ number }}</span>
      <span>{{ trailing }}</span>
    </BaseTitle>
    <p class="text-neutral-subtle text-sm">{{ description }}</p>
  </div>
</template>
