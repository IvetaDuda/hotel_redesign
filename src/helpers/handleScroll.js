export const handleScroll = (e) => {
  if (typeof window !== 'undefined') {
    const href = e.target.getAttribute('href');

    if (!href) {
      return;
    }

    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);

    if (elem) {
      e.preventDefault();
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
};

// Додаємо прослушувач подій з passive флагом, якщо викликається в браузері
if (typeof window !== 'undefined') {
  document.addEventListener('scroll', handleScroll, { passive: true });
}
