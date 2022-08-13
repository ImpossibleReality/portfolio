<script>
  import '$lib/normalize.css';
  import '$lib/global.scss';
  import { onMount } from 'svelte';
  import { debounce } from '../lib/utils/debounce.ts';
  import { enableScroll } from '../lib/utils/scroll.ts';

  let loaded = false;
  let loader;

  onMount(() => {
    // Fixes mobile vh
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener(
      'resize',
      debounce(() => {
        let vh = window.innerHeight / 100;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100)
    );

    loaded = true;
    loader.remove();
    enableScroll();
  });
</script>

<div
  style="display: flex;justify-content: center;align-items: center;position: fixed;top: 0;bottom: 0;right: 0;left: 0;background-color: #fff;z-index: 500;"
  bind:this={loader}
>
  <span class="loader" />
</div>

<slot />

<style>
  .loader {
    background-color: #000;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    animation: ripple 1.5s infinite linear;
  }

  @keyframes ripple {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    75% {
      opacity: 0.5;
      transform: scale(100%);
    }
    100% {
      opacity: 0;
      transform: scale(150%);
    }
  }
</style>
