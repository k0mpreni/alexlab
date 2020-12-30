<script>
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<div transition:slide={{ delay: 0, duration: 250, easing: sineOut }}>
  <h1>Random stuff</h1>

  <h2>Experiments</h2>
  <ul>
    <li>
      <a href="experiments/wasm-identicon" rel="prefetch">A Go WASM Identicon generator</a>
    </li>
    <li>
      <a href="experiments/wasm-calculator" rel="prefetch">
        A simple Go WASM calculator (add and subtract)
      </a>
    </li>
  </ul>

  <h2>Readings</h2>
  <ul>
    <li>
      <a href="readings/2020" rel="prefetch">My 2020 readings</a>
    </li>
    <li>
      <a href="readings/2019" rel="prefetch">My 2019 readings</a>
    </li>
  </ul>
</div>
