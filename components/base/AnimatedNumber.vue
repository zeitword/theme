<script setup lang="ts">
import { CountUp } from "countup.js"

const count = ref(0)
const counter = ref(null)

type Props = {
  start?: number
  end: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  start: 0,
  duration: 2
})

onMounted(() => {
  if (!counter.value) return
  const countUp = new CountUp(counter?.value, props.end, {
    duration: props.duration,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
    useGrouping: true,
    separator: "."
  })
  // countUp.start();
})
</script>

<template>
  <span ref="counter">{{ count }}</span>
</template>
