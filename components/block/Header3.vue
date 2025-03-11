<script setup lang="ts">
import type { TBackground, TButton, TImage, TVideo } from "@/types"

interface Props {
  id: string
  background: TBackground
  video?: TVideo
  image?: TImage
  heading?: string
  title?: string
  level?: number
  benefits?: string[]
  stackBenefits?: boolean
  description?: string
  buttons?: TButton[]
  height: "full" | "md"
  center: boolean
}

const {
  video,
  image,
  heading = "This is a short headline",
  title = "This is a title which is a bit longer",
  benefits = ["Benefit 1", "Benefit 2", "Benefit 3"],
  description = "This is a longer description",
  buttons = [
    {
      text: "Try now for free",
      link: {
        url: "#",
        target: "_self"
      },
      variant: "primary"
    },
    {
      text: "Learn more",
      link: {
        url: "#",
        target: "_self"
      },
      variant: "secondary"
    }
  ],
  height = "md",
  center = false
} = defineProps<Props>()

const heightClasses: { [key: string]: string } = {
  full: "md:h-[calc(100vh)]",
  md: "md:h-[700px] h-auto"
}
</script>

<template>
  <DBackground
    v-bind="background"
    :id
  >
    <div
      class="relative mx-auto flex max-w-7xl"
      :class="[heightClasses[height]]"
    >
      <DWrapper class="relative z-10 mx-auto h-full py-30 md:py-20">
        <div class="grid h-full items-center gap-20 md:grid-cols-3">
          <div
            class="flex flex-col justify-center gap-4 md:col-span-2 md:h-full md:gap-6"
            :class="center ? 'items-center text-center' : 'items-start'"
          >
            <div
              v-if="heading"
              class="inline-flex rounded-full px-2 border-neutral border text-center"
            >
              <BaseHeading :level="4">
                {{ heading }}
              </BaseHeading>
            </div>
            <BaseTitle
              v-if="title"
              :level="level"
              neutral
            >
              {{ title }}
            </BaseTitle>
            <BaseText
              v-if="description"
              size="xs"
              class="max-w-2xl"
            >
              {{ description }}
            </BaseText>
            <div
              v-if="benefits.length > 0"
              class="flex"
              :class="[
                center ? 'justify-center' : 'justify-start',
                stackBenefits ? 'flex-col gap-2' : 'flex-wrap gap-5'
              ]"
            >
              <BaseCheckmark
                v-for="benefit in benefits"
                :text="benefit"
              />
            </div>
            <BaseButtonGroup
              v-if="buttons.length > 0"
              class="mt-4 w-full md:mt-0"
              :class="center ? 'justify-center' : 'justify-start'"
            >
              <BaseButton
                v-for="button in buttons"
                v-bind="button"
                class="w-full md:w-auto"
                :inverse="false"
              />
            </BaseButtonGroup>
          </div>
          <div class="relative hidden grid-cols-1 overflow-hidden rounded-lg transition-all md:block">
            <BaseVideo
              v-if="video"
              :src="video.src"
              class="size-full w-full object-cover"
              loop
              autoplay
              muted
            />
            <BaseImage
              v-else-if="image && image.src !== undefined"
              v-bind="image"
              :width="2500"
              :height="2500"
              class="size-full w-full object-cover"
            />
          </div>
        </div>
      </DWrapper>
    </div>
  </DBackground>
</template>
