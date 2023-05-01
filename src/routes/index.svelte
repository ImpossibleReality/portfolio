<script>
  import Blob from '../lib/Blob.svelte';
  import Menu from '../lib/Menu.svelte';
  import { onMount } from 'svelte';
  import ProjectCard from '../lib/ProjectCard.svelte';

  import portfolio from '../images/projects/portfolio.png?card&srcset';
  import clarity from '../images/projects/clarity.png?card&srcset';
  import toxicityBot from '../images/projects/toxicity_bot.png?card&srcset';
  import trivia from '../images/projects/trivia.png?card&srcset';
  import ataraxy from '../images/projects/ataraxy.png?card&srcset';
  import ava from '../images/projects/ava.png?card&srcset';

  import Footer from '../lib/Footer.svelte';

  const projects = [
    {
      name: 'Portfolio Website',
      description:
        'The website that you are looking at now! I designed and build it entirely from scratch with SvelteKit. I hope you enjoy it!',
      url: 'https://impreality.ml',
      github: 'https://github.com/ImpossibleReality/portfolio',
      image: portfolio,
    },
    {
      name: 'Toxicity Bot',
      description:
        'A closed-source bot that checks for toxicity and hate speech in Discord messages using a custom logistic regression model, deleting the message if its toxic. I built this bot with Discord.py and Numpy.',
      image: toxicityBot,
    },
    {
      name: 'Ataraxy',
      description:
        'A Rust library for the Serenity.rs framework that allows you to register Discord slash commands with ease using macros.',
      url: 'https://docs.rs/ataraxy/latest/ataraxy/',
      github: 'https://github.com/ImpossibleReality/ataraxy',
      image: ataraxy,
      dark: true,
    },
    {
      name: 'Clarity',
      description:
        'An unfinished native screenshot application for MacOS because I hate the default one. It uses the (really annoying) Quartz API to take screenshots of the desktop. I made it in Swift and Xcode.',
      github: 'https://github.com/ImpossibleReality/Clarity',
      image: clarity,
    },
    {
      name: 'Ava Bot',
      description:
        'An unfinished Discord bot which allowed users to create custom commands using a Apple Shortcuts-like interface.',
      image: ava,
      dark: true,
    },
    {
      name: 'Trivia Bot',
      description:
        'A closed-source Discord trivia bot that was in 2,000+ servers before we shut it down. It was built with Discord.py and OpenTDB. We also made an electron trivia game to accompany it.',
      github: 'https://github.com/Trivia-Bot-Apps',
      image: trivia,
      dark: true,
    },
  ];

  let shouldAnimateBlobs = true;
  let orangeblob;
  onMount(() =>
    setInterval(() => {
      if (orangeblob) {
        const r = orangeblob.getBoundingClientRect();
        shouldAnimateBlobs =
          r.bottom >= 0 &&
          r.right >= 0 &&
          r.top <= (window.innerHeight || document.getElementById('root').clientHeight) &&
          r.left <= (window.innerWidth || document.getElementById('root').clientWidth);
      }
    }, 3000)
  );
</script>

<svelte:head>
  <title>Impossible Reality</title>
  <meta
    name="description"
    content="Hello there, I'm Impossible Reality! I am a full-stack web developer and designer who loves using Rust and Svelte. Check out my portfolio!"
  />
</svelte:head>

<span id="top" />

<Menu space={false} />

