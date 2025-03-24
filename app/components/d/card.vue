<script setup lang="ts">
type Props = {
  icon?: string;
  title: string;
  description: string;
  buttons?: TButton[];
};

const { icon, title, description, buttons } = defineProps<Props>();

const sortedButtons = computed(() => {
  if (!buttons) return [];
  return sortByOrder(buttons);
});
</script>

<template>
  <div
    ref="cardRef"
    class="p-7 border border-neutral flex-1 text-neutral space-y-10 relative group hover:bg-neutral-800 transition-all overflow-hidden"
  >
    <div class="z-10 relative space-y-10">
      <div
        v-if="icon"
        class="size-10 grid place-items-center group-hover:bg-neutral-700 transition-all"
      >
        <d-icon :name="icon" class="group-hover:text-white transition-all" />
      </div>
      <div class="space-y-2 max-w-xl">
        <h3 class="text-copy-lg text-neutral group-hover:text-neutral-inverse">
          {{ title }}
        </h3>
        <p
          class="text-copy text-neutral-subtle group-hover:text-neutral-inverse-subtle"
        >
          {{ description }}
        </p>
      </div>
      <div v-if="buttons && buttons.length > 0" class="flex gap-2">
        <d-button
          v-for="button in sortedButtons"
          :key="button.id"
          :to="button.content.link"
        >
          {{ button.content.text }}
        </d-button>
      </div>
    </div>
  </div>
</template>
