import type { TAnimationKeyframes, TAnimationName } from "~~/types";

export const animations: { [K in TAnimationName]: TAnimationKeyframes } = {
  slideInUp: {
    initial: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
    },
    classes: "perspective-normal origin-left",
  },

  rotateIn3d: {
    initial: {
      rotateX: -20,
      scale: 0.9,
      opacity: 0,
    },
    end: {
      rotateX: 0,
      scale: 1,
      opacity: 1,
    },
    classes: "perspective-normal origin-top",
  },

  rotateIn: {
    initial: {
      scale: 0.9,
      opacity: 0.0,
      x: -10,
      rotateZ: 2,
    },
    end: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotateZ: 0,
    },
  },

  scaleIn: {
    initial: {
      scale: 0.6,
      opacity: 0.0,
    },
    end: {
      scale: 1,
      opacity: 1,
    },
  },
};
