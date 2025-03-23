<script setup lang="ts">
export type TIcon = {
  name: string;
};

type Props = {
  icon?: TIcon;
  text?: string;
  fg?: string;
  bg?: string;
};
const {
  icon,
  text,
  fg = "text-neutral-inverse",
  bg = "bg-primary",
} = defineProps<Props>();
</script>
<template>
  <div :class="[fg, bg]" class="rounded-large grid size-10 place-items-center">
    <BaseIcon v-if="icon" :icon="icon" class="size-5 stroke-2" />
    <span v-if="text" class="text-xl">
      {{ text }}
    </span>
  </div>
</template>
