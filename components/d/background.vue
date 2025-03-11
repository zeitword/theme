<script setup lang="ts">
import type { TBackground } from "@/types";

type Props = TBackground;

const { color = "neutral" } = defineProps<Props>();

const bgColor = computed(() => {
  if (!color) return "bg-neutral";
  if (color === "white") return "bg-neutral";
  if (color === "neutral") return "bg-neutral-subtle";
  if (color === "accent") return "bg-accent";
  if (color === "transparent") return "bg-transparent";
  return "bg-neutral";
});
</script>

<template>
  <div :class="color !== 'transparent' ? bgColor : ''">
    <slot></slot>
  </div>
</template>
