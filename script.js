document.addEventListener("DOMContentLoaded", () => {
  // animação de entrada
  const hero = document.querySelector('.hero');
  const buttons = document.querySelector('.buttons-group');
  const fouitaSection = document.querySelector('.fouita-section');
  
  if (hero) hero.style.animation = 'fadeUp 0.4s ease forwards';
  if (buttons) buttons.style.opacity = '0';
  if (fouitaSection) fouitaSection.style.opacity = '0';
  
  setTimeout(() => {
    if (buttons) {
      buttons.style.transition = 'opacity 0.4s ease';
      buttons.style.opacity = '1';
    }
    if (fouitaSection) {
      fouitaSection.style.transition = 'opacity 0.4s ease 0.1s';
      fouitaSection.style.opacity = '1';
    }
  }, 100);

  // sistema de idioma
  const translations = {
    pt: {
      title: "LKL <span>Cosméticos</span>",
      btn1: "Time de Vendas Caucaia",
      btn2: "Time de Vendas Canindé",
      btn3: "Avalie a LKL Caucaia e saiba como chegar até a loja",
      btn4: "Avalie a LKL Canindé e saiba como chegar até a loja",
      btn5: "Salão de beleza LKL - Canindé",
      feedTitle: "Últimos posts"
    },
    en: {
      title: "LKL <span>Cosmetics</span>",
      btn1: "Sales Team Caucaia",
      btn2: "Sales Team Canindé",
      btn3: "Review LKL Caucaia and get directions to the store",
      btn4: "Review LKL Canindé and get directions to the store",
      btn5: "LKL Beauty Salon - Canindé",
      feedTitle: "Latest posts"
    },
    es: {
      title: "LKL <span>Cosméticos</span>",
      btn1: "Equipo de Ventas Caucaia",
      btn2: "Equipo de Ventas Canindé",
      btn3: "Califica LKL Caucaia y aprende cómo llegar a la tienda",
      btn4: "Califica LKL Canindé y aprende cómo llegar a la tienda",
      btn5: "Salón de belleza LKL - Canindé",
      feedTitle: "Últimas publicaciones"
    }
  };

  const langBtns = document.querySelectorAll('.lang-btn');
  
  function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    const titleEl = document.querySelector('h1');
    if (titleEl) titleEl.innerHTML = t.title;

    const btns = document.querySelectorAll('.buttons-group .btn');
    if (btns.length >= 5) {
      btns[0].querySelector('span:nth-child(2)').textContent = t.btn1;
      btns[1].querySelector('span:nth-child(2)').textContent = t.btn2;
      btns[2].querySelector('span:nth-child(2)').textContent = t.btn3;
      btns[3].querySelector('span:nth-child(2)').textContent = t.btn4;
      btns[4].querySelector('span:nth-child(2)').textContent = t.btn5;
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