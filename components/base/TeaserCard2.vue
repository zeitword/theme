<script setup lang="ts">
import { NuxtLink } from "#components"
import type { TBaseCard } from "~~/types"

const {
  icon = "",
  heading = "",
  title = "",
  description = "",
  button = null,
  variant = "undefined",
  blanket = false,
  link = "",
  interactive = false
} = defineProps<TBaseCard>()

const component = computed(() => {
  if (link) return NuxtLink
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
  default: {
    bg: {
      default: "border border-neutral",
      hover: "hover:bg-accent"
    },
    text: {
      default: "text-neutral",
      hover: "hover:text-accent"
    },
    iconBg: {
      default: "bg-secondary",
      hover: "hover:bg-primary"
    },
    iconFg: {
      default: "text-primary",
      hover: "hover:text-accent"
    }
  },
  primary: {
    bg: {
      default: "bg-primary",
      hover: "hover:bg-accent"
    },
    text: {
      default: "text-primary-inverse",
      hover: "hover:text-accent"
    },
    iconBg: {
      default: "bg-secondary",
      hover: "hover:bg-primary"
    },
    iconFg: {
      default: "text-primary",
      hover: "hover:text-accent"
    }
  },
  secondary: {
    bg: {
      default: "bg-secondary",
      hover: "hover:bg-accent"
    },
    text: {
      default: "text-neutral",
      hover: "hover:text-accent"
    },
    iconBg: {
      default: "bg-accent",
      hover: "hover:bg-primary"
    },
    iconFg: {
      default: "text-primary",
      hover: "hover:text-accent"
    }
  },
  accent: {
    bg: {
      default: "bg-accent",
      hover: "hover:bg-primary"
    },
    text: {
      default: "text-neutral",
      hover: "hover:text-primary-inverse"
    },
    iconBg: {
      default: "bg-primary",
      hover: "hover:bg-accent"
    },
    iconFg: {
      default: "text-accent",
      hover: "hover:text-primary"
    }
  },
  white: {
    bg: {
      default: "bg-neutral",
      hover: "hover:bg-neutral-hover"
    },
    text: {
      default: "text-neutral",
      hover: "hover:text-neutral"
    },
    iconBg: {
      default: "bg-secondary",
      hover: "hover:bg-primary"
    },
    iconFg: {
      default: "text-neutral",
      hover: "hover:text-neutral"
    }
  }
}

const variantClass = computed(() => {
  if (!variant || variant === "None" || variantClasses[variant] === undefined)
    return {
      bg: {
        default: "border border-neutral",
        hover: "hover:border-accent hover:bg-accent"
      },
      text: { default: "", hover: "" },
      iconBg: {
        default: "bg-secondary",
        hover: "group-hover:bg-primary"
      },
      iconFg: {
        default: "text-primary",
        hover: "group-hover:text-accent"
      }
    }
  return variantClasses[variant]
})
</script>

<template>
  <component
    :is="component"
    :to="link"
    class="group rounded-large relative z-1 flex flex-col items-start gap-10 p-5"
    :class="[variantClass.bg.default, interactive ? variantClass.bg.hover : '']"
  >
    <BaseBoxedIcon
      v-if="icon"
      :icon="icon"
      :fg="variantClass.iconFg.default"
      :bg="variantClass.iconBg.default"
      :class="[interactive ? [variantClass.iconFg.hover, variantClass.iconBg.hover] : '']"
    />
    <BaseBoxedIcon
      v-if="number"
      :text="number"
      :fg="variantClass.iconFg.default"
      :bg="variantClass.iconBg.default"
      :class="[interactive ? [variantClass.iconFg.hover, variantClass.iconBg.hover] : '']"
    />
    <BaseHeading
      v-if="heading"
      :inverse="blanket"
      :animation="{ enabled: false }"
      :class="[variantClass.text.default, interactive ? variantClass.text.hover : '']"
    >
      {{ heading }}
    </BaseHeading>
    <BaseTitle :class="[variantClass.text.default, interactive ? variantClass.text.hover : '']" :animation="{ enabled: false }" :level="4" neutral>
      {{ title }}
    </BaseTitle>
    <BaseText
      :class="[variantClass.text.default, interactive ? variantClass.text.hover : '']"
      :animation="{ enabled: false }"
      size="sm"
      :inverse="blanket"
      variant="strong"
    >
      {{ description }}
    </BaseText>
    <BaseButton v-if="button" v-bind="button" />
  </component>
</template>
