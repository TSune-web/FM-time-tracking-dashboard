(()=>{"use strict";var e={468:e=>{e.exports=JSON.parse('[{"title":"Work","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]')}},n={};function s(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,s),i.exports}(()=>{const e=document.getElementById("daily"),n=document.getElementById("weekly"),t=document.getElementById("monthly"),r=document.querySelectorAll(".card");function i(e){if(e.title)return e.title.replace(/\s+/g,"").trim().toLowerCase()}s(468).map(((s,l)=>{!function(s,l){document.addEventListener("DOMContentLoaded",(function(){null==e||e.classList.remove("selected"),null==n||n.classList.add("selected"),null==t||t.classList.remove("selected");const c=i(s);r[l].innerHTML=`\n    <section class="content-wrapper ${c}">\n        <div class="content">\n            <div class="content__header">\n                <h3>${s.title}</h3>\n                <div class="ellipsis-wrapper"></div>\n            </div>\n            <div class="content__body">\n                <span class="current">${s.timeframes.weekly.current}hrs</span>\n                <span class="previous">Last Week - ${s.timeframes.weekly.previous}hrs</span>\n            </div>\n        </div>\n    </section>\n    `}))}(s,l),function(s,l){null==e||e.addEventListener("click",(function(){null==e||e.classList.add("selected"),null==n||n.classList.remove("selected"),null==t||t.classList.remove("selected");const c=i(s);r[l].innerHTML=`\n    <section class="content-wrapper ${c}">\n        <div class="content">\n            <div class="content__header">\n                <h3>${s.title}</h3>\n                <div class="ellipsis-wrapper"></div>\n            </div>\n            <div class="content__body">\n                <span class="current">${s.timeframes.daily.current}hrs</span>\n                <span class="previous">Last Week - ${s.timeframes.daily.previous}hrs</span>\n            </div>\n        </div>\n    </section>\n    `}))}(s,l),function(s,l){null==n||n.addEventListener("click",(function(){null==e||e.classList.remove("selected"),null==n||n.classList.add("selected"),null==t||t.classList.remove("selected");const c=i(s);r[l].innerHTML=`\n    <section class="content-wrapper ${c}">\n        <div class="content">\n            <div class="content__header">\n                <h3>${s.title}</h3>\n                <div class="ellipsis-wrapper"></div>\n            </div>\n            <div class="content__body">\n                <span class="current">${s.timeframes.weekly.current}hrs</span>\n                <span class="previous">Last Week - ${s.timeframes.weekly.previous}hrs</span>\n            </div>\n        </div>\n    </section>\n    `}))}(s,l),function(s,l){null==t||t.addEventListener("click",(function(){null==e||e.classList.remove("selected"),null==n||n.classList.remove("selected"),null==t||t.classList.add("selected");const c=i(s);r[l].innerHTML=`\n    <section class="content-wrapper ${c}">\n        <div class="content">\n            <div class="content__header">\n                <h3>${s.title}</h3>\n                <div class="ellipsis-wrapper"></div>\n            </div>\n            <div class="content__body">\n                <span class="current">${s.timeframes.monthly.current}hrs</span>\n                <span class="previous">Last Week - ${s.timeframes.monthly.previous}hrs</span>\n            </div>\n        </div>\n    </section>\n    `}))}(s,l)}))})()})();