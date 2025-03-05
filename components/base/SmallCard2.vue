<script setup lang="ts">
import type { TBaseCard } from "~~/types"

type Props = {
  fgIconColor: string
  bgIconColor: string
}
type TCardProps = TBaseCard & Props
const { fgIconColor = "text-primary", bgIconColor = "bg-secondary" } = defineProps<TCardProps>()
</script>

<template>
  <div class="group bg-neutral relative overflow-hidden">
    <div class="relative z-1 flex items-center gap-4 p-6">
      <div v-if="icon" :class="[fgIconColor, bgIconColor]" class="grid size-10 place-items-center">
        <BaseIcon :name="icon" class="size-5 stroke-2" />
      </div>
      <div>
        <BaseHeading v-if="heading">
          {{ heading }}
        </BaseHeading>
        <BaseTitle v-if="title" neutral :level="4" variant="strong">
          {{ title }}
        </BaseTitle>
        <BaseText v-if="description" size="sm">
          {{ description }}
        </BaseText>
      </div>
    </div>
  </div>
</template>
