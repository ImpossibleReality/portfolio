<script>
  import { spline } from './utils/spline.ts';
  import { onMount } from 'svelte';
  import { makeNoise2D } from 'fast-simplex-noise';
  import { tweened } from "svelte/motion";
  import { browser } from "$app/env";

  export let topColor;
  export let id;
  export let bottomColor;
  export let animating = true;
  export let shape = [1, 1, 1, 1, 1, 1];

  let path;

  const simplex = makeNoise2D();

  export let speed = 0.7;

  const targetSpeed = tweened(speed * 4, {
    duration: 1000,
  });

  $: noiseStep = 0.001 * $targetSpeed;

  export let numPoints = 6;

  export let uniqueness = 10;

  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 70;

  function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  function createPoints() {
    const points = [];

    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad * shape[i - 1];
      const y = 100 + Math.sin(theta) * rad * shape[i - 1];

      // store the point
      points.push({
        x: x,
        y: y,
        /* we need to keep a reference to the point's original {x, y} coordinates
        for when we modulate the values later */
        originX: x,
        originY: y,
        // more on this in a moment!
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  }

  function speedUp() {
    $targetSpeed = 4
  }

  function slowDown() {
    $targetSpeed = 1
  }

  const points = createPoints();

  if (browser) {
    $targetSpeed = speed;
  }

  onMount(() => {
    (function animate() {
      if (animating) {
        for (let i = 0; i < points.length; i++) {
          const point = points[i];

          // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
          const nX = simplex(point.noiseOffsetX, point.noiseOffsetX);
          const nY = simplex(point.noiseOffsetY, point.noiseOffsetY);

          // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
          const x = map(nX, -1, 1, point.originX - uniqueness, point.originX + uniqueness);
          const y = map(nY, -1, 1, point.originY - uniqueness, point.originY + uniqueness);

          // update the point's current coordinates
          point.x = x;
          point.y = y;

          // progress the point's x, y values through "time"
          point.noiseOffsetX += noiseStep;
          point.noiseOffsetY += noiseStep;
        }
        if (path) path.setAttribute('d', spline(points, 1, true));
      }

      requestAnimationFrame(animate);
    })();
  });
</script>

<svg class="blob" viewBox="0 0 200 200" on:mousedown={speedUp} on:mouseup={slowDown} on:mouseleave={slowDown}>
  <defs>
    <!-- Our gradient fill #gradient -->
    <linearGradient {id} gradientTransform="rotate(90)">
      <!-- Use CSS custom properties for the start / stop colors of the gradient -->
      <stop id="gradientStop1" offset="0%" stop-color={topColor} />
      <stop id="gradientStop2 " offset="100%" stop-color={bottomColor} />
    </linearGradient>
  </defs>
  <path d="" fill={`url('#${id}')`} bind:this={path} />
</svg>

<style>
  .blob {
    transition: transform 0.6s ease-in-out;
    transform: scale(1);
  }

  .blob:active {
    transform: scale(0.9);
  }

</style>
