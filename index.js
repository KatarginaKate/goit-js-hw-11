import{S as f,i as a}from"./assets/vendor-Dg3uDB0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){const n=`https://pixabay.com/api/?key=55027621-850b52e35e959b3f4fd98aefc&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>e).catch(e=>{throw console.error("Error fetching images:",e),e})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t.likes}</p>
    <p class="info-item"><b>Views</b> ${t.views}</p>
    <p class="info-item"><b>Comments</b> ${t.comments}</p>
    <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
  </div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function p(){c.innerHTML=""}function y(){l.classList.remove("is-hidden")}function g(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query",position:"topRight"});return}p(),y(),d(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}).catch(t=>{console.log(t)}).finally(()=>{g()}),u.reset()}
//# sourceMappingURL=index.js.map
