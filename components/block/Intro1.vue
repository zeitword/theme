<script setup lang="ts">
import type { TAnimationOptions, TBackground, TButton, TSize, TSpacing } from "@/types"

interface Props {
	id: string
  name?: string
  spacing: TSpacing
	background: TBackground
  heading?: string
  title?: string
  level?: number
  width?: TSize
  description?: string
  button?: TButton
  center?: boolean
  animation?: TAnimationOptions
}

const {
  name,
  spacing = { vertical: "md" },
  heading = "A short heading",
  title = "We are changing this World",
  level = 2,
  width = "md",
  description = "This is a short description",
  background,
  button,
  center,
  animation = {
    name: "rotateIn3d",
    duration: 0.3,
    delay: 0.0,
    enabled: true
  }
} = defineProps<Props>()
type SizeOptions = {
  title: string
  description: string
}
const widthClasses: { [key: string]: SizeOptions } = {
  sm: {
    title: "max-w-sm",
    description: "max-w-xl"
  },
  md: {
    title: "max-w-lg",
    description: "max-w-2xl"
  },
  lg: {
    title: "max-w-xl",
    description: "max-w-3xl"
  }
}
</script>

<template>
  <DBackground v-bind="background" :id>
    <DWrapper :spacing>
      <div class="grid place-items-start gap-y-5">
        <div
          class="flex flex-col gap-4"
          :class="[center ? 'mx-auto items-center text-center transition-all' : '']"
        >
          <div class="flex flex-col gap-2">
            <BaseHeading
              v-if="heading"
              class="text-neutral-subtle"
              :animation="{ ...animation, delay: 0.0 }"
              :class="[widthClasses[width]?.title]"
            >
              {{ heading }}
            </BaseHeading>
            <BaseTitle
              v-if="title"
              :level="level"
              neutral
              :animation="{ ...animation, delay: 0.15 }"
              :class="[widthClasses[width]?.title]"
            >
              {{ title }}
            </BaseTitle>
          </div>
          <BaseText
            v-if="description"
            :animation="{ ...animation, name: 'slideInUp', delay: 0.3 }"
            size="md"
            class="text-neutral-subtle max-w-3xl whitespace-pre-line"
            :class="[widthClasses[width]?.description]"
          >
            {{ description }}
          </BaseText>
        </div>
        <BaseButton
          v-if="button"
          v-bind="button"
        />
      </div>
    </DWrapper>
  </DBackground>
</template>
