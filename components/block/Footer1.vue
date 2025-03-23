<script setup lang="ts">
// import type { TBackground, TBadge, TLink, TImageLink, TTextLink, TSpacing } from "@/types"

interface Props {
  id: string;
  links: TTextLink[];
  legal: TTextLink[];
  logo: TImageLink;
  company: string;
  disclaimer?: string;
  badge?: TBadge;
}

const {
  background = {
    color: "neutral",
    visible: true,
  },
  spacing = {
    vertical: "md",
  },
  links = [
    { text: "About", link: { url: "/about" } },
    { text: "Services", link: { url: "/services" } },
    { text: "Contact", link: { url: "/contact" } },
  ],
  legal = [
    { text: "Privacy Policy", link: { url: "/privacy" } },
    { text: "Terms of Service", link: { url: "/terms" } },
  ],
  logo = {
    image: {
      src: "placeholder.png",
      alt: "Company Logo",
    },
    link: { url: "/" },
  },
  company = "Company Name",
  disclaimer = "This website is protected by applicable law. All rights reserved.",
} = defineProps<Props>();

const computedYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <DBackground v-bind="background" :id>
    <DWrapper :spacing="spacing">
      <div class="flex flex-col gap-4">
        <div
          class="flex h-full flex-col justify-stretch gap-4 lg:flex-row lg:items-center"
        >
          <div class="flex-1 flex items-center">
            <NuxtLink :to="logo.link.url" class="inline-flex h-8">
              <BaseImage
                class="h-full max-w-[120px] min-w-10 object-contain object-left"
                v-bind="logo.image"
              />
            </NuxtLink>
          </div>
          <nav
            class="flex h-full flex-col gap-4 text-sm md:flex-row md:gap-7 lg:items-center"
          >
            <NuxtLink
              v-for="link in links"
              :to="link.link.url"
              :target="link.link.target"
              class="text-neutral-subtle hover:text-neutral"
            >
              {{ link.text }}
            </NuxtLink>
          </nav>
          <div
            class="flex h-full flex-1 items-center gap-5 text-sm lg:justify-end"
          >
            <NuxtLink
              v-for="link in legal"
              :to="link.link.url"
              :target="link.link.target"
              class="text-neutral-subtle underline"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
        </div>
        <div class="text-neutral-subtle text-sm">
          <p>
            © {{ computedYear }}
            <span>{{ company }}</span>
            • Alle Rechte vorbehalten.
          </p>
        </div>
        <div v-if="disclaimer" class="bg-neutral-strong h-px" />
        <div v-if="disclaimer" class="text-neutral-subtle text-sm">
          <p>{{ disclaimer }}</p>
        </div>
      </div>
    </DWrapper>
    <div
      v-if="badge"
      class="group relative flex h-12 w-full justify-center overflow-hidden"
    >
      <NuxtLink
        :to="badge.link?.url"
        :target="badge.link?.target"
        class="bg-neutral absolute -bottom-2 inline-flex items-center gap-2 rounded-md rounded-b-none p-2 pb-4 shadow-sm transition-all group-hover:bottom-0"
      >
        <BaseImage v-bind="badge.logo" class="size-5" />
        <p class="text-neutral text-sm">
          {{ badge.text }}
        </p>
      </NuxtLink>
    </div>
  </DBackground>
</template>
