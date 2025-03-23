<script setup lang="ts">
type Props = {
  html: string;
};
const { html } = defineProps<Props>();
</script>
<template>
  <DBackground>
    <DWrapper>
      <div v-html="html" class="prose"></div>
    </DWrapper>
  </DBackground>
</template>
