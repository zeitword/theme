<script setup lang="ts">
type TSize = "none" | "xs" | "sm" | "md" | "lg";

type TSpacing = {
  vertical?: TSize;
  top?: TSize;
  bottom?: TSize;
};

type Props = {
  spacing?: TSpacing;
};

const verticalPaddings: { [key: string]: string } = {
  sm: "md:py-10 py-5",
  md: "md:py-20	py-10",
  lg: "md:py-32 py-20",
  xl: "md:py-60 py-40",
};

const topPaddings: { [key: string]: string } = {
  sm: "md:pt-10 pt-5",
  md: "md:pt-20 pt-10",
  lg: "md:pt-32 pt-20",
  xl: "md:pt-60 pt-40",
};

const bottomPaddings: { [key: string]: string } = {
  sm: "md:pb-10 pb-5",
  md: "md:pb-20	pb-10",
  lg: "md:pb-32 pb-20",
  xl: "md:pb-60 pb-40",
};

const { spacing } = defineProps<Props>();

const verticalPadding = computed(() => {
  if (!spacing) return "py-0";
  if (spacing.vertical) {
    return verticalPaddings[spacing.vertical];
  }

  const classes = [];
  if (spacing.top) {
    classes.push(topPaddings[spacing.top]);
  }

  if (spacing.bottom) {
    classes.push(bottomPaddings[spacing.bottom]);
  }
  return classes;
});
</script>

<template>
  <div
    class="w-full scroll-mt-20 px-5 md:px-10"
    :class="spacing ? verticalPadding : 'py-0'"
  >
    <div class="mx-auto h-full max-w-6xl">
      <slot></slot>
    </div>
  </div>
</template>
