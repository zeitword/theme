<script setup lang="ts">
import type { TBackground, TImage, TIntro, TSpacing } from "@/types"

interface Props {
	id: string
  spacing: TSpacing
  background: TBackground
  intro: TIntro
  image: TImage
}

const {
  spacing = {
    vertical: "md"
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
	},
  background = {
    color: "neutral"
  }
} = defineProps<Props>()
</script>

<template>
  <DBackground v-bind="background" :id>
    <DWrapper :spacing="spacing">
      <div class="space-y-12">
        <div class="p-2 rounded-2xl bg-neutral-strong w-full">
          <BaseImage class="rounded-md shadow-lg w-full" v-bind="image" />
        </div>
        <BaseIntro v-bind="intro" />
      </div>
    </DWrapper>
  </DBackground>
</template>
