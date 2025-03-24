<script setup lang="ts">
import { icons } from "lucide-vue-next";
type Props = {
  name: string;
};

const { name } = defineProps<Props>();

const iconComponent = computed(() => {
  if (!name) return null;
  return icons[name as keyof typeof icons];
});
</script>

<template>
  <component :is="iconComponent" />
</template>