<div class="hero">
  <div class="hero-text">
    <svg
      class="hero-text-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 225 28.8"
      aria-labelledby="heroTextTitle"
      role="img"
    >
      <title id="heroTextTitle">Impossible</title>
      <path
        fill="var(--title-color)"
        d="M210.6 11.3h10.6v5.8h-10.6zm.6 9H223v6h-19.7V2.4h19.3v6h-11.4zm-28.8 6V2.4h8V20h10.7v6.2zm-26.2 0V2.4H169q5 0 7.3 1.8 2.3 1.7 2.3 4.4 0 1.8-1 3.2-1 1.4-3 2.2-1.8.9-4.6.9l.7-1.9q2.8 0 4.8.8t3 2.3q1.2 1.4 1.2 3.5 0 3-2.6 4.8-2.5 1.7-7.4 1.7zm7.9-5.7h4.8q1.3 0 2-.4.6-.5.6-1.4 0-1-.6-1.4-.7-.5-2-.5h-5.3v-5.3h4.2q1.4 0 2-.4.6-.5.6-1.3 0-.9-.6-1.3-.6-.5-2-.5h-3.7zm-19.7 5.6V2.5h8v23.7zm-13.4.6q-3 0-5.7-.7-2.8-.7-4.6-1.8l2.6-5.8q1.6 1 3.7 1.6 2.1.6 4 .6 1.2 0 1.9-.2.7-.1 1-.4.3-.3.3-.7 0-.7-.8-1-.7-.4-1.8-.6l-2.6-.6-2.8-.8q-1.4-.4-2.6-1.2-1.1-.8-1.8-2-.7-1.3-.7-3.2 0-2.2 1.2-4 1.2-1.8 3.7-3 2.4-1 6-1 2.5 0 4.8.5 2.4.5 4.2 1.6l-2.4 5.7q-1.7-.8-3.4-1.3-1.6-.4-3.2-.4-1.1 0-1.8.2t-1 .5q-.3.4-.3.8 0 .6.8 1 .7.3 1.8.5l2.6.5 2.8.8q1.4.5 2.5 1.2 1.2.8 2 2 .7 1.3.7 3.2 0 2.2-1.3 4-1.2 1.8-3.7 2.9-2.4 1-6 1zm-22.2 0q-3 0-5.8-.7-2.7-.7-4.5-1.8l2.5-5.8q1.7 1 3.8 1.6 2 .6 4 .6 1.2 0 1.8-.2.7-.1 1-.4.3-.3.3-.7 0-.7-.7-1-.7-.4-1.9-.6l-2.5-.6-2.8-.8q-1.4-.4-2.6-1.2-1.1-.8-1.9-2-.7-1.3-.7-3.2 0-2.2 1.2-4 1.3-1.8 3.7-3 2.5-1 6.2-1 2.4 0 4.7.5 2.3.5 4.2 1.6l-2.4 5.7q-1.8-.8-3.4-1.3-1.6-.4-3.2-.4-1.1 0-1.8.2t-1 .5q-.3.4-.3.8 0 .6.7 1 .7.3 1.9.5l2.6.5 2.8.8q1.4.5 2.5 1.2 1.2.8 2 2 .6 1.3.6 3.2 0 2.2-1.2 4-1.2 1.8-3.7 2.9-2.4 1-6.1 1zm-25.1 0q-3 0-5.4-1-2.4-.9-4.2-2.5-1.8-1.7-2.8-4-1-2.2-1-5 0-2.6 1-4.9 1-2.2 2.8-3.9 1.8-1.7 4.2-2.6 2.5-1 5.4-1 2.9 0 5.3 1 2.5 1 4.3 2.6 1.7 1.7 2.7 4 1 2.2 1 4.9t-1 5q-1 2.2-2.7 3.9-1.8 1.6-4.3 2.6-2.4.9-5.3.9zm0-6.5q1 0 2-.4t1.7-1.2q.8-.7 1.2-1.8.4-1.1.4-2.5t-.4-2.5q-.4-1.1-1.2-1.9-.7-.7-1.7-1.1-1-.4-2-.4-1.1 0-2.1.4T79.9 10q-.7.8-1.1 2-.4 1-.4 2.4t.4 2.5q.4 1 1 1.8.8.8 1.8 1.2 1 .4 2 .4zm-37.6 6V2.4h11.4q3.3 0 5.7 1.1 2.5 1 3.8 3.1 1.3 2 1.3 4.8 0 2.7-1.3 4.7t-3.8 3.1q-2.4 1.1-5.7 1.1h-7l3.6-3.4v9.2zm8-8.4-3.6-3.7H57q1.7 0 2.4-.7.9-.7.9-2t-.9-2q-.7-.8-2.4-.8h-6.5L54.1 5Zm-40.3 8.3V2.5h6.6L29.9 18h-3.5l9.2-15.5h6.6v23.7H35V13.5h1l-6.2 10.6h-3.5l-6.6-10.6H21v12.7zM2 26.2V2.5h8v23.7z"
      />
    </svg>
    <svg
      class="hero-text-svg-border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 225 28.8"
      role="img"
    >
      <path
        fill="#fff"
        d="M316.2 2.5a63 63 0 0 0-22 3.8 52.3 52.3 0 0 0-17.6 10.9c-5 4.6-9 10.1-11.8 16.4-.9 2-1.4 4.3-2 6.5a36 36 0 0 0-5.4-17.4 37 37 0 0 0-16.3-13.6 57.3 57.3 0 0 0-23.7-4.6h-48.1v99.7h40.2v-22h7.9c8.9 0 16.8-1.5 23.7-4.6A38.2 38.2 0 0 0 257.4 64c1.5-2.3 2.5-5 3.5-7.6.2 6.6 1.4 12.9 3.9 18.6a51.6 51.6 0 0 0 11.8 16.6 53 53 0 0 0 17.6 10.8 63.3 63.3 0 0 0 22.2 3.8c7.7 0 15-1.2 21.8-3.8a50 50 0 0 0 29.3-27.3 50.4 50.4 0 0 0 4.3-20.8c0-1-.3-2-.3-3.1l.3 1a28 28 0 0 0 8.7 9.4c3.4 2.2 7 4 10.9 5.3 3.7 1.3 7.5 2.3 11.1 3v.1h.2l9.4 2h.1c1.3.3 1.8.6 2.7 1l-3.5.2a53 53 0 0 1-27-7.6l-4.9-2.8L365.8 94l3.7 2.3c5.1 3 11.4 5.4 18.7 7.2 7.4 1.8 15 2.7 23 2.7 9.7 0 18.2-1.4 25.2-4.5 6.5-3 11.7-7.1 15.4-12.2l-2 4.5 3.7 2.3c5.1 3 11.4 5.4 18.7 7.2 7.4 1.8 15 2.7 23 2.7a62 62 0 0 0 25.2-4.5 37.6 37.6 0 0 0 15.9-12.8c2.2-3.2 3.6-6.8 4.5-10.5v25.8H581V4.5h-40.2v58c-.6-2-1.2-4-2.3-5.8a25 25 0 0 0-8.7-9.3c-3.3-2.2-6.9-4-10.7-5.3a83.1 83.1 0 0 0-11.4-3l-9.6-2c-1.7-.3-2.6-.7-3.8-1 1-.3 2.5-.6 4.7-.6 3.5 0 7 .5 10.7 1.5a63 63 0 0 1 12 4.7l4.8 2.4 12.9-31-3.9-2.1c-5.2-3-11-5-17.3-6.5-6.2-1.3-12.5-2-19-2-9.6 0-18 1.4-25.1 4.5-6.8 3-12.3 7.3-16 12.8a31.6 31.6 0 0 0-5.6 18c0 5.3 1 10.2 3.3 14.4a28 28 0 0 0 8.7 9.4c3.4 2.2 7 4 10.9 5.3 3.7 1.3 7.5 2.3 11.1 3l.1.1 9.5 2h.1c1.3.3 1.8.6 2.7 1l-3.5.2a53 53 0 0 1-27-7.6l-4.9-2.8-6.7 15.2a28.5 28.5 0 0 0-2.3-21.3 25 25 0 0 0-8.7-9.3c-3.3-2.2-6.9-4-10.7-5.3a83 83 0 0 0-11.4-3l-9.6-2c-1.7-.3-2.6-.7-3.8-1 1-.3 2.5-.6 4.7-.6 3.5 0 7 .5 10.7 1.5 3.9 1 7.9 2.6 12 4.7l4.8 2.4 12.9-31-3.9-2.1c-5.2-3-11-5-17.3-6.5-6.2-1.3-12.5-2-19-2-9.6 0-18 1.4-25.1 4.5-6.8 3-12.3 7.3-16 12.8h-.1c-3.5 5.1-5.2 11-5.4 17.3l-1-3.5a52.2 52.2 0 0 0-29.3-27.4 62.3 62.3 0 0 0-22-3.7ZM2.5 4.5v99.7h40.2V4.5Zm44.8 0v99.7h37.5v-27l11.6 18.9h19L127 76.3l.2 27.9h37.5l-.3-99.7h-32.7l-25.6 43L80 4.6Zm538.2 0v99.7h55.4c13 0 23.3-2.2 31-7.4 7.6-5.2 12-13.2 12-22.4a26.5 26.5 0 0 0-12.5-22.9c1.2-1 2.5-2.1 3.4-3.5a25.7 25.7 0 0 0-6-35.8 50.4 50.4 0 0 0-30.4-7.7zm99 0v99.7H848V71.4h-44.8v-1.8h37.9V37.8h-37.9v-.5h43.1V4.5h-82.8v66.2h-38.8V4.5Zm-368.3 3c7.4 0 14.1 1.2 20.3 3.5a47.2 47.2 0 0 1 26.4 24.7 44.6 44.6 0 0 1 3.9 18.6A45.2 45.2 0 0 1 352.5 88a48.2 48.2 0 0 1-16 9.7 56.8 56.8 0 0 1-20.1 3.5c-7.4 0-14.2-1.2-20.4-3.5A46.5 46.5 0 0 1 269.4 73c-2.5-5.7-3.7-12-3.7-18.7A45 45 0 0 1 280 20.8c4.5-4.3 9.9-7.5 16-9.8a58 58 0 0 1 20.2-3.5zm99 0c6.1 0 12 .6 18 2a56.6 56.6 0 0 1 15.8 5.8l-9 21.9a68 68 0 0 0-13-5 46 46 0 0 0-12-1.7 25 25 0 0 0-7 .8 8 8 0 0 0-3.6 2c-.7 1-1 1.8-1 2.9 0 1.5.8 2.7 2.6 3.7 1.8.8 4.2 1.6 7 2.2l9.8 1.9a78 78 0 0 1 10.6 2.8c3.5 1.2 6.7 2.8 9.6 4.7 3 2 5.4 4.6 7.2 7.7 1.8 3.2 2.7 7.1 2.7 11.8 0 5.5-1.6 10.5-4.7 15a32.1 32.1 0 0 1-13.9 11.1 57.2 57.2 0 0 1-23.1 4.1c-7.5 0-14.8-.9-21.8-2.6a62 62 0 0 1-17.3-6.6l9.7-22a58 58 0 0 0 36.4 7.7c1.7-.5 3-1 3.7-1.7.8-.8 1.2-1.7 1.2-2.7 0-1.6-1-3-2.7-3.8-1.8-1-4.2-1.8-7.2-2.3l-9.6-2.1c-3.5-.8-7-1.7-10.6-3a42.8 42.8 0 0 1-9.7-4.7c-3-2-5.3-4.5-7-7.7a24.6 24.6 0 0 1-2.8-12c0-5.5 1.6-10.6 4.6-15 3.2-4.7 7.8-8.4 14-11.1 6.2-2.7 14-4.1 23.2-4.1zm84 0c6.1 0 12 .6 18 2a56.6 56.6 0 0 1 15.8 5.8l-9 21.9a68 68 0 0 0-13-5 46 46 0 0 0-12-1.7 25 25 0 0 0-7 .8 8 8 0 0 0-3.6 2c-.7 1-1 1.8-1 2.9 0 1.5.8 2.7 2.6 3.7 1.8.8 4.2 1.6 7 2.2l9.8 1.9a78 78 0 0 1 10.6 2.8c3.5 1.2 6.7 2.8 9.6 4.7 3 2 5.4 4.6 7.2 7.7 1.8 3.2 2.7 7.1 2.7 11.8 0 5.5-1.6 10.5-4.7 15a32.1 32.1 0 0 1-13.9 11.1 57.2 57.2 0 0 1-23.1 4.1c-7.5 0-14.8-.9-21.8-2.6a62 62 0 0 1-17.3-6.6l9.7-22a58 58 0 0 0 36.4 7.7c1.7-.5 3-1 3.7-1.7.8-.8 1.2-1.7 1.2-2.7 0-1.6-1-3-2.7-3.8-1.8-1-4.2-1.8-7.2-2.3l-9.6-2.1c-3.5-.8-7-1.7-10.6-3a42.8 42.8 0 0 1-9.7-4.7c-3-2-5.3-4.5-7-7.7a24.6 24.6 0 0 1-2.8-12c0-5.5 1.6-10.6 4.6-15 3.2-4.7 7.8-8.4 14-11.1 6.2-2.7 14-4.1 23.2-4.1zM7.6 9.5h30.2v89.7H7.5Zm44.8 0H77l29.2 47.7 28.4-47.7h24.8l.3 89.7h-27.5l-.3-41-19.5 32.9H99.2L79.8 59.7v39.5H52.3Zm122 0h43c8.5 0 15.7 1.4 21.7 4.1a31.9 31.9 0 0 1 14.2 11.8c3.4 5 5 11 5 18 0 6.9-1.6 12.8-5 17.9-3.3 5-8 9-14.2 11.7-6 2.8-13.2 4.1-21.6 4.1h-13v22h-30.1zm371.5 0H576v89.7h-30.2zm44.7 0h47.9c12.3 0 21.5 2.3 27.4 6.7a20 20 0 0 1 8.8 16.8c0 4.5-1.3 8.5-3.8 12.1-2.1 3-5 5.3-8.6 7.2l.6.3c5.1 2 9 4.8 11.8 8.5 2.8 3.7 4.2 8.1 4.2 13.3 0 7.8-3.2 13.9-9.7 18.2a50.1 50.1 0 0 1-28.2 6.6h-50.4zm99 0h30.2v66.2h40.5v23.5h-70.7zm79 0h72.8v22.8h-43.1v10.5h37.9v21.8h-37.9v11.8H843v22.8h-74.5zM620.2 30.7V44h14c3.5 0 6-.6 7.5-1.7a5.8 5.8 0 0 0 2.4-5c0-2.2-.8-3.9-2.4-5-1.5-1-4-1.6-7.4-1.6zm-304 1.2a19.3 19.3 0 0 0-18.6 13 28 28 0 0 0-1.5 9.4c0 3.5.5 6.7 1.6 9.5a18.4 18.4 0 0 0 10.6 11.4 20.6 20.6 0 0 0 22.1-4.3c2-2 3.4-4.3 4.4-7 1-2.9 1.5-6 1.5-9.6a27 27 0 0 0-1.5-9.3 19 19 0 0 0-4.4-7 17 17 0 0 0-6.4-4.5c-2.4-1-5-1.6-7.8-1.6zm-111.7 1v21h11c4.2 0 7.2-1 9.2-2.9 2-1.9 3-4.4 3-7.7 0-3.2-1-5.8-3-7.6-2-2-5-2.9-9.2-2.9zm420.7 2.8h9c3 0 4.5.6 4.6.7.4.3.3 0 .3 1 0 .8 0 .6-.4.9 0 0-1.6.7-4.4.7h-9.1zm-309 1.2a14.1 14.1 0 0 1 10.5 4.4l.1.1.1.1a14 14 0 0 1 3.2 5.2c.8 2.1 1.2 4.6 1.2 7.6s-.4 5.6-1.2 7.8a15 15 0 0 1-3.3 5.3 14.5 14.5 0 0 1-10.6 4.3c-2.2 0-4.1-.3-6-1.1-1.7-.8-3.3-1.8-4.7-3.2a16.4 16.4 0 0 1-3.1-5.3c-.8-2.2-1.3-4.7-1.3-7.8 0-3 .5-5.5 1.2-7.5a14.2 14.2 0 0 1 13.9-9.8zm-106.7 1h6c3.4 0 5 .7 5.7 1.4h.1c1 1 1.5 1.8 1.5 4s-.5 3.1-1.5 4v.1c-.8.7-2.4 1.4-5.8 1.4h-6zm410.7 26V78h18.2c3.3 0 5.8-.6 7.4-1.8a6 6 0 0 0 2.6-5.2 6 6 0 0 0-2.6-5.3c-1.6-1.2-4.1-1.8-7.4-1.8zm5 5h13.2c2.7 0 4.1.6 4.4.9h.1c.5.4.5.1.5 1.2 0 1 0 .8-.5 1.1v.1c-.4.2-1.8.8-4.5.8h-13.2z"
        transform="scale(.26458)"
      />
    </svg>
  </div>
  <div class="hero-bg">
    <div class="blue-blob">
      <Blob
        id="blue-hero-blob"
        numPoints={5}
        topColor="#75CDFF"
        bottomColor="#253AF8"
        animating={shouldAnimateBlobs}
      />
    </div>
    <div class="orange-blob" bind:this={orangeblob}>
      <Blob
        id="orange-hero-blob"
        numPoints={5}
        speed={0.8}
        uniqueness={7}
        topColor="#FF965A"
        bottomColor="#ED2B00"
        animating={shouldAnimateBlobs}
      />
    </div>
    <div class="purple-blob">
      <Blob
        id="purple-hero-blob"
        numPoints={5}
        speed={0.8}
        uniqueness={15}
        topColor="#E392FF"
        bottomColor="#8903B9"
        animating={shouldAnimateBlobs}
      />
    </div>
  </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1728 467" class="about-begin-wave">
  <path
    fill="var(--alternate-bg-color)"
    fill-rule="evenodd"
    d="M0 0h72c72 0 216 0 360 69s288 208 432 260 288 17 432-26c144-44 288-95 360-121l72-26v311H0V0Z"
    clip-rule="evenodd"
  />
