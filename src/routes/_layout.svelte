<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let dark = false;

  export function toggleDarkMode() {
    window.document.body.classList.toggle('dark-mode');
    dark != dark;
  }

</script>

<style>
  #Wrapper {
    display: grid;
    grid-template-rows: 58px 1fr 42px;
    height: 100vh;
  }

  main {
    position: relative;
    max-width: 50em;
    margin: 2rem auto 0 auto;
    box-sizing: border-box;
    background-color: inherit;
    padding: 0 2rem 3rem;
  }

  @media (max-width: 599px) {
	main {
    padding: 0 2rem 2.5rem;
  }
}
</style>

<div id="Wrapper">
  <Nav {segment} on:toggle={toggleDarkMode} />

  <main>
    <slot />
  </main>

  <Footer />
</div>
