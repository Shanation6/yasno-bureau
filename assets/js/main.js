/**
 * ЯСНО БЮРО — ОСНОВНОЙ СКРИПТ
 * Минималистичный, легковесный скрипт без внешних зависимостей.
 * Основной контент страницы полностью доступен даже без включённого JavaScript.
 */

/* ==========================================================================
   КОНФИГУРАЦИЯ ДАННЫХ
   Все ключевые данные студии (услуги, цены, контактные плейсхолдеры)
   собраны в одном месте для удобного редактирования.
   ========================================================================== */
const YASNO_CONFIG = {
  founder: "[ИМЯ]",
  telegram: "[TELEGRAM]",
  services: [
    {
      num: "01",
      title: "Лендинг",
      desc: "Для одной услуги, продукта или события. Предложение, подробности, ответы на вопросы и понятный способ обратиться."
    },
    {
      num: "02",
      title: "Сайт компании",
      desc: "Для бизнеса с несколькими направлениями. Услуги, информация о компании, примеры работ и контакты."
    },
    {
      num: "03",
      title: "Каталог",
      desc: "Для товаров, которые нужно показать и обсудить перед покупкой. Категории, характеристики и запрос расчёта."
    },
    {
      num: "→",
      title: "Уже есть сайт?",
      desc: "Можно начать с доработки: исправить структуру, обновить оформление или добавить нужные разделы."
    }
  ],
  pricing: {
    status: "Стоимость — после обсуждения задачи",
    note: "Цена зависит от количества страниц, готовности материалов и необходимых функций. Домен, хостинг и платные сервисы согласуются отдельно."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initFaqAccordion();
  initScrollSpy();
  initCurrentYear();
});

/**
 * Мобильное меню с поддержкой доступности (ARIA, Escape, Focus)
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  if (!toggleBtn || !mobileMenu) return;

  function setMenuState(isOpen) {
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    
    if (isOpen) {
      mobileMenu.classList.add("is-open");
      toggleBtn.setAttribute("aria-label", "Закрыть меню");
      document.body.style.overflow = "hidden"; // предотвратить фоновый скролл
    } else {
      mobileMenu.classList.remove("is-open");
      toggleBtn.setAttribute("aria-label", "Открыть меню");
      document.body.style.overflow = "";
    }
  }

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
  });

  // Закрытие при клике по ссылке
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  // Закрытие по клавише Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      toggleBtn.focus();
    }
  });
}

/**
 * Прогрессивное улучшение аккордеона FAQ:
 * Плавное закрытие других пунктов при открытии одного (аккуратный single-open режим),
 * сохраняя нативный HTML5 fallback на <details>
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
}

/**
 * Подсветка активного пункта навигации при скролле (ScrollSpy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${currentId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Автоматическое обновление года в футере
 */
function initCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
