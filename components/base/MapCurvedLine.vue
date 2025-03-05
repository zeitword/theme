<script setup lang="ts">
type Props = {
  marker1: string
  marker2: string
}
const props = defineProps<Props>()

const randAnimDelay = computed(() => {
  return Math.round(Math.random() * 1000)
})

const randAnimDuration = computed(() => {
  const min = 6000
  const max = 10000
  return Math.floor(Math.random() * (max - min + 1)) + min
})

const cssPathLength = ref(0)
const cssDoublePathLength = ref(0)
const cssNegativePathLength = ref(0)

const path = ref<SVGGeometryElement | null>(null)
function drawCurve() {
  const marker1 = document.getElementById(props.marker1)
  const marker2 = document.getElementById(props.marker2)
  if (!marker1 || !marker2 || !path.value) return

  const x1 = marker1.offsetLeft + marker1.offsetWidth / 2
  const y1 = marker1.offsetTop + marker1.offsetHeight / 2
  const x2 = marker2.offsetLeft + marker2.offsetWidth / 2
  const y2 = marker2.offsetTop + marker2.offsetHeight / 2

  const midX = (x1 + x2) / 2
  const midY = Math.min(y1, y2) - 30 // Control point for the curve

  const d = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`
  path.value.setAttribute("d", d)

  // Getting the total length of the path
  const pathLength = path.value.getTotalLength()
  path.value.style.strokeDasharray = `${pathLength}`
  path.value.style.strokeDashoffset = pathLength.toString()

  // Set CSS variables for animation
  cssPathLength.value = pathLength
  cssNegativePathLength.value = -pathLength
}

onMounted(() => {
  drawCurve()
  window.addEventListener("resize", drawCurve)
})
</script>
<template>
  <svg class="text-primary/70 pointer-events-none absolute top-0 left-0 z-10 h-full w-full" id="svg">
    <path
      class="animated-gradient"
      ref="path"
      :style="`animation-delay: ${randAnimDelay}ms; animation-duration: ${randAnimDuration}ms;`"
      stroke="currentColor"
      fill="transparent"
      stroke-width="1"
    />
  </svg>
</template>
<style scoped>
@keyframes move-gradient {
  0% {
    stroke-dashoffset: v-bind("cssPathLength");
  }
  20% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: v-bind("cssNegativePathLength");
  }
  60% {
    stroke-dashoffset: v-bind("cssNegativePathLength");
  }
  80% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: v-bind("cssPathLength");
  }
}

.animated-gradient {
  animation-name: move-gradient;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
