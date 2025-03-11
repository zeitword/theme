<script setup lang="ts">
import { NuxtLink } from "#components"
import type { TCard } from "@/types"

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

type CardStateOption = {
  default: string
  hover: string
}

type VariantOptions = {
  bg: CardStateOption
  text: CardStateOption
  iconBg: CardStateOption
  iconFg: CardStateOption
}

const variantClasses: { [key: string]: VariantOptions } = {
  neutral: {
    bg: {
      default: "bg-neutral-subtle",
      hover: "hover:bg-neutral-hover"
    },
    text: {
      default: "text-neutral",
      hover: "text-neutral-strong"
    },
    iconBg: {
      default: "bg-neutral-inverse",
      hover: "group-hover:bg-primary"
    },
    iconFg: {
      default: "text-neutral-inverse",
      hover: "group-hover:text-neutral-inverse"
    }
  },
  white: {
    bg: {
      default: "bg-neutral",
      hover: "hover:bg-neutral-hover"
    },
    text: {
      default: "text-neutral",
      hover: "text-neutral-strong"
    },
    iconBg: {
      default: "bg-neutral-inverse",
      hover: "group-hover:bg-primary"
    },
    iconFg: {
      default: "text-neutral-inverse",
      hover: "group-hover:text-neutral-inverse"
    }
  }
}

const variantClass = computed(() => {
  if (!variant || !variantClasses[variant]) return variantClasses["neutral"]
  return variantClasses[variant]
})
</script>

<template>
  <component
    :is="component"
    :to="link"
    class="group rounded-large relative z-1 flex flex-col items-start justify-between gap-5 p-1"
    :class="[variantClass?.bg.default, interactive ? variantClass?.bg.hover : '']"
  >
    <div class="flex flex-col">
      <div
        v-if="image"
        class="h-50 w-full"
      >
        <BaseImage
          v-bind="image"
          class="rounded-medium h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-col gap-5 p-5">
        <BaseBoxedIcon
          v-if="icon?.name"
          :icon="icon"
          :fg="variantClass?.iconFg.default"
          :bg="variantClass?.iconBg.default"
          :class="[interactive ? [variantClass?.iconFg.hover, variantClass?.iconBg.hover] : '']"
        />
        <BaseBoxedIcon
          v-else-if="number"
          :text="number"
          :fg="variantClass?.iconFg.default"
          :bg="variantClass?.iconBg.default"
          :class="[interactive ? [variantClass?.iconFg.hover, variantClass?.iconBg.hover] : '']"
        />
        <div class="flex flex-col gap-3">
          <BaseHeading
            v-if="heading"
            :animation="{ enabled: false }"
            :class="[variantClass?.text.default, interactive ? variantClass?.text.hover : '']"
          >
            {{ heading }}
          </BaseHeading>
          <BaseTitle
            :class="[variantClass?.text.default, interactive ? variantClass?.text.hover : '']"
            :animation="{ enabled: false }"
            :level="5"
            neutral
          >
            {{ title }}
          </BaseTitle>
          <BaseText
            :class="[variantClass?.text.default, interactive ? variantClass?.text.hover : '']"
            :animation="{ enabled: false }"
            size="sm"
            variant="strong"
            class="text-neutral-subtle"
          >
            {{ description }}
          </BaseText>
        </div>
      </div>
    </div>
    <div
      class="p-5"
      v-if="button"
    >
      <BaseButton v-bind="button" />
    </div>
  </component>
</template>
