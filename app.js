const PRODUCTS=[
{id:1,name:"Air Voltage X",cat:"running",label:"БЕГ / СКОРОСТЬ",price:12990,tag:"NEW DROP",type:"",colors:["#c5ff36","#17191e"],sizes:[39,40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",desc:"Лёгкая амортизация и яркий силуэт для тех, кто задаёт свой темп. Мягкая посадка, цепкая подошва и энергия каждого шага."},
{id:2,name:"Shadow Runner",cat:"running",label:"БЕГ / НА КАЖДЫЙ ДЕНЬ",price:10990,tag:"BESTSELLER",type:"pink",colors:["#454b55","#d5dbe2"],sizes:[38,39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",desc:"Универсальная пара для длинных маршрутов и быстрых решений. Дышащий верх и сбалансированная амортизация на каждый день."},
{id:3,name:"Court Vision 88",cat:"basketball",label:"БАСКЕТБОЛ / ПЛОЩАДКА",price:14990,tag:"LIMITED",type:"pink",colors:["#e7e8e9","#ef4444"],sizes:[40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85",desc:"Высокий силуэт, уверенная поддержка и ретро-энергия баскетбольной площадки. Созданы, чтобы играть по своим правилам."},
{id:4,name:"Cloud District",cat:"lifestyle",label:"ГОРОД / НА КАЖДЫЙ ДЕНЬ",price:8990,tag:"EASY PICK",type:"muted",colors:["#e8e1d5","#bba98e"],sizes:[38,39,40,41,42,43],image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",desc:"Минималистичная база, которая работает почти с любым образом. Комфортная стелька и спокойная палитра без лишнего шума."},
{id:5,name:"Pulse Reactor",cat:"running",label:"БЕГ / ПРОФЕССИОНАЛЬНЫЕ ТРЕНИРОВКИ",price:16490,tag:"HOT PICK",type:"pink",colors:["#baff2d","#f0f0ef"],sizes:[39,40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",desc:"Отзывчивая подошва и упругая посадка для активных дней. Каждая деталь рассчитана на движение, а не на паузу."},
{id:6,name:"Mono Form 02",cat:"lifestyle",label:"ГОРОД / МИНИМАЛИЗМ",price:11990,tag:"EDITOR'S PICK",type:"",colors:["#a5a7a8","#111216"],sizes:[39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",desc:"Чистая форма и архитектурные линии. Пара для тех, кто любит точность в деталях и спокойную уверенность в стиле."},
{id:7,name:"Night Shift High",cat:"basketball",label:"БАСКЕТБОЛ / ВЫСОКИЙ СИЛУЭТ",price:15990,tag:"JUST IN",type:"",colors:["#191b20","#c5ff36"],sizes:[40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",desc:"Выразительный высокий профиль и плотная фиксация. Для вечерних улиц, громкой музыки и собственных маршрутов."},
{id:8,name:"Retro Static",cat:"lifestyle",label:"ГОРОД / РЕТРО",price:9990,tag:"CLASSIC",type:"muted",colors:["#92979f","#5679a8"],sizes:[38,39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85",desc:"Вдохновлены архивными беговыми моделями и переосмыслены для города. Мягкая кожа, винтажные акценты и лёгкая подошва."},
{id:9,name:"Obsidian Flow",cat:"running",label:"БЕГ / ЛЁГКОСТЬ",price:13990,tag:"NEW",type:"",rating:"",reviews:0,colors:["#191b20","#9da3ad"],sizes:[39,40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",desc:"Тёмный силуэт, гибкая подошва и лёгкий верх для ежедневных пробежек и насыщенных дней."},
{id:10,name:"Carbon Street",cat:"lifestyle",label:"ГОРОД / МОНОХРОМ",price:10490,tag:"DARK MODE",type:"muted",rating:"",reviews:0,colors:["#111216","#555b65"],sizes:[38,39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",desc:"Монохромная пара с чистыми линиями, которая легко вписывается в повседневный гардероб."},
{id:11,name:"Volt Sprint Pro",cat:"running",label:"БЕГ / ТРЕНИРОВКИ",price:17990,tag:"PRO SERIES",type:"pink",rating:"",reviews:0,colors:["#c5ff36","#17191e"],sizes:[39,40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",desc:"Спортивная посадка и энергичный контраст для тренировок, где важна каждая секунда."},
{id:12,name:"Midnight Court",cat:"basketball",label:"БАСКЕТБОЛ / КЛАССИКА",price:16990,tag:"COURT READY",type:"",rating:"",reviews:0,colors:["#17191e","#eee9df"],sizes:[40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85",desc:"Плотная фиксация и уверенный силуэт, вдохновлённый классикой баскетбольной обуви."},
{id:13,name:"Concrete Wave",cat:"lifestyle",label:"ГОРОД / УЛИЧНЫЙ СТИЛЬ",price:12490,tag:"STREET PICK",type:"pink",rating:"",reviews:0,colors:["#858b95","#24262b"],sizes:[38,39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",desc:"Объёмная подошва и спокойная палитра для долгих прогулок и городских маршрутов."},
{id:14,name:"Phantom Knit",cat:"running",label:"БЕГ / ДЫШАЩИЙ ВЕРХ",price:11490,tag:"LIGHTWEIGHT",type:"muted",rating:"",reviews:0,colors:["#282b31","#bfc5ce"],sizes:[39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",desc:"Мягкий текстильный верх и гибкая конструкция для комфортного движения каждый день."},
{id:15,name:"Retro Afterdark",cat:"lifestyle",label:"ГОРОД / РЕТРО",price:9490,tag:"ARCHIVE",type:"",rating:"",reviews:0,colors:["#a5a7a8","#292b30"],sizes:[38,39,40,41,42,43,44],image:"https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85",desc:"Ретро-пропорции, выразительные детали и универсальная форма на каждый день."},
{id:16,name:"High Voltage 01",cat:"basketball",label:"БАСКЕТБОЛ / HIGH-TOP",price:18490,tag:"LIMITED",type:"pink",rating:"",reviews:0,colors:["#d8d9dc","#c5ff36"],sizes:[40,41,42,43,44,45],image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",desc:"Высокий силуэт с яркими акцентами — выразительная пара для площадки и улицы."}];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], money=n=>new Intl.NumberFormat("ru-RU").format(n)+" ₽";
const ic=(n,c="")=>`<svg class="sv ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
let purchased=read("neonsole-purchased",[]),cart=read("neonsole-cart",[]),favorites=read("neonsole-favorites",[]),reviews=read("neonsole-reviews",[]),orders=read("neonsole-orders",[]),filter="all",query="",sort="featured",modalId=null,chosenSize=42,chosenRating=0;
const product=id=>PRODUCTS.find(p=>p.id===Number(id)), esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function persist(){localStorage.setItem("neonsole-cart",JSON.stringify(cart));localStorage.setItem("neonsole-favorites",JSON.stringify(favorites));localStorage.setItem("neonsole-reviews",JSON.stringify(reviews));localStorage.setItem("neonsole-purchased",JSON.stringify(purchased));localStorage.setItem("neonsole-orders",JSON.stringify(orders))}
function reviewStats(id){let a=reviews.filter(r=>r.productId===id);return {count:a.length,avg:a.length?(a.reduce((s,r)=>s+r.rating,0)/a.length).toFixed(1):null}}
function reviewable(){return purchased.filter(id=>product(id)&&!reviews.some(r=>r.productId===id))}
function canReviewProduct(id){return reviewable().includes(id)}
function stars(n){return [1,2,3,4,5].map(i=>ic("star",i<=n?"fill":"")).join("")}
function favLabel(id){return favorites.includes(id)?ic("heart","fill")+" В избранном":ic("heart")+" В избранное"}
function miniReview(r){return `<div class="mini-review"><div class="mini-top"><b>${esc(r.name)}</b><span class="mini-stars">${stars(r.rating)}</span></div><p>${esc(r.text)}</p>${isAdmin?`<button class="rc-del" data-delrev="${r.id}">Удалить отзыв</button>`:""}</div>`}
function card(p,i){return `<article class="card" data-id="${p.id}" style="animation-delay:${i*35}ms"><div class="visual"><span class="product-number">NS / ${String(p.id).padStart(2,"0")}</span>${p.tag?`<span class="tag ${p.type}">${esc(p.tag)}</span>`:""}<button class="heart ${favorites.includes(p.id)?"active":""}" data-fav="${p.id}" aria-label="Избранное">${favorites.includes(p.id)?ic("heart","fill"):ic("heart")}</button><img src="${p.image}" alt="${esc(p.name)}" loading="lazy"><button class="quick" data-quick="${p.id}">СМОТРЕТЬ МОДЕЛЬ</button></div><div class="product-info"><span class="category">${esc(p.label)}</span><span class="name">${esc(p.name)}</span><div class="price-row"><span class="price">${money(p.price)}</span><span class="dots">${p.colors.map(c=>`<i style="background:${c}"></i>`).join("")}</span></div><a class="product-tg-review" href="https://t.me/Ссылка" target="_blank" rel="noopener noreferrer">Отзывы в Telegram <span>↗</span></a><button class="add" data-add="${p.id}">Выбрать размер <span>${ic("plus")}</span></button></div></article>`}
function filtered(){let a=PRODUCTS.filter(p=>(filter==="all"||p.cat===filter)&&(p.name+" "+p.label).toLowerCase().includes(query.toLowerCase()));if(sort==="price-asc")a.sort((x,y)=>x.price-y.price);if(sort==="price-desc")a.sort((x,y)=>y.price-x.price);if(sort==="name")a.sort((x,y)=>x.name.localeCompare(y.name));return a}
function renderProducts(){let a=filtered();$("#products").innerHTML=a.map(card).join("");$("#products").hidden=!a.length;$("#empty").hidden=!!a.length;$("#filterStatus").hidden=filter==="all"&&!query;$("#resultCount").textContent=`Найдено моделей: ${a.length}`;$("#showing").textContent=String(a.length).padStart(2,"0");$$(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));$$("[data-count]").forEach(e=>{const k=e.dataset.count;e.textContent=k==="all"?PRODUCTS.length:PRODUCTS.filter(p=>p.cat===k).length})}
function renderCounts(){let qty=cart.reduce((s,i)=>s+i.qty,0),sum=cart.reduce((s,i)=>s+product(i.id).price*i.qty,0),shipping=0;$("#cartCount").textContent=qty;$("#cartHeading").innerHTML=`Товаров в корзине: <span class="heading-count-number">${qty}</span>`;$("#favoriteCount").textContent=favorites.length;$("#favoritesHeading").innerHTML=`Вы добавили товаров в избранное: <span class="heading-count-number">${favorites.length}</span>`;$("#total").textContent=money(sum+shipping);$("#subtotal").textContent=money(sum);$("#deliveryCost").textContent="Бесплатно";$("#checkoutTotal").textContent=money(sum+shipping);$("#shippingText").textContent="Доставка бесплатная на все заказы";$("#shippingProgress").style.width="100%"}
function renderCart(){if(!cart.length){$("#cartItems").innerHTML='<div class="drawer-empty"><div class="de-ic">'+ic("bag")+'</div><b>Корзина пока пуста</b><p>Самое время найти свою пару.</p><button class="btn-main" data-close data-gocatalog>Открыть каталог</button></div>';$("#cartFooter").hidden=true}else{$("#cartFooter").hidden=false;$("#cartItems").innerHTML=cart.map(i=>{let p=product(i.id);return `<div class="drawer-item"><img src="${p.image}" alt="${esc(p.name)}"><div class="cart-item-copy"><h3>${esc(p.name)}</h3><span class="size-chip">Размер EU ${i.size}</span><strong>${money(p.price*i.qty)}</strong><small class="unit-price">${money(p.price)} за пару</small><div class="item-actions"><div class="qty"><button data-qty="${p.id}" data-size="${i.size}" data-delta="-1" aria-label="Уменьшить количество">${ic("minus")}</button><span>${i.qty}</span><button data-qty="${p.id}" data-size="${i.size}" data-delta="1" aria-label="Увеличить количество">${ic("plus")}</button></div><button class="remove" data-remove="${p.id}" data-size="${i.size}">Удалить</button></div></div></div>`}).join("")}renderCounts()}
function renderFavorites(){if(!favorites.length)$("#favoriteItems").innerHTML='<div class="drawer-empty"><div class="de-ic">'+ic("heart")+'</div><b>Пока ничего не сохранено</b><p>Нажми на сердечко у понравившейся пары.</p></div>';else $("#favoriteItems").innerHTML=favorites.map(id=>{let p=product(id);return `<div class="drawer-item"><img src="${p.image}" alt="${esc(p.name)}"><div><h3>${esc(p.name)}</h3><small>${esc(p.label)}</small><strong>${money(p.price)}</strong><div class="item-actions"><button class="remove" data-unfav="${p.id}">Убрать</button><button class="remove" data-add="${p.id}">В корзину</button></div></div></div>`}).join("")}
function toast(msg){let e=document.createElement("div");e.className="toast";e.innerHTML=ic(msg==="Неверный пароль"?"close":"check");let s=document.createElement("span");s.textContent=msg;e.append(s);$("#toasts").append(e);setTimeout(()=>e.remove(),3000)}
function closeAll(){ $$(".drawer").forEach(e=>e.classList.remove("open"));$$(".modal-wrap").forEach(e=>e.classList.remove("open"));$("#overlay").classList.remove("active");document.body.classList.remove("lock")}
function openDrawer(id){closeAll();$("#overlay").classList.add("active");$(id).classList.add("open");document.body.classList.add("lock")}
function openModal(id){closeAll();$(id).classList.add("open");document.body.classList.add("lock")}
function add(id,size=42,keep=false){let p=product(id);if(!p)return;let s=p.sizes.includes(Number(size))?Number(size):p.sizes[0],old=cart.find(i=>i.id===p.id&&i.size===s);if(old)old.qty++;else cart.push({id:p.id,size:s,qty:1});persist();renderCart();toast(`${p.name} добавлены в корзину`);if(!keep){$("#productModal").classList.remove("open");document.body.classList.remove("lock")}}
function toggleFav(id){id=Number(id);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];persist();const active=favorites.includes(id);document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn=>{btn.classList.toggle("active",active);btn.innerHTML=active?ic("heart","fill"):ic("heart");btn.setAttribute("aria-pressed",String(active));});renderFavorites();renderCounts();toast(active?"Добавлено в избранное":"Удалено из избранного")}
function quick(id){let p=product(id);modalId=p.id;chosenSize=p.sizes.includes(42)?42:p.sizes[0];$("#modalContent").innerHTML=`<div class="modal-product"><div class="modal-photo"><img src="${p.image}" alt="${esc(p.name)}"></div><div class="modal-info"><span class="category">${esc(p.label)}</span><h2>${esc(p.name)}</h2><div class="modal-price">${money(p.price)}</div><p>${esc(p.desc)}</p><div class="size-title">Выбери размер · EU</div><div class="sizes">${p.sizes.map(s=>`<button class="${s===chosenSize?"selected":""}" data-size="${s}">${s}</button>`).join("")}</div><button class="btn" id="modalAdd">Добавить в корзину · EU ${chosenSize}</button><button class="modal-fav" id="modalFav">${favLabel(p.id)}</button></div></div>`;openModal("#productModal")}
function reset(){filter="all";query="";sort="featured";$("#search").value="";$("#sort").value="featured";renderProducts()}
document.addEventListener("click",e=>{const tile=e.target.closest(".gt[data-category]");if(tile){e.preventDefault();filter=tile.dataset.category;query="";sort="featured";$("#search").value="";$("#sort").value="featured";renderProducts();showCatalogView();return;}let b=e.target.closest("button");if(!b)return;if(b.dataset.filter){filter=b.dataset.filter;renderProducts()}if(b.dataset.fav)toggleFav(b.dataset.fav);if(b.dataset.add)quick(b.dataset.add);if(b.dataset.quick)quick(b.dataset.quick);if(b.dataset.size&&b.closest("#modalContent")){chosenSize=Number(b.dataset.size);$("#modalAdd").textContent=`Добавить в корзину · EU ${chosenSize}`;$("#modalContent").querySelectorAll("[data-size]").forEach(x=>x.classList.toggle("selected",Number(x.dataset.size)===chosenSize))}if(b.id==="modalAdd")addFromModal();if(b.id==="goCart"){renderCart();openDrawer("#cartDrawer")}if(b.id==="keepShop")closeAll();if(b.dataset.chip){reviewFilter=b.dataset.chip;renderReviews()}if(b.id==="modalFav"){toggleFav(modalId);b.innerHTML=favLabel(modalId)}if(b.dataset.qty){let i=cart.find(x=>x.id===Number(b.dataset.qty)&&x.size===Number(b.dataset.size));if(i){i.qty+=Number(b.dataset.delta);if(i.qty<1)cart=cart.filter(x=>x!==i);persist();renderCart()}}if(b.dataset.remove){cart=cart.filter(i=>!(i.id===Number(b.dataset.remove)&&i.size===Number(b.dataset.size)));persist();renderCart()}if(b.dataset.unfav){favorites=favorites.filter(x=>x!==Number(b.dataset.unfav));persist();renderFavorites();renderProducts();renderCounts()}if(b.hasAttribute("data-close")){closeAll()}});
$("#cartOpen").onclick=()=>{renderCart();openDrawer("#cartDrawer")};$("#favoritesOpen").onclick=()=>{renderFavorites();openDrawer("#favoritesDrawer")};$("#overlay").onclick=closeAll;
$("#searchOpen").onclick=()=>{$("#search").focus();$("#catalog").scrollIntoView({behavior:"smooth"})};
$("#search").oninput=e=>{query=e.target.value.trim();renderProducts()};$("#sort").onchange=e=>{sort=e.target.value;renderProducts()};$("#reset").onclick=reset;$("#emptyReset").onclick=reset;
$("#menuToggle").onclick=()=>$("#nav").classList.toggle("open");$$("nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
$$(".modal-wrap").forEach(m=>m.onclick=e=>{if(e.target===m)closeAll()});
$("#checkoutBtn").onclick=()=>{if(!cart.length)return toast("Сначала добавь товар в корзину");closeAll();renderCheckoutSummary();$("#checkoutLayout").hidden=false;$("#checkoutDone").hidden=true;openModal("#checkoutModal")};
$("#checkoutForm").onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),no="NS-"+Math.floor(100000+Math.random()*900000);const order={number:no,email:String(fd.get("email")).trim().toLowerCase(),name:String(fd.get("name")).trim(),city:String(fd.get("city")),address:String(fd.get("address")).trim(),delivery:String(fd.get("delivery")),items:cart.map(i=>({...i})),total:cart.reduce((s,i)=>s+product(i.id).price*i.qty,0),status:"Заказ принят",createdAt:Date.now()};orders.unshift(order);purchased=[...new Set([...purchased,...cart.map(i=>i.id)])];cart=[];persist();renderCart();renderReviews();e.target.reset();$("#doneNo").textContent=no;$("#checkoutLayout").hidden=true;$("#checkoutDone").hidden=false;$("#checkoutModal .modal").scrollTop=0;renderOrderHistory();};
$("#newsletter").onsubmit=e=>{e.preventDefault();let email=$("#email").value.trim(),subs=read("neonsole-subscribers",[]);if(subs.includes(email))toast("Этот email уже подписан");else{subs.push(email);localStorage.setItem("neonsole-subscribers",JSON.stringify(subs));toast("Ты в списке. Следующий дроп не пройдёт мимо!")}e.target.reset()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeAll();$("#nav").classList.remove("open")}if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("#search").focus()}});
window.addEventListener("scroll",()=>$("#backTop").classList.toggle("visible",scrollY>500),{passive:true});$("#backTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});
if("IntersectionObserver"in window){let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e))}else $$(".reveal").forEach(e=>e.classList.add("visible"));
let reviewFilter="all",isAdmin=false;
function renderReviews(){let all=[...reviews].sort((a,b)=>b.createdAt-a.createdAt),list=reviewFilter==="all"?all:all.filter(r=>r.productId===Number(reviewFilter)),total=all.length,avg=total?all.reduce((s,r)=>s+r.rating,0)/total:0;$("#reviewsTotal").textContent=total;$("#reviewsAvg").textContent=total?avg.toFixed(1):"0.0";$("#reviewsAvg").classList.toggle("is-empty",!total);$("#reviewsStars").innerHTML=stars(Math.round(avg));$("#reviewsBars").innerHTML=[5,4,3,2,1].map(n=>{let c=all.filter(r=>r.rating===n).length;return `<div class="bar-row"><span>${n}${ic("star","fill sm")}</span><div class="bar"><i style="width:${total?c/total*100:0}%"></i></div><b>${c}</b></div>`}).join("");$("#reviewChips").innerHTML=total?`<button class="chip ${reviewFilter==="all"?"active":""}" data-chip="all">Все · ${total}</button>`+PRODUCTS.filter(p=>all.some(r=>r.productId===p.id)).map(p=>`<button class="chip ${String(reviewFilter)===String(p.id)?"active":""}" data-chip="${p.id}">${esc(p.name)} · ${all.filter(r=>r.productId===p.id).length}</button>`).join(""):"";$("#reviewsList").innerHTML=list.length?list.map(r=>`<article class="review-card rv-card"><div class="rc-top"><div class="review-avatar">${esc(r.name.trim().slice(0,1).toUpperCase())}</div><div class="rc-who"><strong>${esc(r.name)}</strong><time>${new Date(r.createdAt).toLocaleDateString("ru-RU")}</time></div><div class="review-stars" aria-label="Оценка ${r.rating} из 5">${stars(r.rating)}</div></div><p>${esc(r.text)}</p><div class="rc-foot"><span class="rc-model">${esc(product(r.productId)?.name||"Модель")}</span><span class="rc-actions"><button class="rc-link" data-showcat="${r.productId}">В каталоге</button>${isAdmin?`<button class="rc-del" data-delrev="${r.id}">Удалить</button>`:""}</span></div></article>`).join(""):'<div class="rv-empty"><div class="rv-empty-stars" aria-hidden="true">'+[1,2,3,4,5].map(()=>"<span>"+ic("star")+"</span>").join("")+'</div><b>Пока тишина</b><p>'+(total?"Об этой модели пока нет отзывов.":"Здесь появятся отзывы покупателей. Оформи заказ и поделись впечатлением первым.")+'</p><a class="btn-main rv-write" href="#reviewForm">Написать отзыв</a><button class="btn-ghost rv-shop" data-gocatalog>Выбрать кроссовки</button></div>';updateReviewAccess();renderProducts()}
function setupReviewForm(){$$("[data-rating]").forEach(b=>b.onclick=()=>{chosenRating=Number(b.dataset.rating);$$("[data-rating]").forEach(x=>x.classList.toggle("selected",Number(x.dataset.rating)<=chosenRating));$("#ratingHint").textContent=`Твоя оценка: ${chosenRating} из 5`;});$("#reviewForm").onsubmit=e=>{e.preventDefault();if(!chosenRating){toast("Сначала выбери оценку от 1 до 5");return}if(!canReviewProduct(Number(new FormData(e.target).get("reviewProduct")))){toast("Отзыв можно оставить только после оформления заказа");return}let fd=new FormData(e.target),name=String(fd.get("reviewName")).trim(),text=String(fd.get("reviewText")).trim();if(!name||!text)return;reviews.push({id:Date.now(),name,productId:Number(fd.get("reviewProduct")),rating:chosenRating,text,createdAt:Date.now()});persist();renderReviews();e.target.reset();chosenRating=0;$$("[data-rating]").forEach(x=>x.classList.remove("selected"));$("#ratingHint").textContent="Выбери от 1 до 5 звёзд";toast("Отзыв опубликован — он появился и под моделью в каталоге");};}
setupReviewForm();renderReviews();renderProducts();renderCart();renderFavorites();
// Резервное изображение на случай, если внешний источник не загрузится.
document.addEventListener("error",e=>{const img=e.target;if(img.tagName!=="IMG"||img.dataset.fallback)return;img.dataset.fallback="1";img.src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85";},true);


/* Catalog is a separate in-site view, not a section the visitor has to scroll down to. */
const VIEWS=["view-story","view-reviews","view-drop","view-contact","view-order-history"];
function showCatalogView(){
  const history=$("#orderHistory"); if(history)history.hidden=true;
  document.body.classList.remove(...VIEWS);
  document.body.classList.add("catalog-view");
  $$("#nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#catalog"));
  window.scrollTo({top:0,behavior:"smooth"});
  $("#nav").classList.remove("open");
}
function showHomeView(target="#top"){
  const map={"#story":"view-story","#reviews":"view-reviews","#drop":"view-drop","#contact":"view-contact","#orderHistory":"view-order-history"};
  document.body.classList.remove("catalog-view",...VIEWS);
  if(map[target])document.body.classList.add(map[target]);
  const history=$("#orderHistory"); if(history)history.hidden=target!=="#orderHistory";
  $$("#nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===target));
  $("#nav").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
  const link=e.target.closest('a[href^="#"]');
  if(!link)return;
  const target=link.getAttribute("href");
  if(target==="#catalog"){
    e.preventDefault();
    showCatalogView();
  }else if(target==="#top"){
    e.preventDefault();
    showHomeView("#top");
  }else if(["#story","#reviews","#drop","#contact","#orderHistory"].includes(target)){
    e.preventDefault();
    showHomeView(target);
  }
});

$("#searchOpen").onclick=()=>{showCatalogView();requestAnimationFrame(()=>$("#search").focus());};


/* Reviews <-> catalog links, and opening the catalog by hash */
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.review){showHomeView("#reviews");$("#reviewProduct").value=b.dataset.review;setTimeout(()=>$("#reviewForm").scrollIntoView({behavior:"smooth",block:"center"}),350)}
  if(b.dataset.showcat){const p=product(b.dataset.showcat);filter="all";query=p.name;$("#search").value=query;renderProducts();showCatalogView();}
});
if(location.hash==="#catalog")showCatalogView();else if(["#story","#reviews","#drop","#contact","#orderHistory"].includes(location.hash))showHomeView(location.hash);


/* Click on a card opens size picker; after adding, offer to go to the cart */
document.addEventListener("click",e=>{
  const c=e.target.closest(".card");
  if(!c||e.target.closest("button,summary,details,a,.card-reviews"))return;
  quick(c.dataset.id);
});
function addFromModal(){
  const p=product(modalId);if(!p)return;
  add(modalId,chosenSize,true);
  $("#modalContent").innerHTML=`<div class="modal-done"><div class="done-ic">${ic("check")}</div><h2>Добавлено в корзину</h2><p>${esc(p.name)} · размер EU ${chosenSize}</p><button class="btn" id="goCart">Перейти в корзину</button><button class="modal-fav" id="keepShop">Продолжить выбор</button></div>`;
}


function renderCheckoutSummary(){
  const sum=cart.reduce((s,i)=>s+product(i.id).price*i.qty,0);
  $("#checkoutItems").innerHTML=cart.map(i=>{const p=product(i.id);return `<div class="co-item"><div class="co-img"><img src="${p.image}" alt=""><em>${i.qty}</em></div><div class="co-name"><b>${esc(p.name)}</b><small>Размер EU ${i.size}</small></div><span>${money(p.price*i.qty)}</span></div>`}).join("");
  $("#coSubtotal").textContent=money(sum);
}
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.hasAttribute("data-totop"))scrollTo({top:0,behavior:"smooth"});
  if(b.hasAttribute("data-gocatalog")){closeAll();showCatalogView()}
});


/* Moderation: delete reviews after entering the password */
const ADMIN_HASH=2424065706975954;
const cyrb53=(str,seed=0)=>{let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)};
function updateAdminUI(){
  $("#adminToggle").textContent=isAdmin?"Выйти из режима модератора":"Модерация";
  $("#adminToggle").classList.toggle("on",isAdmin);
  $("#delAll").hidden=!isAdmin||!reviews.length;
  document.body.classList.toggle("admin-on",isAdmin);
}
$("#adminToggle").onclick=()=>{
  if(isAdmin){isAdmin=false;updateAdminUI();renderReviews();toast("Режим модератора выключен");return}
  $("#adminForm").hidden=!$("#adminForm").hidden;
  if(!$("#adminForm").hidden)$("#adminPass").focus();
};
$("#adminForm").onsubmit=e=>{
  e.preventDefault();
  const ok=cyrb53($("#adminPass").value)===ADMIN_HASH;
  $("#adminPass").value="";
  if(!ok){toast("Неверный пароль");return}
  isAdmin=true;$("#adminForm").hidden=true;updateAdminUI();renderReviews();toast("Режим модератора включён");
};
$("#delAll").onclick=()=>{
  if(!isAdmin||!reviews.length)return;
  if(!confirm("Удалить ВСЕ отзывы? Это нельзя отменить."))return;
  reviews=[];persist();renderReviews();updateAdminUI();toast("Все отзывы удалены");
};
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-delrev]");if(!b||!isAdmin)return;
  if(!confirm("Удалить этот отзыв?"))return;
  reviews=reviews.filter(x=>x.id!==Number(b.dataset.delrev));
  persist();renderReviews();updateAdminUI();toast("Отзыв удалён");
});


/* Contact page: copy buttons and mail form */
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-copy]");if(!b)return;
  const t=b.dataset.copy;
  const done=()=>{toast("Скопировано: "+t);b.classList.add("ok");setTimeout(()=>b.classList.remove("ok"),1400)};
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).then(done,()=>{});
  else{const a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.append(a);a.select();try{document.execCommand("copy");done()}catch{}a.remove()}
});


/* Reviews are only available to people who have placed an order */
function updateReviewAccess(){
  const avail=reviewable(),form=$("#reviewForm"),lock=$("#reviewLocked");
  document.body.classList.toggle("can-review",avail.length>0);
  form.hidden=!avail.length;lock.hidden=avail.length>0;
  const sel=$("#reviewProduct"),prev=sel.value;
  sel.innerHTML=avail.map(id=>`<option value="${id}">${esc(product(id).name)}</option>`).join("");
  if(avail.map(String).includes(prev))sel.value=prev;
  $("#lockTitle").textContent=purchased.length?"Ты уже оценил все свои покупки":"Отзыв — только для покупателей";
  $("#lockText").textContent=purchased.length?"Спасибо! Новый отзыв можно будет оставить после следующего заказа.":"Мы публикуем только честные мнения. Оформи заказ — и здесь появится форма отзыва на купленную модель.";
  $("#lockBtn").hidden=!!purchased.length;
}
updateReviewAccess();


/* Review form polish: star hover preview, rating label, character counter */
(function(){
  const labels=["","Ужасно","Плохо","Нормально","Хорошо","Отлично!"];
  const box=$(".rating-buttons"),btns=$$("[data-rating]");
  btns.forEach(b=>{
    b.addEventListener("mouseenter",()=>btns.forEach(x=>x.classList.toggle("hov",Number(x.dataset.rating)<=Number(b.dataset.rating))));
    b.addEventListener("click",()=>{$("#ratingHint").textContent=`${chosenRating} из 5 — ${labels[chosenRating]}`;$("#ratingHint").classList.add("set")});
  });
  box.addEventListener("mouseleave",()=>btns.forEach(x=>x.classList.remove("hov")));
  const ta=$('#reviewForm textarea'),cnt=$("#rvCount");
  ta.addEventListener("input",()=>{cnt.textContent=ta.value.length});
  $("#reviewForm").addEventListener("reset",()=>setTimeout(()=>{cnt.textContent=0;$("#ratingHint").classList.remove("set")},0));
})();


/* История заказов: демонстрационные статусы обновляются по времени с момента оформления. */
function getTimedOrderStatus(order, now=Date.now()){
  const age=Math.max(0, now-Number(order.createdAt||now));
  // Таймлайн для портфолио: подготовка и отправка показаны ускоренно; статус «Доставлен» — через 4 часа.
  if(age < 60*1000) return {status:"Заказ принят", progress:1, note:"Заказ принят — ожидает обработки"};
  if(age < 5*60*1000) return {status:"Готовится к отправке", progress:2, note:"Собираем заказ и готовим к отправке"};
  if(age < 4*60*60*1000) return {status:"В пути", progress:3, note:"Курьер в пути · ориентир доставки от 4 часов"};
  return {status:"Доставлен", progress:4, note:"Демо-статус: ориентировочное время доставки прошло"};
}
function updateOrderStatuses(){
  let changed=false; const now=Date.now();
  orders=orders.map(order=>{
    const next=getTimedOrderStatus(order,now).status;
    if(order.status!==next){changed=true;return {...order,status:next};}
    return order;
  });
  if(changed) localStorage.setItem("neonsole-orders",JSON.stringify(orders));
  return changed;
}
function normalizeDeliveryLabel(value){
  const label=String(value||"").trim();
  // Старые заказы могли сохраниться с прежним сроком доставки.
  if(/курьер/i.test(label) && /2\s*[–-]\s*4\s*дня/i.test(label)) return "Курьер — от 4 часов";
  return label;
}
function renderOrderHistory(){
  const list=$("#orderHistoryList"); if(!list)return;
  updateOrderStatuses();
  list.innerHTML=orders.length?orders.map(order=>{
    const stage=getTimedOrderStatus(order);
    const status=stage.status, progress=stage.progress;
    return `<article class="order-history-card"><div><span class="tracking-kicker">ЗАКАЗ · ${new Date(order.createdAt).toLocaleDateString("ru-RU")}</span><h3>${esc(order.number)}</h3><p>${(order.items||[]).map(i=>`${esc(product(i.id)?.name||"Кроссовки")} · EU ${Number(i.size)||"—"} × ${Number(i.qty)||1}`).join("<br>")}</p><p>${esc([order.city,normalizeDeliveryLabel(order.delivery)].filter(Boolean).join(" · ")||"Способ доставки не указан")}</p><span class="history-status">${esc(status)}</span><div class="history-progress" aria-label="Этап доставки">${[1,2,3,4].map(n=>`<i class="${n<=progress?'done':''}"></i>`).join("")}</div><small>${esc(stage.note)}</small></div><div class="history-total">${money(order.total||0)}</div></article>`;
  }).join(""):'<div class="history-empty"><div class="de-ic">'+ic("bag")+'</div><b>Пока нет заказов</b><p>Оформи первую пару — здесь появится её номер и статус.</p><a class="btn-main" href="#catalog">Перейти в каталог</a></div>';
}
// Обновляем статусы автоматически, пока страница открыта, и при возвращении во вкладку.
setInterval(()=>{if(updateOrderStatuses() && !$("#orderHistory")?.hidden) renderOrderHistory();},15000);
document.addEventListener("visibilitychange",()=>{if(!document.hidden && updateOrderStatuses() && !$("#orderHistory")?.hidden) renderOrderHistory();});
$("#trackLatest")?.addEventListener("click",()=>{
  renderOrderHistory();closeAll();showHomeView("#orderHistory");
  $("#orderHistory").hidden=false;$("#orderHistory").scrollIntoView({behavior:"smooth",block:"start"});
});
renderOrderHistory();


// Reviews CTA is a direct link to the Telegram channel.
