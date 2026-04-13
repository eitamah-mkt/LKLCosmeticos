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

  // sistema de idioma - CORRIGIDO
  const translations = {
    pt: {
      title: "LKL <span>Cosméticos</span>",
      regionCaucaia: "LKL Caucaia",
      btnCaucaia1: "Time de Vendas Caucaia",
      btnCaucaia2: "Avalie a LKL Caucaia e saiba como chegar até a loja",
      regionCaninde: "LKL Canindé",
      btnCaninde1: "Time de Vendas Canindé",
      btnCaninde2: "Salão de beleza LKL - Canindé",
      btnCaninde3: "Avalie a LKL Canindé e saiba como chegar até a loja",
      feedTitle: "Últimos posts"
    },
    en: {
      title: "LKL <span>Cosmetics</span>",
      regionCaucaia: "LKL Caucaia",
      btnCaucaia1: "Sales Team Caucaia",
      btnCaucaia2: "Review LKL Caucaia and get directions to the store",
      regionCaninde: "LKL Canindé",
      btnCaninde1: "Sales Team Canindé",
      btnCaninde2: "LKL Beauty Salon - Canindé",
      btnCaninde3: "Review LKL Canindé and get directions to the store",
      feedTitle: "Latest posts"
    },
    es: {
      title: "LKL <span>Cosméticos</span>",
      regionCaucaia: "LKL Caucaia",
      btnCaucaia1: "Equipo de Ventas Caucaia",
      btnCaucaia2: "Califica LKL Caucaia y aprende cómo llegar a la tienda",
      regionCaninde: "LKL Canindé",
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

    // Título principal
    const titleEl = document.querySelector('h1');
    if (titleEl) titleEl.innerHTML = t.title;

    // ========== CAUCAIA (primeira seção) ==========
    // Pega todas as seções e pega a primeira (Caucaia)
    const allSections = document.querySelectorAll('.region-section');
    if (allSections.length >= 1) {
      const caucaiaSection = allSections[0];
      
      // Traduz o título da região
      const caucaiaTitle = caucaiaSection.querySelector('.region-title');
      if (caucaiaTitle) {
        caucaiaTitle.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.regionCaucaia}`;
      }
      
      // Traduz os botões da Caucaia
      const caucaiaBtns = caucaiaSection.querySelectorAll('.btn');
      if (caucaiaBtns.length >= 2) {
        // Botão 1: Time de Vendas
        const span1 = caucaiaBtns[0].querySelector('span:nth-child(2)');
        if (span1) span1.textContent = t.btnCaucaia1;
        
        // Botão 2: Avaliar
        const span2 = caucaiaBtns[1].querySelector('span:nth-child(2)');
        if (span2) span2.textContent = t.btnCaucaia2;
      }
    }

    // ========== CANINDÉ (segunda seção) ==========
    if (allSections.length >= 2) {
      const canindeSection = allSections[1];
      
      // Traduz o título da região
      const canindeTitle = canindeSection.querySelector('.region-title');
      if (canindeTitle) {
        canindeTitle.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.regionCaninde}`;
      }
      
      // Traduz os botões da Canindé
      const canindeBtns = canindeSection.querySelectorAll('.btn');
      if (canindeBtns.length >= 3) {
        // Botão 1: Time de Vendas
        const span1 = canindeBtns[0].querySelector('span:nth-child(2)');
        if (span1) span1.textContent = t.btnCaninde1;
        
        // Botão 2: Salão de beleza
        const span2 = canindeBtns[1].querySelector('span:nth-child(2)');
        if (span2) span2.textContent = t.btnCaninde2;
        
        // Botão 3: Avaliar
        const span3 = canindeBtns[2].querySelector('span:nth-child(2)');
        if (span3) span3.textContent = t.btnCaninde3;
      }
    }

    // Título do feed
    const feedTitle = document.querySelector('.fouita-title');
    if (feedTitle) feedTitle.innerHTML = `<i class="fab fa-instagram"></i> ${t.feedTitle}`;

    // Marca botão ativo
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