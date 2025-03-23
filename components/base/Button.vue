<script setup lang="ts">
import { NuxtLink } from "#components";

type TButton = {
  variant: "primary" | "secondary" | "transparent" | "text" | "accent";
  link?: TLink;
  text: string;
};

type Props = TButton & {
  inverse?: boolean;
};

const { text, link, variant = "secondary", inverse } = defineProps<Props>();

const variants: { [key: string]: string } = {
  primary: "bg-primary hover:bg-primary-hover text-primary-inverse h-9 px-4",
  secondary:
    "bg-neutral-subtle hover:bg-neutral-strong text-neutral h-9 px-4 border-neutral border",
  transparent: "bg-neutral/20 hover:bg-neutral/80 text-neutral h-9 px-4",
  accent: "bg-accent text-primary hover:bg-accent-hover h-9 px-4",
  text: "bg-neutral/20 hover:bg-neutral/80 text-neutral",
};

const inverseVariants: { [key: string]: string } = {
  primary: "bg-neutral hover:bg-neutral-hover text-neutral h-9 px-4",
  secondary:
    "bg-neutral-inverse text-neutral-inverse h-9 px-4 borde border-neutral-inverse hover:bg-neutral-inverse-hover",
  transparent:
    "bg-neutral-inverse/20 hover:bg-neutral-inverse/80 text-neutral-inverse h-9 px-4",
  text: "bg-neutral-inverse/20 hover:bg-neutral-inverse/80 text-neutral-inverse",
};

const component = computed(() => {
  if (link) return NuxtLink;
  return "button";
});
</script>

<template>
  <component
    :is="component"
    :to="link?.url"
    :target="link?.target"
    type="button"
    class="focus-visible:ring-primary inline-flex w-fit items-center justify-center gap-3 rounded-full whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-copy"
    :class="inverse ? inverseVariants[variant] : variants[variant]"
  >
    {{ text }}
  </component>
</template>
