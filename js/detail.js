// 產品詳細資訊頁面邏輯 (Product Detail Page Logic)

document.addEventListener("DOMContentLoaded", function () {
  // 1. 解析 URL 的 id 參數
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  // 2. 獲取產品資料
  if (!productId) {
    showErrorAndRedirect("未指定產品！");
    return;
  }

  // 確保 PRODUCTS 已經載入
  if (typeof PRODUCTS === "undefined") {
    console.error("PRODUCTS 資料庫未載入，請確認 products.js 引入順序。");
    return;
  }

  const product = getProductById(productId);
  if (!product) {
    showErrorAndRedirect("找不到指定的產品，將為您導回首頁。");
    return;
  }

  // 3. 渲染產品詳細頁面資訊
  renderProductDetails(product);

  // 4. 渲染推薦產品列表
  renderRelatedProducts(product);

  // 5. 設定尺寸與顏色選擇按鈕交互
  setupSelectors();
});

// 錯誤處理與重導向
function showErrorAndRedirect(message) {
  alert(message);
  window.location.href = "index.html";
}

// 渲染產品詳細內容
function renderProductDetails(product) {
  // 動態更新 SEO 資訊與頁面 Title
  document.title = `${product.name} | AURA 極致履履`;
  
  // 更新 Meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", product.description);
  }

  // 插入各元素內容
  const categoryLink = document.getElementById("detail-category-link");
  if (categoryLink) {
    categoryLink.textContent = product.categoryName;
    
    // 設定分類頁面超連結
    let linkUrl = "index.html";
    if (product.category === "sports-casual") linkUrl = "sports-casual.html";
    else if (product.category === "leather") linkUrl = "leather.html";
    else if (product.category === "sandals-slippers") linkUrl = "sandals-slippers.html";
    else if (product.category === "mens-special") linkUrl = "mens-special.html";
    else if (product.category === "womens-special") linkUrl = "womens-special.html";
    
    categoryLink.href = linkUrl;
  }

  const productNameEl = document.getElementById("detail-product-name");
  if (productNameEl) productNameEl.textContent = product.name;

  const productPriceEl = document.getElementById("detail-product-price");
  if (productPriceEl) productPriceEl.textContent = `NT$ ${product.price.toLocaleString()}`;

  const productDescEl = document.getElementById("detail-product-desc");
  if (productDescEl) productDescEl.textContent = product.description;

  const productImgEl = document.getElementById("detail-product-img");
  if (productImgEl) {
    productImgEl.src = product.image;
    productImgEl.alt = product.name;
  }

  // 渲染產品規格表格
  const specsTableEl = document.getElementById("detail-specs-table");
  if (specsTableEl && product.specs) {
    let tableHTML = "";
    for (const [key, value] of Object.entries(product.specs)) {
      tableHTML += `
        <tr>
          <th>${key}</th>
          <td>${value}</td>
        </tr>
      `;
    }
    specsTableEl.innerHTML = tableHTML;
  }
}

// 渲染同分類的推薦商品
function renderRelatedProducts(currentProduct) {
  const relatedGridEl = document.getElementById("related-products-grid");
  if (!relatedGridEl) return;

  // 取得同分類的其他產品列表 (排除目前正在閱讀的商品，最多取 4 個)
  const relatedList = PRODUCTS.filter(
    p => p.category === currentProduct.category && p.id !== currentProduct.id
  ).slice(0, 4);

  // 如果數量不足 4 個，用其他分類的熱門商品補齊
  if (relatedList.length < 4) {
    const extraList = PRODUCTS.filter(
      p => p.id !== currentProduct.id && !relatedList.includes(p)
    ).slice(0, 4 - relatedList.length);
    relatedList.push(...extraList);
  }

  let htmlContent = "";
  relatedList.forEach(prod => {
    htmlContent += createShoeCardHTML(prod);
  });

  relatedGridEl.innerHTML = htmlContent;
}

// 尺寸與顏色按鈕交互
function setupSelectors() {
  // 尺寸選擇器
  const sizeContainer = document.querySelector(".size-selector");
  if (sizeContainer) {
    sizeContainer.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("size-btn")) {
        // 取消其他按鈕的 active
        sizeContainer.querySelectorAll(".size-btn").forEach(btn => {
          btn.classList.remove("active");
        });
        // 設定目前的 active
        e.target.classList.add("active");
      }
    });
  }

  // 顏色選擇器
  const colorContainer = document.querySelector(".color-selector");
  if (colorContainer) {
    colorContainer.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("color-dot")) {
        // 取消其他點的 active
        colorContainer.querySelectorAll(".color-dot").forEach(dot => {
          dot.classList.remove("active");
        });
        // 設定目前的 active
        e.target.classList.add("active");
        
        // 取得顏色名稱 (假設我們有動態顏色處理)
        const colorName = e.target.getAttribute("data-color");
        const activeColorLabel = document.getElementById("active-color-name");
        if (activeColorLabel) {
          activeColorLabel.textContent = colorName;
        }
      }
    });
  }
}
