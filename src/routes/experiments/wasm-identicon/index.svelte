<script context="module">
  export async function preload() {
    const go = new Go();
    const WASM_URL = "assets/experiments/wasm-identicon/lib.wasm";
    var wasm;
    if ("instantiateStreaming" in WebAssembly) {
      WebAssembly.instantiateStreaming(
        this.fetch(WASM_URL),
        go.importObject
      ).then(function(obj) {
        wasm = obj.instance;
        go.run(wasm);
      });
    } else {
      this.fetch(WASM_URL)
        .then(resp => resp.arrayBuffer())
        .then(bytes =>
          WebAssembly.instantiate(bytes, go.importObject).then(function(obj) {
            wasm = obj.instance;
            go.run(wasm);
          })
        );
    }
  }
</script>

<script>
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import { afterUpdate } from "svelte";
  let imgUrl;

  function loadIcon() {
    const value = document.getElementById("identicon").value;
    const buf = WASMGo.identicon(value);
    let blob = new Blob([buf], {
      type: "png"
    });
    imgUrl = URL.createObjectURL(blob);
  }
</script>

<style>
  img {
    height: 500px;
    margin-top: 2rem;
    width: 500px;
  }
</style>

<div transition:slide={{ delay: 0, duration: 250, easing: sineOut }}>
  <h1>This is a simple Identicon Generator made with Go and Webassembly</h1>

  <p>
    It's made using the library Cameron:
    <a
      href="https://github.com/aofei/cameron"
      target="_blank"
      rel="noopener noreferrer">
      https://github.com/aofei/cameron
    </a>
  </p>

  <form on:submit|preventDefault={loadIcon}>
    <input type="identicon" id="identicon" />
    <button type="submit">Generate</button>
  </form>
  {#if imgUrl}
    <img id="targetImg" class="image" src={imgUrl} alt="identicon" />
  {/if}
</div>
