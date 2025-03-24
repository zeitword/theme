<script setup lang="ts"></script>
<template>
  <block-hero-1
    title="HI"
    description="hi this is a description"
    :buttons="[
      { id: 1, content: { text: 'Button 1', href: '#' } },
      { id: 2, content: { text: 'Button 2', href: '#' } },
    ]"
  />
  <block-cards-1
    :cards="[
      {
        content: {
          icon: 'Activity',
          title: 'Card 1',
          description: 'hi this is text',
        },
      },
    ]"
  />
</template>