</svg>
<span id="about" />
<div class="about-section split">
  <div class="left">
    <span class="title">About<span class="md"><br />Me</span></span>
  </div>
  <div class="right">
    <p class="body">
      Hey, I’m <b>Johan</b> (aka. Impossible Reality). I am a high-schooler in Seattle, a
      <b>full-stack web developer</b>, and a
      <b><a href="https://svelte.dev/" target="_blank">Svelte</a></b>
      and <b><a href="https://vuejs.org/" target="_blank">Vue</a></b> fanatic. I am a faithful
      <b><a href="https://www.rust-lang.org/" target="_blank">Rustacean</a></b>, and I enjoy making
      <b>Discord bots</b>
      using
      <b><a href="https://twilight.rs/" target="_blank">Twilight.rs</a></b>. In my free time I enjoy
      taking my dog for <b>walks</b>, and playing <b>video games</b>.
    </p>
  </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="var(--alternate-bg-color)"
    d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
  />
</svg>
<div class="projects-section">
  <div class="title center-horizontal">
    <span id="projects" />
    <span class="md">My&nbsp;</span>Projects
  </div>
  <div class="projects-container">
    {#each projects.slice(0, projects.length) as project}
      <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.url}
        github={project.github}
        dark={project.dark}
      />
    {/each}
  </div>
