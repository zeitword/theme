<script setup lang="ts">
import type { TBackground, TImage, TIntro, TSpacing } from "~~/types"
import { ref, onMounted } from "vue"
import { ChevronsLeftRight } from "lucide-vue-next"

interface Props {
	id: string
  spacing: TSpacing
  background: TBackground
  intro: TIntro
  before?: TImage
  after?: TImage
}

const {
  spacing = {
    vertical: "md"
  },
  background = {
    color: "neutral"
  },
	before = {
		src: "placeholder.png",
		alt: "placeholder"
	},
  after = {
		src: "placeholder.png",
		alt: "placeholder"
	},
} = defineProps<Props>()

const sliderPosition = ref(50)
const isDragging = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const updateSliderPosition = (event: MouseEvent | TouchEvent) => {
  if (!containerRef.value) return

  const container = containerRef.value.getBoundingClientRect()
  const x = "touches" in event ? event.touches[0]?.clientX : event.clientX
	if(!x) return
  const position = ((x - container.left) / container.width) * 100

  sliderPosition.value = Math.min(Math.max(0, position), 100)
}

const startDragging = () => {
  isDragging.value = true
}

const stopDragging = () => {
  isDragging.value = false
}

onMounted(() => {
  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (isDragging.value) {
      updateSliderPosition(event)
    }
  }

  window.addEventListener("mousemove", handleMove)
  window.addEventListener("touchmove", handleMove)
  window.addEventListener("mouseup", stopDragging)
  window.addEventListener("touchend", stopDragging)

  return () => {
    window.removeEventListener("mousemove", handleMove)
    window.removeEventListener("touchmove", handleMove)
    window.removeEventListener("mouseup", stopDragging)
    window.removeEventListener("touchend", stopDragging)
  }
})
</script>

<template>
  <DBackground v-bind="background" :id>
    <DWrapper :spacing="spacing">
      <div class="space-y-12">
        <BaseIntro v-bind="intro" />
        <div
          class="relative overflow-hidden rounded-lg select-none h-[300px] md:h-[700px] group"
          v-if="before?.src || after?.src"
          ref="containerRef"
          @mousedown="startDragging"
          @touchstart="startDragging"
        >
          <!-- Before Image Container -->
          <div class="absolute inset-0 w-full overflow-hidden">
            <BaseImage
              v-bind="after"
              :width="1000"
							:height="700"
              class="h-full w-full object-cover object-left"
            />
          </div>

          <!-- After Image Container -->
          <div
            class="absolute inset-0 overflow-hidden"
            :style="{ width: `${sliderPosition}%` }"
          >
            <div
              class="absolute inset-0"
              :style="{ width: `${100 / (sliderPosition / 100)}%` }"
            >
              <BaseImage
                v-bind="before"
                :width="1000"
							:height="700"
                class="h-full w-full object-cover object-left"
              />
            </div>
          </div>

          <!-- Slider Control -->
          <div
            class="absolute inset-y-0"
            :style="{ left: `${sliderPosition}%` }"
          >
            <div class="absolute inset-y-0 -ml-px w-0.5 bg-neutral-subtle group-hover:bg-neutral"></div>
            <div
              class="group-hover:shadow-xl group-hover:bg-neutral absolute top-1/2 -mt-4 -ml-4 h-8 w-8 cursor-pointer rounded-full bg-neutral-subtle group-hover:scale-100 active:scale-95 md:scale-50 md:opacity-0 group-hover:opacity-100 transition-all"
              :class="{ 'cursor-grabbing': isDragging }"
            >
              <!-- Slider Arrows -->
              <div
                class="group-hover:text-neutral text-neutral-subtle absolute inset-0 flex items-center justify-center"
              >
                <ChevronsLeftRight class="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DWrapper>
  </DBackground>
</template>
