document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';

  const toggleBtn = document.getElementById('lang-toggle');
  const esElements = document.querySelectorAll('.lang-es');
  const enElements = document.querySelectorAll('.lang-en');

  if (!toggleBtn) return;

  // 🔹 ESTADO INICIAL: INGLÉS POR DEFECTO
  esElements.forEach(el => el.style.display = 'none');
  enElements.forEach(el => el.style.display = 'inline');
  toggleBtn.textContent = 'ES';

  toggleBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
      enElements.forEach(el => el.style.display = 'none');
      esElements.forEach(el => el.style.display = 'inline');
      toggleBtn.textContent = 'EN';
      currentLang = 'es';
    } else {
      esElements.forEach(el => el.style.display = 'none');
      enElements.forEach(el => el.style.display = 'inline');
      toggleBtn.textContent = 'ES';
      currentLang = 'en';
    }
  });
});
