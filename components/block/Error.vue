<script setup lang="ts">
import { AlertCircle } from "lucide-vue-next"
defineProps<{
  missingComponent?: string
}>()
</script>

<template>
  <DWrapper :spacing="{ vertical: 'sm' }">
    <div class="border-neutral-subtle bg-neutral flex items-center gap-4 rounded-md border p-4 text-sm">
      <div class="text-neutral-inverse bg-neutral grid size-8 place-items-center rounded-md shadow">
        <AlertCircle class="size-4 stroke-3 text-red-500" />
      </div>
      <p class="text-neutral-subtle">
        Failed to load component:
        <span class="font-weight-bold font-mono text-red-600"> {{ missingComponent }}</span>
      </p>
    </div>
  </DWrapper>
</template>
