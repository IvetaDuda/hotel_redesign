export const handleScroll = (e) => {
  // перевіряємо, чи це дійсно DOM-елемент
  if (!(e.target instanceof Element)) {
    return;
  }

  // отримуємо href з елемента, який має викликав подію
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
};

// Додаємо прослушувач подій з passive флагом

document.addEventListener('scroll', handleScroll, { passive: true });
