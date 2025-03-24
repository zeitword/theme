<script setup lang="ts">
const links = [
  {
    id: "0195c915-2bee-7eaf-8c88-55dc184eb8cd",
    order: "0|hzzzzz:",
    content: {
      url: "/",
      text: "Home",
      target: "_self",
    },
    componentId: "0195c914-80a5-704c-a54b-ab5c7baddc24",
  },
  {
    id: "0195c916-0109-7d07-849d-12a5456f2f29",
    order: "0|i00007:",
    content: {
      url: "/what",
      text: "What",
      target: "_self",
    },
    componentId: "0195c914-80a5-704c-a54b-ab5c7baddc24",
  },
];
</script>
<template>
  <block-navigation-1 :links="links" />
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
