<script setup lang="ts">
export type TSize = "xs" | "sm" | "md" | "lg";

type TLink = {
  url: string;
  target?: "_blank" | "_self";
};

type TButton = {
  variant: "primary" | "secondary" | "transparent" | "text" | "accent";
  link?: TLink;
  text: string;
};

type Props = {
  heading?: string;
  level?: number;
  title?: string;
  description?: string;
  button?: TButton;
  width?: TSize;
  center?: boolean;
  animation?: any;
  inverse?: boolean;
};

const {
  heading = "",
  title = "",
  level = 2,
  width = "md",
  description = "",
  button,
  center,
  animation = {
    name: "rotateIn3d",
    duration: 0.3,
    delay: 0.0,
    enabled: true,
  },
  inverse = false,
} = defineProps<Props>();

type SizeOptions = {
  title: string;
  description: string;
};

const widthClasses: { [key: string]: SizeOptions } = {
  xs: {
    title: "max-w-xs",
    description: "max-w-sm",
  },
  sm: {
    title: "max-w-sm",
    description: "max-w-xl",
  },
  md: {
    title: "max-w-lg",
    description: "max-w-2xl",
  },
  lg: {
    title: "max-w-xl",
    description: "max-w-3xl",
  },
};
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <div
      class="flex flex-col gap-4"
      :class="[center ? 'mx-auto items-center text-center transition-all' : '']"
    >
      <div class="flex flex-col gap-2" v-if="heading || title">
        <BaseHeading
          v-if="heading"
          class="text-neutral-subtle"
          :animation="{ ...animation, delay: 0.0 }"
          :class="[widthClasses[width]?.title]"
          :inverse="inverse"
        >
          {{ heading }}
        </BaseHeading>
        <BaseTitle
          v-if="title"
          :level="level"
          neutral
          :animation="{ ...animation, delay: 0.15 }"
          :class="[widthClasses[width]?.title]"
          :inverse="inverse"
        >
          {{ title }}
        </BaseTitle>
      </div>
      <BaseText
        v-if="description"
        :animation="{ ...animation, name: 'slideInUp', delay: 0.3 }"
        size="md"
        class="max-w-3xl whitespace-pre-line"
        :class="[widthClasses[width]?.description]"
        :inverse="inverse"
      >
        {{ description }}
      </BaseText>
    </div>
    <BaseButton
      v-if="button"
      v-bind="button"
      :class="center ? 'mx-auto' : ''"
      :inverse="inverse"
    />
  </div>
</template>
