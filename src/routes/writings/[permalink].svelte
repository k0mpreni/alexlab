<script context="module">
  // import the logic for finding a post based on permalink
  import { findPost } from "./_posts.js";

  // sapper calls this to load our data
  export function preload(page) {
    // find the post based on the permalink param
    const post = findPost(page.params.permalink);

    // return a list of props
    return { post };
  }
</script>

<script>
  // this prop is filled from the result of the `preload()`
  export let post;
</script>

<style>
  h1 {
    text-align: center
  }
</style>

<!-- display the post -->
<h1>{post.title}</h1>

<div class="wrapper">
  {@html post.html}
</div>
