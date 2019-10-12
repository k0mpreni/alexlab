<script>
  import { createEventDispatcher } from "svelte";
  export let segment;

  const dispatch = createEventDispatcher();

  function toggleDarkMode() {
    dispatch("darkmode");
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgb(4, 219, 176, 0.1);
    font-weight: 300;
    padding: 0 1em;
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
    height: 2px;
    background-color: #04dbb0;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .slider-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 21px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #04dbb0;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #04dbb0;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
    </li>
  </ul>
  <div class="slider-wrapper">
    <label class="switch">
      <input type="checkbox" on:click={toggleDarkMode} aria-label="switch" />
      <span class="slider round" />
    </label>
  </div>
</nav>
