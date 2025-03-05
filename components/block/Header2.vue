<script setup lang="ts">
import type { TBackground, TButton, TImage, TSize } from "~~/types"

interface TSlide {
  name: string
  image: TImage
  title1: string
  title2: string
}

interface Props {
  id: string
  background: TBackground
  slides: TSlide[]
  heading?: string
  benefits?: string[]
  description?: string
  buttons?: TButton[]
  height: "full" | "md"
  width?: TSize
  center: boolean
}

const {
	background = {
		color: "white"
	},
  slides = [
    {
      name: "development",
      image: {
        src: "placeholder.png",
        alt: "placeholder"
      },
      title1: "We help you with",
      title2: "Development"
    },
    {
      name: "design",
      image: {
        src: "placeholder.png",
        alt: "placeholder"
      },
      title1: "We help you with",
      title2: "Design"
    }
  ],
  heading = "This is a short headline",
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
  center = false
} = defineProps<Props>()

const isInverted = computed(() => {
  return !!slides
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

const currentSlide = ref(0)

function setSlide(index: number) {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  setInterval(nextSlide, 5000)
})

function getSlideClass(index: number) {
  if (index === currentSlide.value) {
    return "left-0 z-10"
  }
  if (index === (currentSlide.value + 1) % slides.length) {
    return "left-full"
  }

  if (index === currentSlide.value - 1) {
    return "-left-full"
  }
  return "left-full z-0"
}

const currentSlideData = computed(() => {
  return {
    name: slides[currentSlide.value]?.name,
    title1: slides[currentSlide.value]?.title1,
    title2: slides[currentSlide.value]?.title2
  }
})
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
      <div class="absolute inset-0 overflow-hidden transition-all xl:inset-2 xl:rounded-lg">
        <template
          v-for="(slide, index) in slides"
          :key="slide.name"
        >
          <BaseImage
            v-if="slide.image && slide.image.src !== undefined"
            v-bind="slide.image"
            :width="2500"
            :height="2500"
            class="absolute top-0 size-full w-full object-cover object-[center_20%] transition-all duration-500"
            :class="getSlideClass(index)"
          />
        </template>
        <div
          v-if="slides"
          class="from-neutral-inverse/50 to-neutral-inverse/10 absolute inset-0 z-20 size-full bg-gradient-to-t"
        ></div>
      </div>
      <DWrapper
        class="relative z-30 mx-auto h-full py-10 md:py-20"
        :class="widthClasses[width]"
      >
        <div
          class="flex h-full flex-col justify-end gap-2 md:gap-6"
          :class="center ? 'items-center text-center' : 'items-start'"
        >
          <div
            v-if="slides"
            class="flex items-center gap-2 flex-wrap"
          >
            <div
              v-for="(slide, index) in slides"
              :key="slide.name"
              class="text-copy inline-flex rounded-full px-3 py-1.5 transition-all cursor-pointer"
              :class="
                index === currentSlide
                  ? 'bg-neutral text-neutral'
                  : 'bg-neutral/10 text-neutral-inverse/80 backdrop-blur-xs hover:bg-neutral/20 hover:text-neutral-inverse'
              "
							@click="setSlide(index)"
            >
              {{ slide.name }}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <BaseTitle
              v-if="slides"
              :level="3"
              :inverse="isInverted"
              neutral
            >
              {{ currentSlideData.title1 }}
            </BaseTitle>

            <BaseTitle
              v-if="slides"
              :level="3"
              :inverse="isInverted"
              neutral
							class="font-bold"
            >
              {{ currentSlideData.title2 }}
            </BaseTitle>
          </div>
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
            class="flex flex-wrap items-center gap-5"
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
            />
          </BaseButtonGroup>
        </div>
      </DWrapper>
    </div>
  </DBackground>
</template>
