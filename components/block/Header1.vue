<script setup lang="ts">
import type { TBackground, TButton, TImage, TSize, TVideo } from "~~/types"

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
  width?: TSize
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
      variant: "primary",
      inverse: true
    },
    {
      text: "Learn more",
      link: {
        url: "#",
        target: "_self"
      },
      variant: "secondary",
      inverse: true
    }
  ],
  height = "md",
  center = false,
} = defineProps<Props>()

const isInverted = computed(() => {
  return !!(video || image?.src)
})

const heightClasses: { [key: string]: string } = {
  full: "h-[calc(100vh)]",
  md: "md:h-[700px] h-[500px]"
}

const widthClasses: { [key: string]: string } = {
  xs: "max-w-lg",
  sm: "max-w-2xl",
  md: "max-w-5xl",
  lg: "max-w-7xl"
}
</script>

<template>
  <DBackground v-bind="background"
		:id
	>
    <div
      class="relative mx-auto flex max-w-7xl"
      :class="[heightClasses[height]]"
    >
      <div
        class="absolute overflow-hidden transition-all inset-0 xl:inset-2 xl:rounded-lg"
      >
        <BaseVideo
          v-if="video"
          :src="video.src"
          class="top-0 left-0 size-full w-full object-cover"
          loop
          autoplay
          muted
        />
        <BaseImage
          v-else-if="image && image.src !== undefined"
          v-bind="image"
          :width="2500"
          :height="2500"
          class="top-0 left-0 size-full w-full object-cover object-[center_20%]"
        />
        <div
          v-if="image || video"
          class="from-neutral-inverse/40 to-neutral-inverse/0 absolute top-0 left-0 size-full bg-gradient-to-t"
        />
      </div>
      <DWrapper
        class="relative z-10 mx-auto h-full py-10 md:py-20"
        :class="widthClasses[width]"
      >
        <div
          class="flex h-full flex-col justify-end gap-2 md:gap-6"
          :class="center ? 'items-center text-center' : 'items-start'"
        >
          <div
            v-if="heading"
            class="inline-flex rounded-full px-2"
            :class="[isInverted ? 'bg-neutral/20 text-neutral-inverse' : 'bg-neutral-inverse/5 text-neutral-subtle']"
          >
            <BaseHeading
              :level="4"
              :inverse="isInverted"
            >
              {{ heading }}
            </BaseHeading>
          </div>
          <BaseTitle
            v-if="title"
            :level="level"
            :inverse="isInverted"
            neutral
          >
            {{ title }}
          </BaseTitle>
          <BaseText
            v-if="description"
            :inverse="isInverted"
            size="xs"
            class="max-w-2xl"
          >
            {{ description }}
          </BaseText>
          <div
            v-if="benefits.length > 0"
            class="flex gap-5"
						:class="[center ? 'justify-center' : 'justify-start',
							stackBenefits ? 'flex-col' : 'flex-wrap'
						]"
          >
            <BaseCheckmark
              v-for="benefit in benefits"
              :inverse="isInverted"
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
							:inverse="isInverted"
            />
          </BaseButtonGroup>
        </div>
      </DWrapper>
    </div>
  </DBackground>
</template>
