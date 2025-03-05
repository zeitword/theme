<script lang="ts" setup>
import type { TAnimationOptions, TSize } from "~~/types"

type Props = {
  size?: TSize
  inverse?: boolean
  variant?: "subtle" | "strong"
  animation?: TAnimationOptions
}
const {
  size = "md",
  inverse = false,
  variant = "subtle",
  animation = {
    name: "slideInUp",
    duration: 0.3,
    delay: 0.0,
    enabled: false
  }
} = defineProps<Props>()

const sizes: { [key: string]: string } = {
  "2xl": "text-copy-xxl md:text-title-sm lg:text-title-md",
  xl: "text-copy-xl md:text-copy-xxl lg:text-title-sm",
  lg: "text-copy-md md:text-copy-lg lg:text-copy-xl",
  md: "text-copy-md",
  sm: "text-copy-sm",
  xs: "text-copy-xs md:text-copy-sm lg:text-copy-sm"
}

const textColor = computed(() => {
  if (variant === "subtle") {
    return inverse ? "text-neutral-inverse/70" : "text-neutral-subtle"
  } else {
    return inverse ? "text-neutral-inverse" : "text-neutral"
  }
})
</script>

<template>
  <BaseScrollAnimate :animation :class="[sizes[size], textColor]">
    <p><slot /></p>
  </BaseScrollAnimate>
</template>
