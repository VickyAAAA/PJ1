let menuHtml = '
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">關於我</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">商品展示</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">購物車</a></li>
';
// 取得 DOM  的節點
let menu = document.getElementById('menu');
menu.textContent =  menuHtml;