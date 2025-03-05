<script setup lang="ts">
import type { TBackground, TButton, TCard, TIntro, TSpacing } from "~~/types"

interface Props {
  id: string
  spacing: TSpacing
  background: TBackground
  intro?: TIntro
  cards: TCard[]
	buttons: TButton[]
}

const {
  intro = {
    heading: "A short heading",
    title: "We are changing this World",
    level: 3,
    width: "md",
    description: "This is a short description",
    center: true
  },
  spacing = {
    vertical: "md"
  },
  background = {
    color: "neutral"
  },
  cards = [
    {
      variant: "neutral",
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    },
    {
      variant: "neutral",
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    },
    {
      variant: "neutral",
      title: "Card 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    }
  ]
} = defineProps<Props>()
</script>

<template>
  <DBackground
    v-bind="background"
    :id
  >
    <DWrapper :spacing="spacing">
      <div class="space-y-12">
        <BaseIntro v-bind="intro" />
        <BaseCardGrid :cards="cards">
          <BaseSmallCard
            class="flex-1 basis-xs"
            v-for="(card, index) in cards"
            :key="index"
            v-bind="card"
          />
        </BaseCardGrid>

        <BaseButtonGroup
          v-if="buttons?.length > 0"
          class="mt-4 w-full justify-center md:mt-0"
        >
          <BaseButton
            v-for="button in buttons"
            v-bind="button"
          />
        </BaseButtonGroup>
      </div>
    </DWrapper>
  </DBackground>
</template>
