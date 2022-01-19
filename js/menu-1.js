/**
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">關於我</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">商品展示</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">購物車</a></li>
 */

 let menuHtml = '
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">首頁</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">關於我</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">商品展示</a></li>
 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">購物車</a></li>
 ';

let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;


 let menuData = [
     {
         title:'首頁',
         url:'index.html'
     },
     {
        title:'關於我',
        url:'about.html'
    },
    {
        title:'商品展示',
        url:'products.html'
    },
    {
        title:'購物車',
        url:'store.html'
    },

 ];

 letmenu='';
 for(let row of menuData){
    menuHtml += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href=""+row.url+'+row.title+'"'

 }

for( row of menuData){
    console.log(row.title);
    console.log(row.url);
}



 // console.log(console.log(menuData[0].title));  //Home