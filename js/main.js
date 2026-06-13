// 共用 JavaScript 功能 (Shared Header, Footer, and Interactions)

document.addEventListener("DOMContentLoaded", function () {
  // 1. 動態渲染 Header
  renderHeader();

  // 2. 動態渲染 Footer
  renderFooter();

  // 3. 滾動效果 (Header 縮小與背景變深)
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 4. 行動裝置漢堡選單
  setupMobileMenu();

  // 5. 購物車模擬功能
  setupCartSimulation();

  // 6. 漸入動畫延遲載入效果
  setupScrollAnimations();
});

// 動態渲染 Header
function renderHeader() {
  const headerContainer = document.getElementById("header-placeholder");
  if (!headerContainer) return;

  // 取得目前頁面檔名以判斷 active 狀態
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  headerContainer.innerHTML = `
    <header class="header">
      <div class="container">
        <a href="index.html" class="logo-wrapper">
          <img src="images/logo.png" alt="AURA Logo" class="logo-img">
          <span class="logo-text text-gradient">AURA</span>
        </a>
        
        <nav class="nav-menu">
          <ul class="nav-links" id="nav-links">
            <li><a href="index.html" class="nav-link ${page === "index.html" || page === "" ? "active" : ""}">首頁</a></li>
            <li><a href="about.html" class="nav-link ${page === "about.html" ? "active" : ""}">公司簡介</a></li>
            <li><a href="sports-casual.html" class="nav-link ${page === "sports-casual.html" ? "active" : ""}">運動休閒鞋</a></li>
            <li><a href="leather.html" class="nav-link ${page === "leather.html" ? "active" : ""}">皮鞋</a></li>
            <li><a href="sandals-slippers.html" class="nav-link ${page === "sandals-slippers.html" ? "active" : ""}">涼鞋與拖鞋</a></li>
            <li><a href="mens-special.html" class="nav-link ${page === "mens-special.html" ? "active" : ""}">男士特色款</a></li>
            <li><a href="womens-special.html" class="nav-link ${page === "womens-special.html" ? "active" : ""}">女士特色款</a></li>
            <li><a href="contact.html" class="nav-link ${page === "contact.html" ? "active" : ""}">聯絡我們</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <div class="cart-btn" id="cart-icon-btn">
            <span class="cart-icon">🛒</span>
            <span class="cart-count" id="global-cart-count">0</span>
          </div>
          <div class="hamburger" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  `;
}

// 動態渲染 Footer
function renderFooter() {
  const footerContainer = document.getElementById("footer-placeholder");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a href="index.html" class="logo-wrapper">
              <img src="images/logo.png" alt="AURA Logo" class="logo-img">
              <span class="logo-text text-gradient">AURA</span>
            </a>
            <p>極致工藝，步履非凡。AURA 專注於將現代美學與尖端製鞋科技相結合，為您打造尊榮與舒適並存的頂級鞋履體驗。</p>
            <div class="footer-socials">
              <a href="#" class="social-icon">🔵</a>
              <a href="#" class="social-icon">📷</a>
              <a href="#" class="social-icon">🐦</a>
            </div>
          </div>
          
          <div>
            <h3 class="footer-title">產品分類</h3>
            <ul class="footer-links">
              <li><a href="sports-casual.html">運動休閒鞋</a></li>
              <li><a href="leather.html">紳士皮鞋</a></li>
              <li><a href="sandals-slippers.html">涼鞋與拖鞋</a></li>
              <li><a href="mens-special.html">男士特色款</a></li>
              <li><a href="womens-special.html">女士特色款</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-title">顧客服務</h3>
            <ul class="footer-links">
              <li><a href="about.html">品牌故事</a></li>
              <li><a href="contact.html">聯絡我們</a></li>
              <li><a href="#">常見問題 FAQ</a></li>
              <li><a href="#">退換貨政策</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-title">訂閱電子報</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 15px;">獲取 AURA 最新鞋款資訊與專屬優惠代碼。</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('感謝您的訂閱！我們將為您發送最新優惠。');">
              <input type="email" class="form-control" placeholder="您的電子郵件..." required>
              <button type="submit" class="btn btn-primary btn-sm">訂閱</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 AURA Footwear Co., Ltd. 版權所有。本網站僅供展示與學術用途。</p>
        </div>
      </div>
    </footer>
  `;
}

// 設定行動裝置選單開關
function setupMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // 點擊連結後關閉選單
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
}

// 購物車模擬邏輯
function setupCartSimulation() {
  const cartIconBtn = document.getElementById("cart-icon-btn");
  const cartCountEl = document.getElementById("global-cart-count");

  // 從 localStorage 讀取購物車數量
  let currentCount = parseInt(localStorage.getItem("aura_cart_count")) || 0;
  if (cartCountEl) {
    cartCountEl.textContent = currentCount;
  }

  if (cartIconBtn) {
    cartIconBtn.addEventListener("click", function () {
      alert(`購物車內目前有 ${currentCount} 件商品！本網站為展示型網站，暫不提供實際結帳功能。`);
    });
  }

  // 監聽來自產品頁面的加入購物車點擊
  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("js-add-to-cart")) {
      e.preventDefault();
      currentCount++;
      localStorage.setItem("aura_cart_count", currentCount);
      if (cartCountEl) {
        cartCountEl.textContent = currentCount;
        
        // 購物車徽章微動畫
        cartCountEl.style.transform = "scale(1.4)";
        cartCountEl.style.transition = "transform 0.1s ease";
        setTimeout(() => {
          cartCountEl.style.transform = "scale(1)";
        }, 150);
      }
      
      // 顯示客製化 Toast 通知
      showToast("商品已成功加入購物車！");
    }
  });
}

// 顯示 Toast 訊息
function showToast(message) {
  let toast = document.getElementById("aura-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "aura-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--primary-gradient);
      color: var(--bg-darker);
      padding: 16px 28px;
      border-radius: var(--border-radius-sm);
      font-weight: 700;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      z-index: 2000;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.transform = "translateY(0)";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
  }, 3000);
}

// 捲動漸入動畫
function setupScrollAnimations() {
  const animElements = document.querySelectorAll(".fade-in-up-scroll");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    animElements.forEach(el => observer.observe(el));
  } else {
    // 降級處理
    animElements.forEach(el => el.classList.add("fade-in-up"));
  }
}

// 共用動態渲染產品卡片 HTML
function createShoeCardHTML(product) {
  return `
    <div class="shoe-card fade-in-up-scroll">
      <div class="card-img-wrapper">
        <span class="card-category">${product.categoryName}</span>
        <a href="product-detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="card-img">
        </a>
      </div>
      <div class="card-info">
        <h3 class="card-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <span class="card-price">NT$ ${product.price.toLocaleString()}</span>
          <button class="card-btn js-add-to-cart" title="加入購物車">+</button>
        </div>
      </div>
    </div>
  `;
}
