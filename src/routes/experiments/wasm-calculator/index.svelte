<script context="module">
  export async function preload() {
    const go = new Go();
    const WASM_URL = "assets/experiments/wasm-calculator/lib.wasm";

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

  let value1 = 0;
  let value2 = 0;
  let result = 0;

  function addValues() {
    result = WASMGo.add(value1, value2);
  }

  function subtractValues() {
    result = WASMGo.subtract(value1, value2);
  }
</script>

<style>

</style>

<div transition:slide={{ delay: 0, duration: 250, easing: sineOut }}>
  <h1>This is a simple Calculator made with Go and Webassembly</h1>

  <p>
    This wad made following 
    <a
      href="https://tutorialedge.net/golang/go-webassembly-tutorial/"
      rel="noopener noreferrer"
      target="_blank">
      this tutorial
    </a>
  </p>

  <div>
    <p>Inputs:</p>
    <input bind:value={value1} type="number" />
    <input bind:value={value2} type="number" />
  </div>

  <div>
    <p>Result: {result}</p>
  </div>

  <button on:click={addValues} id="addButton">Add</button>
  <button on:click={subtractValues} id="subtractButton">Subtract</button>
</div>
