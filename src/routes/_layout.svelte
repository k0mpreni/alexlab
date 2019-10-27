<script>
  import { onMount, afterUpdate } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let dark = false;

  onMount(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)")
      .matches;
    if (isDarkMode) {
      window.document.body.classList.remove("light-mode");
      window.document.body.classList.add("dark-mode");
      dark = true
    }

    if (isLightMode) {
      window.document.body.classList.remove("dark-mode");
      window.document.body.classList.remove("light-mode");
      dark = false
    }
  });

  afterUpdate(() => {
      // toggleDarkMode();
  });

  export function toggleDarkMode() {
    window.document.body.classList.toggle("dark-mode");
    window.document.body.classList.toggle("light-mode");
    dark != dark;
  }
</script>

<style>
  #Wrapper {
    display: grid;
    grid-template-rows: 58px 1fr 42px;
    grid-template-columns: 20% 1fr 20%;
    height: 100vh;
  }

  main {
    position: relative;
    max-width: 50em;
    box-sizing: border-box;
    background-color: inherit;
    margin-top: 2rem;
    grid-column: 2/3;
  }

  @media (max-width: 599px) {
    main {
      padding: 0 2rem 2.5rem;
    }

    #Wrapper {
      grid-template-columns: 2% 1fr 2%;
  }
  }
</style>

<div id="Wrapper">
  <Nav {segment} on:toggle={toggleDarkMode} {dark} />

  <main>
    <slot />
  </main>

  <Footer />
</div>
