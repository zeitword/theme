<script setup lang="ts">
import type { TBackground, TSpacing, TButton } from "~~/types"
import { CheckIcon } from "lucide-vue-next"

interface Props {
  background: TBackground
  spacing: TSpacing
  heading?: string
  title?: string
  description?: string
  benefits?: string[]
  buttons?: TButton[]
}

const {
  spacing = {
    top: "None",
    bottom: "None"
  },
  background = {
    color: "neutral",
    visible: true
  },
  heading = "Why Choose Us",
  title = "Transform Your Business",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  benefits = ["24/7 Customer Support", "Easy Integration", "Scalable Solution", "Cost Effective"],
  buttons = [
    {
      label: "Get Started",
      href: "#",
      variant: "primary"
    },
    {
      label: "Learn More",
      href: "#",
      variant: "secondary"
    }
  ]
} = defineProps<Props>()
</script>

<template>
  <DBackground v-bind="background">
    <DWrapper :spacing="spacing">
      <div
        class="md:col-span-7 flex flex-col justify-center p-10 w-full md:py-24 text-center max-w-xl mx-auto"
      >
        <div class="mb-5">
          <div class="flex flex-col gap-3">
            <BaseHeading :level="3">
              {{ heading }}
            </BaseHeading>
            <BaseTitle :level="2">
              {{ title }}
            </BaseTitle>
            <BaseText size="md">
              {{ description }}
            </BaseText>
          </div>

          <!-- Benefits -->
          <div
            v-if="benefits"
            class="mt-5 flex gap-2 items-center justify-center flex-wrap"
          >
            <div
              v-for="check in benefits"
              class="flex gap-2 relative items-center"
            >
              <CheckIcon class="text-neutral-subtle size-5" />
              <BaseText class="flex-1 whitespace-nowrap">
                {{ check }}
              </BaseText>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <BaseButtonGroup v-if="buttons" class="mx-auto">
          <BaseButton v-for="button in buttons" v-bind="button" />
        </BaseButtonGroup>
      </div>
    </DWrapper>
  </DBackground>
</template>
