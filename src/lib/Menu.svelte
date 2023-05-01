<script>
  export let space = true;

  function internalLinkClick(id) {
    return (e) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      e.preventDefault();
    };
  }
</script>

<header class="navbar" class:no-space={!space}>
  <div class="links">
    <span class="item"><a href="/" class="link" on:click={internalLinkClick('top')}>Home</a></span>
    <span class="item md"
      ><a href="#about" class="link" on:click={internalLinkClick('about')}>About</a></span
    >
    <span class="item md"
      ><a href="#projects" class="link" on:click={internalLinkClick('projects')}>Projects</a></span
    >
    <span class="item"><a href="/" class="link">Blog</a></span>
    <span class="item"
      ><a href="https://github.com/ImpossibleReality" class="link" target="_blank">Github</a></span
    >
  </div>
</header>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1.5rem;
    z-index: 200;
  }
  .no-space {
    position: absolute;
    margin: 0;
    width: calc(100% - 2.4rem);
    top: 1.2rem;
    left: 1.2rem;
    right: 1.2rem;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 60rem;
  }

  .link {
    --link-underline-color: rgba(0, 0, 0, 0);
    display: flex;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: var(--body-font-size);
    color: var(--title-color);
    text-decoration: none;
  }

  .link::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -0.1rem;
    background: var(--accent-color);
    transition: opacity 0.1s ease, transform 0.2s ease;
    opacity: 0;
    transform: translateY(5px) scaleY(0.9);
  }

  .link:hover::after {
    opacity: 1;
    transform: translateY(0);
  }

  .item {
    padding: 10px;
    position: relative;
    top: -10px;
  }
</style>
