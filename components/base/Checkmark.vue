<script setup lang="ts">
import { CheckIcon } from "lucide-vue-next"
type Props = {
  text: string
  inverse?: boolean
}
const { text = "", inverse: inverse = false } = defineProps<Props>()
</script>

<template>
  <div class="flex items-center text-copy gap-2" :class="inverse ? 'text-neutral-inverse' : 'text-neutral'">
    <CheckIcon class="size-5" />
    <span class="text">{{ text }}</span>
  </div>
</template>
