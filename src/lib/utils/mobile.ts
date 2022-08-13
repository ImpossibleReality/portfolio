let _isMobile: boolean | null = null;

export function isMobile() {
  if (_isMobile === null) {
    _isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  return _isMobile;
}
