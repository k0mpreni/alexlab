<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
  let dark = false;

  export function toggleDarkMode() {
    return dark = !dark
  }

</script>

<style>
  #Wrapper {
    background-color: #f7fcfc;
    color: #13131c;
    height: 100vh;
  }

  #Wrapper.dark {
    background-color: #13131c;
    color: #f7fcfc;
  }

  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div id="Wrapper" class:dark>
  <Nav {segment} on:darkmode={toggleDarkMode} />


  <main>
    <slot />
  </main>
</div>
