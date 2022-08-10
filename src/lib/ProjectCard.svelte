<script>
  import { portal } from 'svelte-portal';
  import { expoInOut } from 'svelte/easing';


  export let name;
  export let description;
  export let image;
  export let link;
  export let github;

  let colors = [
    ['#00CC99', '#6600FF'],
    ['#FF6F61', '#C62368'],
    ['#00b09b', '#96c93d'],
  ]

  let showingModal = false;
  let circles;

  let [circleColor, backgroundColor] = colors[Math.floor(Math.random() * colors.length)];

  function projectClick(e) {
    if (window.innerWidth < 1025) {
      e.preventDefault();
      if (document.getElementsByClassName('project-modal').length > 0) {
        return;
      }
      showingModal = true;
      document.documentElement.classList.remove('scroll');
    }
  }

  function exit(e) {
    e.preventDefault();
    if (showingModal) {
      document.documentElement.classList.add('scroll');
      showingModal = false;
    }
  }


  function scale(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = expoInOut(t);

        return `
					transform: scale(${eased * -0.1 + 1.1});
					opacity: ${t};`;
      }
    };
  }

  if (typeof image === 'undefined') {
    const numCircles = Math.round(Math.random() * 2 + 3);
    circles = Array.from({ length: numCircles }, (_, i) => {
      const size = Math.round(Math.random() * 45 + 10);
      const top = Math.round(Math.random() * 100);
      const left = Math.round(Math.random() * 100);
      return { top, left, size };
    });
  }
</script>

<div class='card-container'>
  <div class='card'>
    <a href={link} target='_blank' class:active={typeof link !== 'undefined'} on:click={projectClick}>
      <div class='inner'>
        {#if image}
          <img alt='{name} Thumbnail' class='card-image' srcset='{image}'>
        {:else}
          <span class='title'>
              {name}
          </span>
          <div class='img-placeholder'>
            <div class='placeholder-visual' style='--circle-color:{circleColor};background-color:{backgroundColor}'>
              <div class='placeholder-circles'>
              {#each circles as circle}
                <div class='placeholder-circle' style='--circle-size:{circle.size}%;--top:{circle.top}%;--left:{circle.left}%'></div>
              {/each}
                </div>
            </div>
          </div>
        {/if}
      </div>
      <div class='card-content'>
        <h3 class='title card-title'>{name}</h3>
        <p class='body card-description'>{description}</p>
      </div>
    </a>
  </div>
</div>

{#if showingModal}
  <div class='project-modal' use:portal={"body"} transition:scale={{duration: 200}} hidden>
      <span class='buttons'>
        {#if github}
          <a href={github} target='_blank' class='button button-github'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none">
              <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
            </svg>
          </a>
        {/if}
        <span class='spacer'></span>
        <span class='button button-exit' on:click={exit}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'
               stroke-width='2'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </span>
      </span>
      <div class='project-modal-content split'>
        <div class='project-modal-text left'>
          <h3 class='title'>{name}</h3>
          <p class='body'>{description}</p>
        </div>
        {#if image}
          <div class='right'>
            <div class='project-modal-image'>
              <img alt='${name} Thumbnail' srcset='{image}'>
            </div>
          </div>
        {/if}
      </div>
  </div>
{/if}

<style lang='scss'>
  .card-container {
    position: relative;
    width: 100%;
    padding-top: 75%;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: var(--bg-color);
    border-radius: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: filter 0.2s;

    .title {
      z-index: 2;
      color: #fff;
      font-size: 4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .active {
    cursor: pointer;
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    transition: filter 0.2s;
  }

  .img-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .placeholder-visual {
      $blur-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      --card-width: calc(100%);
      transform: scale(2);
      filter: blur($blur-radius);
      .placeholder-circles {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(0.5);

        .placeholder-circle {
          position: absolute;
          width: var(--circle-size);
          height: 0;
          padding-bottom: var(--circle-size);
          border-radius: 50%;
          background-color: var(--circle-color);

          top: var(--top);
          left: var(--left);
        }
      }
    }
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 16px 0px;

    @media screen and (min-width: 1025px) {
      .inner {
        filter: blur(10px);
      }
    }
  }
  .card-content {
    display: none;
  }

  @media screen and (min-width: 1025px) {
    .card:hover .card-content {
      opacity: 1;
    }

    .card-content {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.2s;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .card-title {
      color: white;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      font-size: 1.7rem;
    }

    .card-description {
      color: white;
      font-size: 1.3rem;
    }
  }

  :global(.project-modal) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 500;
    backdrop-filter: blur(10px);
    transition: opacity 0.2s;

    .buttons {
      position: absolute;
      top: 1rem;
      right: 1rem;
      left: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;

      color: #fff;

      .button {
        cursor: pointer;
        color: #e2e2e1;
        padding: 0.2rem;
        width: 2.7rem;
        transition: color 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
    .project-modal-content {
      padding: 1rem;
      width: 100%;
      box-sizing: border-box;
      .project-modal-text {
        max-width: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          font-size: 1.7rem;
          color: #fff;
          margin: 0;
          margin-bottom: 0.7rem;
        }

        .body {
          color: #e1e1ea;
          font-size: 1.3rem;
        }
      }
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 25rem;
        height: max-content;
        width: 100%;
        .project-modal-image {
          position: relative;
          width: 100%;
          padding-top: 75%;

          img {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            object-fit: cover;
          }
        }
      }
    }
  }
</style>