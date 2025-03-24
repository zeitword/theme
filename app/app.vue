<script setup lang="ts"></script>
<template>
  <block-navigation-1
    :links="[
      { id: 1, content: { text: 'Link 1', url: '#' } },
      { id: 2, content: { text: 'Link 2', url: '#' } },
    ]"
  />
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
      {
        content: {
          icon: 'X',
          title: 'Card 2',
          description: 'hi this is text',
        },
      },
    ]"
  />
</template>
