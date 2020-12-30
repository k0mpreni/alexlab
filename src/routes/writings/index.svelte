<script context="module">
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { posts } from "./_posts";
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Writings</title>
</svelte:head>

<div transition:slide={{ delay: 0, duration: 250, easing: sineOut }}>
  <h1>Writings</h1>
  <ul>
    <li>
      <a
        href="https://www.ekino.com/articles/passwords-are-boring"
        target="_blank"
        rel="noopener noreferrer">
        Passwords are boring
      </a>
    </li>
    {#each posts as post}
      <li>
        <a href={`/writings/${post.permalink}`}>{post.title}</a>
      </li>
    {/each}
  </ul>
</div>
