<script setup lang="ts">
import { computed } from "vue";

type Props = {
  icon: TIcon;
};

const { icon } = defineProps<Props>();

const iconComponent = computed(() => {
  if (!icon?.name) return null;
  return icons[icon.name as keyof typeof icons];
});
</script>

<template>
  <!-- <pre>{{icon}}	</pre> -->
  <component :is="iconComponent" />
</template>
