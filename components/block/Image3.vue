<script setup lang="ts">
import type { TBackground, TImage, TIntro, TSpacing } from "@/types";

interface Props {
  intro: TIntro;
  image: TImage;
}

const {
  intro = {
    heading: "A short heading",
    title: "We are changing this World",
    level: 3,
    width: "md",
    description: "This is a short description",
    center: false,
  },
  image = {
    src: "placeholder.png",
    alt: "placeholder",
  },
} = defineProps<Props>();
</script>

<template>
  <DBackground>
    <DWrapper>
      <div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <BaseIntro v-bind="intro" />
        <div class="p-2 rounded-2xl bg-neutral-strong w-full">
          <BaseImage class="rounded-md shadow-lg w-full" v-bind="image" />
        </div>
      </div>
    </DWrapper>
  </DBackground>
</template>
