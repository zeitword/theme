<script setup lang="ts">
import type { TBackground, TImage, TIntro, TSpacing } from "~~/types"

interface Props {
  id: string
  spacing: TSpacing
  background: TBackground
  intro: TIntro
  image: TImage
}

const {
  spacing = {
    vertical: "lg"
  },
  background = {
    color: "white"
  },
  intro = {
    heading: "A short heading",
    title: "We are changing this World",
    level: 3,
    width: "md",
    description: "This is a short description",
    center: false
  },
  image = {
    src: "placeholder.png",
    alt: "placeholder"
  }
} = defineProps<Props>()

const hasIntro = computed(() => {
  return Object.keys(intro).length > 0
})
</script>

<template>
  <DBackground
    v-bind="background"
    :id
  >
    <div class="relative mx-auto min-h-[300px] max-w-7xl md:min-h-[600px]">
      <div class="absolute inset-0 overflow-hidden transition-all xl:inset-5 xl:rounded-lg">
        <BaseImage
          class="size-full object-cover"
          v-bind="image"
        />
        <div
          v-if="hasIntro"
          class="from-neutral-inverse/80 to-neutral-inverse/0 absolute inset-0 size-full bg-gradient-to-r"
        />
      </div>
      <DWrapper
        :spacing="spacing"
        class="relative z-10"
      >
        <div class="space-y-12 py-10 md:py-20">
          <BaseIntro
            v-bind="intro"
            inverse
            variant="primary"
          />
        </div>
      </DWrapper>
    </div>
  </DBackground>
</template>