</div>

<Footer />

<style lang="scss">
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-text {
    --text-size: calc(var(--title-font-size) * 0.75);
    position: relative;
    height: var(--text-size);
    width: calc(7.8125 * var(--text-size));
  }

  .hero-text-svg {
    position: absolute;
    height: 100%;
    z-index: 50;
  }

  .hero-text-svg-border {
    position: absolute;
    height: 100%;
    z-index: 80;
  }

  .hero-bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  .blue-blob {
    position: absolute;
    top: calc(50vh - 80px);
    width: calc(40vw + 160px);
    left: min(0px, calc(40vw - 224px));
    z-index: 75;
    transform: translate(0, -50%);
  }

  .orange-blob {
    position: absolute;
    top: calc(100vh - 80px);
    width: calc(40vw + 160px);
    left: 70vw;
    z-index: 85;
    transform: translate(-50%, -50%);
  }

  .purple-blob {
    position: absolute;
    top: 240px;
    width: calc(40vw + 160px);
    left: 100vw;
    z-index: 75;
    transform: translate(-50%, -50%);
  }

  .about-section {
    margin-top: -1rem;

    padding: 3rem;
    background-color: var(--alternate-bg-color);
  }

  .about-begin-wave {
    margin-top: -20vh;
    width: 100%;
  }
  .projects-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
  }
  .projects-container {
    display: grid;
    place-items: center;
    gap: 1rem;
    margin-top: 3rem;
    width: 80%;
    min-width: 15rem;
    grid: auto-flow / repeat(auto-fill, minmax(min(25rem, 100%), 1fr));
  }
  /*
	@media screen and (min-width: 1000px) {
		.projects-container {
			grid: auto-flow / repeat(2, 1fr);
		}
	}
	@media screen and (min-width: 1500px) {
		.projects-container {
			grid: auto-flow / repeat(3, 1fr);
		}
	} */
</style>
