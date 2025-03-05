<script setup lang="ts">
import { NuxtLink } from "#components"
import type { TCard } from "~~/types"

type Props = TCard

const {
  icon,
  image,
  variant = "neutral",
  heading = "",
  number = "",
  title = "",
  description = "",
  button = null,
  link = null,
  interactive = false
} = defineProps<Props>()

const component = computed(() => {
  if (link?.url) return NuxtLink
  return "div"
})
</script>

<template>
  <component
    :is="component"
    :to="link"
    class="group rounded-large relative z-1 flex min-h-[400px] flex-col items-start justify-between gap-5 overflow-hidden p-1"
  >
    <div class="absolute inset-0 size-full w-full">
      <BaseImage
        v-if="image"
        v-bind="image"
        :width="1000"
        :height="1000"
        class="size-full object-cover"
      />
      <div class="from-neutral-inverse/80 to-neutral-inverse/40 absolute inset-0 z-10 bg-gradient-to-r"></div>
    </div>
    <div class="relative flex flex-col">
      <div class="z-10 flex flex-col gap-5 p-5">
        <BaseBoxedIcon
          v-if="icon?.name"
          fg="text-neutral-inverse"
          bg="bg-neutral"
          :icon="icon"
        />
        <BaseBoxedIcon
          v-else-if="number"
          fg="text-neutral-inverse"
          bg="bg-neutral"
          :text="number"
        />
        <div class="flex flex-col gap-3">
          <BaseHeading
            v-if="heading"
            :animation="{ enabled: false }"
            inverse
          >
            {{ heading }}
          </BaseHeading>
          <BaseTitle
            :animation="{ enabled: false }"
            :level="4"
            neutral
            inverse
          >
            {{ title }}
          </BaseTitle>
          <BaseText
            :animation="{ enabled: false }"
            size="sm"
            variant="strong"
            inverse
          >
            {{ description }}
          </BaseText>
        </div>
      </div>
    </div>
    <div
      class="relative z-10 p-5"
      v-if="button"
    >
      <BaseButton
        v-bind="button"
        inverse
      />
    </div>
  </component>
</template>
