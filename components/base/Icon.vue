<script setup lang="ts">
import { computed } from "vue"
import { icons } from "lucide-vue-next"
import type { TIcon } from "@/types"

type Props = {
  icon: TIcon
}

const { icon } = defineProps<Props>()

const iconComponent = computed(() => {
  if (!icon?.name) return null
  return icons[icon.name as keyof typeof icons]
})
</script>

<template>
	<!-- <pre>{{icon}}	</pre> -->
  <component :is="iconComponent"></component>
</template>
