<script setup lang="ts">
import { MenuIcon, XIcon } from "lucide-vue-next"
import { useWindowSize, useWindowScroll } from "@vueuse/core"

const { width } = useWindowSize()
const { y } = useWindowScroll()

interface Props {
  logo?: TImageLink
  links: TTextLink[]
  button?: TButton
  startInverted?: boolean
}

const {
  logo = {
    image: { src: "logo.svg" },
    link: { url: "/", target: "_self" }
  },
  links = [
    { text: "Home", link: { url: "/", target: "_self" } },
    { text: "About", link: { url: "/about", target: "_self" } },
    { text: "Contact", link: { url: "/contact", target: "_self" } }
  ],
  button = { text: "Get Started", link: { url: "/docs", target: "_self" } }
} = defineProps<Props>()

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const lg_BREAKPOINT = 1024

watch(width, () => {
  if (width.value >= lg_BREAKPOINT) {
    menuOpen.value = false
  }
})

const isScrolled = computed(() => {
  return y.value > 100
})
</script>

<template>
  <div
    class="transition-background fixed z-80 w-full duration-500 ease-in-out"
    :class="!isScrolled ? 'border-neutral/0' : 'bg-neutral border-neutral border-b'"
  >
    <DWrapper
      class="transition-all"
      :class="isScrolled ? 'py-3' : 'py-5'"
    >
      <div class="flex items-center gap-2">
        <div class="flex flex-1 items-center">
          <NuxtLink
            v-if="logo"
            :href="logo.link.url"
            :target="logo.link.target"
            class="inline-flex h-full"
          >
            <BaseImage
              class="h-full min-w-10 object-contain transition-all duration-500 ease-in-out"
              :class="[isScrolled ? 'max-w-20' : 'max-w-32', startInverted && !isScrolled ? 'invert' : '']"
              v-bind="logo.image"
            />
          </NuxtLink>
        </div>
        <div class="flex h-full items-center justify-stretch">
          <nav class="hidden h-full items-center gap-7 lg:flex">
            <BaseLink
              v-for="link in links"
              :to="link.link.url"
              :target="link.link.target"
              :inverse="!isScrolled && startInverted"
            >
              {{ link.text }}
            </BaseLink>
          </nav>
        </div>
        <div class="flex h-full flex-1 items-center justify-end">
          <div class="lg:hidden">
            <button
              @click="toggleMenu"
              class="bg-primary text-neutral-inverse grid size-12 place-items-center rounded-full"
            >
              <MenuIcon
                v-if="!menuOpen"
                class="size-5"
              />
              <XIcon
                v-else
                class="size-5"
              />
            </button>
          </div>
          <div
            class="hidden lg:block"
            v-if="button"
          >
            <BaseButton
							:inverse="!isScrolled && startInverted"
							v-bind="button"></BaseButton>
          </div>
        </div>
      </div>
    </DWrapper>
  </div>
  <div
    v-if="menuOpen"
    class="bg-neutral fixed top-0 z-40 h-full w-full pt-20 lg:hidden"
  >
    <DWrapper>
      <div
        class="flex flex-col"
        @click="menuOpen = false"
      >
        <a
          v-for="link in links"
          :href="link.link.url"
          :target="link.link.target"
          class="text-neutral-subtle hover:text-neutral border-neutral flex border-b py-6"
        >
          {{ link.text }}
        </a>
        <BaseButton
          v-if="button"
          v-bind="button"
          class="mt-5"
        ></BaseButton>
      </div>
    </DWrapper>
  </div>
</template>
<style scoped>
.highlight.router-link-active {
  color: black;
}
</style>
