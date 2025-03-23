<script setup lang="ts">
type TAnimationName = "slideInUp" | "rotateIn" | "scaleIn" | "rotateIn3d";

type StaggerOptions = {
  enabled: boolean;
  delay: number;
};

export type TAnimationOptions = {
  name?: TAnimationName;
  enabled?: boolean;
  duration?: number;
  delay?: number;
  stagger?: StaggerOptions;
};

type Props = {
  animation?: TAnimationOptions;
};

const {
  animation = {
    name: "rotateIn3d",
    duration: 0.3,
    delay: 0.0,
    enabled: true,
  },
} = defineProps<Props>();

const currentAnimation = computed(() => animations[animation.name]);
const container = ref("container");
const { isInView } = useScrollAnimation(container, animation);
</script>

<template>
  <div ref="container" :class="currentAnimation?.classes">
    <slot />
  </div>
</template>
