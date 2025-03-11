<script setup lang="ts">
const header = {
  id: "nLuVQJ3yv2_yKc-qXJK4L",
  type: "Header3",
  props: {
    image: {
      alt: "Frame 1135",
      src: "1739812076164-frame-1135.svg",
    },
    level: "4",
    title:
      " Schnell & unkompliziert:  Dein Halteverbot in der Region Hannover in wenigen Schritten",
    center: false,
    height: "md",
    buttons: [
      {
        link: {
          url: "/anfragen",
          target: "_self",
        },
        text: "Jetzt anfragen",
        inverse: true,
        variant: "primary",
      },
      {
        link: {
          url: "#ablauf",
          target: "_self",
        },
        text: "Zum Ablauf",
        inverse: true,
        variant: "secondary",
      },
    ],
    heading: "★★★★★ Für Privatpersonen & Unternehmen",
    benefits: [
      "Bequeme Online-Abwicklung – Kein Gang zum Amt nötig",
      "Schnelle Bearbeitung – In wenigen Tagen alles erledigt",
      "Fairer Festpreis – Transparent & ohne versteckte Gebühren",
    ],
    background: {
      color: "neutral",
    },
    description: "Jetzt online beantragen & stressfrei umziehen!",
    stackBenefits: true,
  },
  siteId: "2gzrcB0TOD4taudslS8Nq",
  workspaceId: "SXP1FxL5Uxy1W6Zn8sU1B",
  createdAt: "2025-02-14T14:03:20.505Z",
  updatedAt: "2025-02-14T14:03:20.505Z",
  deletedAt: null,
  order: "1",
};
</script>
<template>
  <div class="bg-red-500">hi</div>
  <HelloWorld />
  <BlockHeader3 v-bind="header" />
</template>
