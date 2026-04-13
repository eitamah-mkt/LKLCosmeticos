document.addEventListener("DOMContentLoaded", () => {
  // animação de entrada
  const hero = document.querySelector('.hero');
  const regionSections = document.querySelectorAll('.region-section');
  const fouitaSection = document.querySelector('.fouita-section');
  
  if (hero) hero.style.animation = 'fadeUp 0.4s ease forwards';
  
  regionSections.forEach((section, index) => {
    section.style.opacity = '0';
    setTimeout(() => {
      section.style.transition = 'opacity 0.4s ease';
      section.style.opacity = '1';
    }, 100 + (index * 80));
  });
  
  if (fouitaSection) fouitaSection.style.opacity = '0';
  setTimeout(() => {
    if (fouitaSection) {
      fouitaSection.style.transition = 'opacity 0.4s ease 0.2s';
      fouitaSection.style.opacity = '1';
    }
  }, 200);

  // sistema de idioma
  const translations = {
    pt: {
      title: "LKL <span>Cosméticos</span>",
      regionCaucaia: "LKL Caucaia",
      regionCaninde: "LKL Canindé",
      btnCaucaia1: "Time de Vendas Caucaia",
      btnCaucaia2: "Avalie a LKL Caucaia e saiba como chegar até a loja",
      btnCaninde1: "Time de Vendas Canindé",
      btnCaninde2: "Salão de beleza LKL - Canindé",
      btnCaninde3: "Avalie a LKL Canindé e saiba como chegar até a loja",
      feedTitle: "Últimos posts"
    },
    en: {
      title: "LKL <span>Cosmetics</span>",
      regionCaucaia: "LKL Caucaia",
      regionCaninde: "LKL Canindé",
      btnCaucaia1: "Sales Team Caucaia",
      btnCaucaia2: "Review LKL Caucaia and get directions to the store",
      btnCaninde1: "Sales Team Canindé",
      btnCaninde2: "LKL Beauty Salon - Canindé",
      btnCaninde3: "Review LKL Canindé and get directions to the store",
      feedTitle: "Latest posts"
    },
    es: {
      title: "LKL <span>Cosméticos</span>",
      regionCaucaia: "LKL Caucaia",
      regionCaninde: "LKL Canindé",
      btnCaucaia1: "Equipo de Ventas Caucaia",
      btnCaucaia2: "Califica LKL Caucaia y aprende cómo llegar a la tienda",
      btnCaninde1: "Equipo de Ventas Canindé",
      btnCaninde2: "Salón de belleza LKL - Canindé",
      btnCaninde3: "Califica LKL Canindé y aprende cómo llegar a la tienda",
      feedTitle: "Últimas publicaciones"
    }
  };

  const langBtns = document.querySelectorAll('.lang-btn');
  
  function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    const titleEl = document.querySelector('h1');
    if (titleEl) titleEl.innerHTML = t.title;

    // Títulos das regiões
    const regionTitles = document.querySelectorAll('.region-title');
    if (regionTitles.length >= 2) {
      regionTitles[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.regionCaucaia}`;
      regionTitles[1].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.regionCaninde}`;
    }

    // Botões Caucaia (primeira região) - 2 botões
    const caucaiaBtns = document.querySelectorAll('.region-section:first-child .btn');
    if (caucaiaBtns.length >= 2) {
      caucaiaBtns[0].querySelector('span:nth-child(2)').textContent = t.btnCaucaia1;
      caucaiaBtns[1].querySelector('span:nth-child(2)').textContent = t.btnCaucaia2;
    }

    // Botões Canindé (segunda região) - 3 botões: Vendas, Salão, Avaliar
    const canindeBtns = document.querySelectorAll('.region-section:last-child .btn');
    if (canindeBtns.length >= 3) {
      canindeBtns[0].querySelector('span:nth-child(2)').textContent = t.btnCaninde1;
      canindeBtns[1].querySelector('span:nth-child(2)').textContent = t.btnCaninde2;
      canindeBtns[2].querySelector('span:nth-child(2)').textContent = t.btnCaninde3;
    }

    const feedTitle = document.querySelector('.fouita-title');
    if (feedTitle) feedTitle.innerHTML = `<i class="fab fa-instagram"></i> ${t.feedTitle}`;

    langBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) btn.classList.add('active');
    });

    localStorage.setItem('lkl_lang', lang);
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  const savedLang = localStorage.getItem('lkl_lang') || 'pt';
  updateLanguage(savedLang);
});