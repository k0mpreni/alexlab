<script>
  import { slide } from "svelte/transition";
  import { quintInOut } from "svelte/easing";
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<div transition:slide={{ delay: 0, duration: 250, easing: quintInOut }}>
<h1>Random stuff</h1>

<ul>
  <li>
    <a href="readings">My 2019 readings</a>
  </li>
</ul>
</div>
