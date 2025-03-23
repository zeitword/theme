<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  buttons?: TButton[];
};

const { title, description, buttons } = defineProps<Props>();

const sortedButtons = computed(() => {
  return sortByOrder(buttons);
});
</script>

<template>
  <d-wrapper>
    <div
      class="text-center py-40 max-w-xl mx-auto flex flex-col gap-6 text-neutral"
    >
      <h1 class="text-5xl md:text-7xl">
        {{ title }}
      </h1>
      <p class="text-neutral-subtle">{{ description }}</p>
    </div>
    <div>
      <d-button
        v-for="button in sortedButtons"
        :key="button.id"
        v-bind="button.content"
      >
        {{ button.content.text }}
      </d-button>
    </div>
  </d-wrapper>
</template>
