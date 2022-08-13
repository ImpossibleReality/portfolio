function stupidMobileScrollDisablerUggWebkit(e: TouchEvent) {
  if (e.touches.length !== 1) {
    return;
  }
  e.preventDefault();
}

export function disableScroll() {
  document.documentElement.classList.remove('scroll');
  document.body.addEventListener('touchmove', stupidMobileScrollDisablerUggWebkit, {
    passive: false,
  });
}
export function enableScroll() {
  document.documentElement.classList.add('scroll');
  document.body.removeEventListener('touchmove', stupidMobileScrollDisablerUggWebkit);
}
