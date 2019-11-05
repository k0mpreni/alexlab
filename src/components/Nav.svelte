<script>
  import Slider from "./Slider.svelte";
  export let segment;
  export let dark;
</script>

<style>
  nav {
    grid-column: 2/3;
    border-bottom: 2px solid rgb(4, 219, 176, 0.1);
    font-weight: 300;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 3px;
    background-color: #04dbb0;
    display: block;
    bottom: -2px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
    </li>
    <li>
      <a class={segment === 'random' ? 'selected' : ''} href="random">Random</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		    the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'writings' ? 'selected' : ''}
        href="writings">
        Writings
      </a>
    </li>
  </ul>
  <Slider on:toggle checked={dark} />
</nav>
