import { quintOut } from "svelte/easing";
import { elasticOut } from "svelte/easing";
import { crossfade } from "svelte/transition";
const [send, receive] = crossfade({
  easing: elasticOut,
  duration: d => Math.sqrt(d * 500),
  fallback(node, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      duration: 60,
      easing: quintOut,
      css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    };
  }
});

export { send, receive };
