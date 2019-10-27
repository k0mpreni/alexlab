<script>
  import { createEventDispatcher } from "svelte";
  export let checked;

  const dispatch = createEventDispatcher();

  function toggle() {
    dispatch("toggle");
  }
</script>

<style>
  .slider-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 2rem;
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

<div class="slider-wrapper">
  <label class="switch">
    <input type="checkbox" on:click={toggle} aria-label="switch" bind:checked={checked} />
    <span class="slider round" />
  </label>
</div>
