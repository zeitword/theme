import { animate, inView, stagger } from "motion"
import type { TAnimationOptions } from "~~/types"

export function useScrollAnimation(
  elementRef: any,
  config: TAnimationOptions = {
    name: "slideInUp",
    enabled: true,
    duration: 0.3,
    delay: 0,
    stagger: {
      enabled: false,
      delay: 0.05
    }
  }
) {
  const isInView = ref(false)
  let stopViewTracking = () => {}

  const anim = computed(() => animations[config.name])

  onMounted(() => {
    if (!config.enabled || !anim.value) return

    if (config.stagger) {
      const elements = Array.from(elementRef.value.children)
      animate(elements, { ...anim.value.initial }, { duration: 0 })
    } else {
      animate(elementRef.value, { ...anim.value.initial }, { duration: 0 })
    }

    stopViewTracking = inView(
      elementRef.value,
      () => {
        isInView.value = true

        if (config.stagger?.enabled) {
          const elements = Array.from(elementRef.value.children)
          animate(
            elements,
            { ...anim.value.end },
            {
              duration: config.duration,
              delay: stagger(config.stagger?.delay)
            }
          )

          return () => {
            animate(elements, { ...anim.value.initial })
          }
        } else {
          animate(
            elementRef.value,
            { ...anim.value.end },
            {
              duration: config.duration,
              delay: config.delay
            }
          )

          return () => {
            animate(elementRef.value, { ...anim.value.initial })
          }
        }
      },
      { margin: "0px 0px -10% 0px" }
    )
  })

  onUnmounted(() => stopViewTracking())

  return {
    isInView
  }
}
