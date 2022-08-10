<script>
  export let space = true;

  function internalLinkClick(id) {
    return (e) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
      e.preventDefault();
    }
  }
</script>

<header class="navbar" class:no-space={!space}>
  <div class="links">
    <a href="/" class="link" on:click={internalLinkClick("top")}>Home</a>
    <a href="#about" class="link lg" on:click={internalLinkClick("about")}>About</a>
    <a href="#projects" class="link lg" on:click={internalLinkClick("projects")}>Projects</a>
    <a href="/" class="link">Blog</a>
    <a href="https://github.com/ImpossibleReality" class="link" target='_blank'>Github</a>
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
    display: flex;
    position: relative;
    top: -10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: var(--body-font-size);
    color: var(--title-color);
    text-decoration: none;
    padding: 10px;
  }

  .lg {
    display: none;
  }

  @media screen and (min-width: 768px) {
    /* Link hover animation and extra links */
    .link::after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 0;
      width: 1em;
      height: 0.06em;
      opacity: 0.3;
      transform: translateY(-7px);
      background-color: var(--accent-color);
      transition: opacity 0.2s, width 0.2s;
    }
    .link:hover::after {
      width: calc(100% - 20px);
      opacity: 1;
    }
    .lg {
      display: block;
    }
  }
</style>
