<script setup lang="ts">
import { type TBackground, type TSpacing, type TMarkerLocation, type TImage, type TIntro } from "@/types"

interface Props {
	id: string
  spacing: TSpacing
  background: TBackground
  intro: TIntro
  image: TImage
  locations: TMarkerLocation[]
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
    color: "neutral",
    visible: true
  },
  locations = [
    {
      type: "marker",
      pos: {
        top: 79.5,
        left: 38
      },
      img: null
    },
    {
      type: "image",
      pos: {
        top: 20.5,
        left: 50
      },
      img: {
        src: "placeholder.png",
        alt: "placeholder"
      }
    }
  ]
} = defineProps<Props>()
</script>

<template>
  <DBackground
    v-bind="background"
    class="border-neutral border-b overflow-hidden"
		:id
  >
    <DWrapper :spacing="spacing">
      <div class="grid grid-cols-1 items-stretch gap-x-10 md:grid-cols-2">
        <div class="py-20 flex flex-col justify-center">
          <BaseIntro v-bind="intro" />
        </div>
        <div class="relative flex w-full items-start max-h-[200px] md:max-h-none">
          <BaseMap
            :image="image"
            :locations="locations"
          />
        </div>
      </div>
    </DWrapper>
  </DBackground>
</template>
