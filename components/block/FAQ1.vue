<script setup lang="ts">
import type { QuestionsProps, TIntro, TButton, TBackground, TSpacing } from "@/types"
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from "reka-ui"
import { ChevronDown } from "lucide-vue-next"

interface Props {
  background: TBackground
  spacing: TSpacing
  intro: TIntro
  footerHeading: string
  footerDescription: string
  questions: QuestionsProps[]
  buttons: TButton[]
}

const {
  intro = {
    heading: "A short heading",
    title: "FAQs",
    level: 3,
    width: "md",
    description: "This is a short description",
    center: true
  },
  spacing = {
    vertical: "md"
  },
  questions = [
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    }
  ],
  footerHeading = "Still have questions?",
  footerDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
} = defineProps<Props>()
</script>

<template>
  <DBackground v-bind="background">
    <DWrapper :spacing>
      <div class="mx-auto max-w-2xl space-y-12">
        <BaseIntro v-bind="intro" />
        <AccordionRoot
          class="overflow-hidden"
          default-value="0"
          type="single"
          :collapsible="true"
        >
          <template
            v-for="(item, index) in questions"
            :key="index"
          >
            <AccordionItem
              class="border-neutral overflow-hidden border-t last:border-b focus-within:relative focus-within:z-10"
              :value="index.toString()"
            >
              <AccordionHeader class="flex">
                <AccordionTrigger
                  class="group border-neutral text-title-xs text-neutral flex h-[60px] flex-1 cursor-pointer items-center justify-between px-2 leading-none outline-none"
                >
                  <span>{{ item.title }}</span>
                  <ChevronDown
                    class="transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-label="Expand/Collapse"
                  />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent
                class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-copy-md text-neutral overflow-hidden"
              >
                <div class="px-2 py-4">
                  {{ item.answer }}
                </div>
              </AccordionContent>
            </AccordionItem>
          </template>
        </AccordionRoot>
        <div class="mx-auto mt-6 max-w-md text-center md:mt-9 lg:mt-10">
          <h4 class="text-title-sm mb-2 md:mb-2 md:text-xl md:leading-[1.3] lg:text-2xl">
            {{ footerHeading }}
          </h4>
          <BaseText
            :animation="{ enabled: false }"
            size="xs"
          >
            {{ footerDescription }}
          </BaseText>
          <BaseButtonGroup
            v-if="buttons?.length > 0"
            class="mt-4 w-full justify-center"
          >
            <BaseButton
              v-for="button in buttons"
              v-bind="button"
            />
          </BaseButtonGroup>
        </div>
      </div>
    </DWrapper>
  </DBackground>
</template>
