<script setup lang="ts">
import type { TBackground, TSpacing, TContact } from "~~/types";
import { MapPin } from "lucide-vue-next";

interface Props {
	id: string
  background?: TBackground
  spacing?: TSpacing
  contacts: TContact[]
}

const {
  background = {
    color: "neutral",
    visible: true
  },
  spacing = {
    top: "md",
    bottom: "md"
  },
  contacts = [
    {
      name: "John Smith",
      roleLabel: "Functional Role",
      role: "CHIEF EXECUTIVE OFFICER",
      description:
        "John Smith leads our operational excellence with a hands-on, goal-oriented approach. His commitment ensures all projects are delivered on time and to the highest standards, while fostering innovation across all departments.",
      email: "john.smith@company.com",
      phone: "123-456-7890",
      image: {
        src: "/images/placeholder.png",
        alt: "John Smith",
      },
      tags: ["AI", "Blockchain", "Data Science"],
      location: "Berlin, Germany",
    },
    {
      name: "Sarah Johnson",
      role: "MANAGING DIRECTOR",
      description:
        "Sarah Johnson shapes our strategic direction and represents our parent company's interests. With her extensive experience and forward-thinking approach, she ensures we're well-positioned to meet future industry challenges.",
      email: "sarah.johnson@company.com",
      phone: "123-456-7891",
      image: {
        src: "/images/placeholder.png",
        alt: "Sarah Johnson",
      },
      tags: ["Technical", "Product", "Marketing"],
    },
    {
      name: "Michael Chen",
      role: "CHIEF OPERATIONS OFFICER",
      description:
        "Michael Chen oversees daily operations with a focus on efficiency and scalability. His innovative approaches to process optimization have transformed our operational capabilities and customer satisfaction metrics.",
      email: "michael.chen@company.com",
      phone: "123-456-7892",
      image: {
        src: "/images/placeholder.png",
        alt: "Michael Chen",
      },
      tags: ["Bookkeeping", "Finance", "HR"],
    },
  ],
} = defineProps<Props>();
</script>

<template>
  <DBackground v-bind="background" :id>
    <DWrapper :spacing="spacing">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="contact in contacts"
          class="flex flex-col items-center md:items-start gap-3 hover:bg-neutral-hover p-1 group"
        >
          <div class="w-full max-w-[400px] h-[350px] relative">
            <div
              v-if="contact.location"
              class="absolute top-2 left-2 inline-flex bg-neutral-subtle px-1 rounded-pill text-xs text-neutral-subtle items-center gap-1 py-1 pr-2"
            >
              <MapPin class="size-4" />
              <p class="uppercase">{{ contact.location }}</p>
            </div>
            <BaseImage v-bind="contact.image" class="size-full object-cover" />
          </div>
          <div class="flex flex-col gap-4 p-2">
            <h3 class="text-primary text-2xl font-weight-medium">
              {{ contact.name }}
            </h3>
            <div>
              <p class="uppercase text-xs text-neutral-subtle">
                {{ contact.roleLabel }}
              </p>
              <p v-if="contact.role" class="text-neutral-subtle">
                {{ contact.role }}
              </p>
            </div>
            <div class="flex flex-wrap gap-2 items-center" v-if="contact.tags">
              <div
                v-for="tag in contact.tags"
                class="inline-flex items-center gap-1 rounded-pill bg-neutral-subtle px-2 py-px group-hover:bg-neutral"
              >
                <p>{{ tag }}</p>
              </div>
            </div>
            <p v-if="contact.description" class="text-neutral-subtle">
              {{ contact.description }}
            </p>
            <div
              class="flex flex-col gap-2 md:items-start"
              v-if="contact.links"
            >
              <NuxtLink
                v-for="link in contact.links"
                :to="link.link"
                class="hover:underline inline-flex text-neutral-subtle items-center"
              >
                <BaseIcon :name="link.icon" class="size-4" />
                <span class="ml-2">{{ link.text }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </DWrapper>
  </DBackground>
</template>
