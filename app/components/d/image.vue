<script setup lang="ts">
import { ImageOff } from "lucide-vue-next";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

const {
  src,
  alt,
  width = 1000,
  height = 500,
  position = { left: 50, top: 50 },
} = defineProps<Props>();
</script>

<template>
  <NuxtImg
    v-if="!hasError"
    :width="width"
    :height="height"
    :src="src"
    :alt="alt"
    v-slot="{ src, isLoaded, imgAttrs }"
    @error="hasError = true"
  >
    <img
      v-if="isLoaded"
      v-bind="imgAttrs"
      :src="src"
      @error="hasError = true"
      @load="hasError = false"
    />
  </NuxtImg>
  <div
    v-else
    class="bg-neutral-strong text-neutral-weak grid place-items-center size-full"
  >
    <div class="flex flex-col gap-2 items-center">
      <ImageOff class="size-4 stroke-3" />
    </div>
  </div>
</template>
