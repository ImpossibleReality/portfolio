<script>
  import Blob from '../lib/Blob.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { preloadData } from '$app/navigation';

  onMount(() => {
    preloadData('/');
  });
</script>

<div class="error-container">
  <div class="error-bg">
    <div class="orange-blob">
      <Blob
        id="orange-error-blob"
        numPoints={5}
        speed={0.8}
        uniqueness={7}
        topColor="#FF965A"
        bottomColor="#ED2B00"
      />
    </div>
    <div class="purple-blob">
      <Blob
        id="purple-error-blob"
        numPoints={5}
        speed={1.1}
        uniqueness={14}
        topColor="#E392FF"
        bottomColor="#8903B9"
      />
    </div>
  </div>
  <div class="error-text">
    <h1 class="title">{$page.status}</h1>
    <a href="/" class="body link">Go back home to safety.</a>
  </div>
</div>

<style lang="scss">
  .error-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .error-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--alternate-bg-color);
    .orange-blob {
      width: min(100vw, 60rem);
      left: 0;
      top: 0;
      transform: translate(-35%, -35%);
      position: absolute;
    }
    .purple-blob {
      width: min(80vw, 50rem);
      top: 100%;
      left: 100%;
      transform: translate(-70%, -70%);
      position: absolute;
    }
  }
  .error-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .title {
      margin-bottom: 0;
    }
  }
</style>
