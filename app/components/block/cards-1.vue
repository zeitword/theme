<script setup lang="ts">
type Props = {
  cards: TCard[];
};

const { cards } = defineProps<Props>();

const sortedCards = computed(() => {
  return sortByOrder(cards);
});
</script>

<template>
  <d-wrapper>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:nth-child(odd):last-child]:md:col-span-2"
    >
      <d-card
        v-for="card in sortedCards"
        :key="card.id"
        v-bind="card.content"
      />
    </div>
  </d-wrapper>
</template>
