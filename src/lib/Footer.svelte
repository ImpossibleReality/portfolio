<footer>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
    ><path
      fill="var(--alternate-bg-color)"
      fill-opacity="1"
      d="M0,192L80,160C160,128,320,64,480,80C640,96,800,192,960,224C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    /></svg
  >
  <div class="footer-container">
    <div class="footer-logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.867 33.867" class="mark">
        <path
          fill="#ff965a"
          d="M10.319 0A3.307 3.307 0 0 0 7.01 3.307a3.307 3.307 0 0 0 3.308 3.307 3.307 3.307 0 0 0 3.307-3.307A3.307 3.307 0 0 0 10.319 0Zm3.292 7.434a6.6 6.6 0 0 0-6.6 6.6v19.858h.015a6.6 6.6 0 0 0 6.6-6.6V7.435Z"
        />
        <path
          fill="#e13bff"
          d="M13.626 7.408v13.23h6.641v-.002a6.615 6.615 0 0 0 6.588-6.613 6.615 6.615 0 0 0-6.588-6.614h-.026zm0 13.23v13.229h13.23a13.23 13.23 0 0 0-13.23-13.23Z"
        />
      </svg>

      <span class="title">
        Impossible<span class="md">&nbsp;Reality</span>
      </span>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer-container {
    position: relative;
    height: max(calc(8rem - 3vw), 0px);
    margin-top: -1rem;
    background-color: var(--alternate-bg-color);
  }
  .footer-logo {
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 4rem;
    .title {
      position: relative;
      font-size: 2.3rem;
      @media (min-width: 768px) {
        font-size: 3rem;
      }
      margin-left: 1rem;
      top: 0.2em;
    }
    .mark {
      display: inline-block;
      width: 4rem;
      height: 4rem;
    }
  }
</style>
