<script setup lang="ts">
import { ImageOff } from "lucide-vue-next";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

const { src, alt, width = 1000, height = 500 } = defineProps<Props>();
</script>

<template>
  <NuxtImg :width="width" :height="height" :src="src" :alt="alt" />
</template>
