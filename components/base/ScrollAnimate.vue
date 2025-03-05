<script setup lang="ts">
import type { TAnimationOptions } from "~~/types"

type Props = {
  animation?: TAnimationOptions
}

const {
  animation = {
    name: "rotateIn3d",
    duration: 0.3,
    delay: 0.0,
    enabled: true
  }
} = defineProps<Props>()

const currentAnimation = computed(() => animations[animation.name])
const container = ref("container")
const { isInView } = useScrollAnimation(container, animation)
</script>

<template>
  <div ref="container" :class="currentAnimation?.classes">
    <slot></slot>
  </div>
</template>
