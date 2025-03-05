<script setup lang="ts">
type Props = {
  level?: number
  inverse?: boolean
}
const { level = 3, inverse = false } = defineProps<Props>()

const sizes: { [key: number]: string } = {
  1: "text-copy-md md:text-copy-lg lg:text-copy-lg",
  2: "text-copy-sm md:text-copy-md lg:text-copy-lg",
  3: "text-copy-xs md:text-copy-sm lg:text-copy-md",
  4: "text-copy-xxs md:text-copy-xs lg:text-copy-sm"
}

const textColor = computed(() => {
  return inverse ? "text-neutral-inverse" : "text-neutral"
})
</script>

<template>
  <BaseScrollAnimate>
    <p class="inline-block" :class="[sizes[level], textColor]">
      <slot />
    </p>
  </BaseScrollAnimate>
</template>
