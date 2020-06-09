<script>
  import { onMount, afterUpdate } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import "@beyonk/gdpr-cookie-consent-banner/dist/style.css"; // optional, you can also define your own styles
  import CookieConsent from "../components/CookieConsent.svelte";

  export let segment;
  let dark = false;

  onMount(() => {
    let currentMode = document.documentElement.getAttribute("data-theme");
    const isDarkMode =
      currentMode === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        currentMode !== "light");

    dark = isDarkMode;
  });

  afterUpdate(() => {});

  export function toggleDarkMode() {
    let currentMode = document.documentElement.getAttribute("data-theme");
    const isDarkMode =
      currentMode === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        currentMode !== "light");
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    }
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
    box-sizing: border-box;
    background-color: inherit;
    margin-top: 2rem;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
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

<!-- <CookieConsent
  heading="Cookie Consent"
  cookieName="GDPR"
  description="This site use cookies to analyze site traffic"
  on:analytics={enableAnalytics} /> -->

<div id="Wrapper">
  <Nav {segment} on:toggle={toggleDarkMode} {dark} />

  <main>
    <slot />
  </main>

  <Footer />
</div>
