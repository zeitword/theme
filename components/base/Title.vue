<script lang="ts" setup>
import type { TAnimationOptions } from "@/types"

type Props = {
  animation?: TAnimationOptions
  level?: number
  inverse?: boolean
  neutral?: boolean
}
const { level = 2, inverse: inverse = false, neutral = true } = defineProps<Props>()

const sizes: { [key: number]: string } = {
  1: "text-title-sm sm:text-title-md md:text-title-lg xl:text-title-xl",
  2: "text-title-sm md:text-title-md xl:text-title-lg",
  3: "text-title-sm md:text-title-md xl:text-title-md",
  4: "text-title-xs md:text-title-xs lg:text-title-sm",
	5: "text-title-xs md:text-title-xs lg:text-title-xs"
}

const textColor = computed(() => {
  if (neutral) {
    return inverse ? "text-neutral-inverse" : "text-neutral"
  }
  return inverse ? "text-primary-inverse" : "text-primary"
})

const htmlTag = computed(() => {
  return `h${level}`
})
</script>

<template>
  <div class="origin-center perspective-normal" :class="[sizes[level], textColor]">
    <BaseScrollAnimate :animation>
      <component :is="htmlTag" class="font-display text-pretty whitespace-pre-line">
        <slot />
      </component>
    </BaseScrollAnimate>
  </div>
</template>
