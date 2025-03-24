<script setup lang="ts">
const route = useRoute();
type Props = {
  to: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  inverse?: boolean;
};
const { to, target = "_self", inverse = false } = defineProps<Props>();
</script>
<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="highlight group/link relative text-sm"
    :class="
      inverse
        ? 'text-neutral-inverse'
        : 'text-neutral-subtle hover:text-neutral'
    "
  >
    <slot />
    <div class="line absolute top-full w-full overflow-hidden">
      <div
        class="h-px w-full transition-all group-hover/link:translate-x-0"
        :class="[
          inverse ? 'bg-neutral' : 'bg-neutral-inverse',
          route.path.startsWith(to)
            ? 'translate-x-0'
            : '-translate-x-[calc(100%+3px)]',
        ]"
      ></div>
    </div>
  </NuxtLink>
</template>
