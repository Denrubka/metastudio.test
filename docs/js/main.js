(()=>{"use strict";var e=[,(e,t,r)=>{function n(e){document.querySelectorAll(e).forEach((function(e){e.addEventListener("click",(function(e){var t=e.target,r=t.closest(".form__label").querySelector(".form__input");t.classList.contains("form__label-switcher--active")?(t.classList.remove("form__label-switcher--active"),r.setAttribute("type","password")):(t.classList.add("form__label-switcher--active"),r.setAttribute("type","text"))}))}))}r.r(t),r.d(t,{default:()=>n})},(e,t,r)=>{function n(e){document.querySelectorAll(e).forEach((function(e){var t=e.querySelector("input"),r=e.querySelector(".form__label-title");t.addEventListener("input",(function(){t.value?r.classList.add("form__label-title--active"):r.classList.remove("form__label-title--active")})),t.addEventListener("blur",(function(){t.value.length||r.classList.remove("form__label-title--active")}))}))}r.r(t),r.d(t,{default:()=>n})},(e,t,r)=>{function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___ __ __",r=document.querySelectorAll(e);function l(e){var r=e.keyCode,n=t,l=n.replace(/\D/g,""),o=this.value.replace(/\D/g,"");console.log(n);var a=0,i=n.replace(/[_\d]/g,(function(e){return a<o.length?o.charAt(a++)||l.charAt(a):e}));-1!==(a=i.indexOf("_"))&&(i=i.slice(0,a));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=i),"blur"===e.type&&this.value.length<5&&(this.value="")}var o,a=n(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.addEventListener("input",l),i.addEventListener("focus",l),i.addEventListener("blur",l)}}catch(e){a.e(e)}finally{a.f()}}r.r(t),r.d(t,{default:()=>o})},(e,t,r)=>{function n(e){if("index"===e&&localStorage.getItem("login")){var t=document.querySelector(".wrapper"),r=localStorage.getItem("login");t.innerHTML='\n      <h2 class="wrapper__title">Здравствуйте, '.concat(r,'</h2>\n        <a href="index.html" class="btn btn-logout">Выйти</a>\n    ')}else if("index"===e&&!localStorage.getItem("login")){document.querySelector(".wrapper").innerHTML='\n      <h2 class="wrapper__title">Главная</h2>\n        <a href="signup.html" class="btn">Зарегистрироваться</a>\n    '}}r.r(t),r.d(t,{default:()=>n})},(e,t,r)=>{function n(){var e=document.getElementById("email"),t=e.value,r=e.closest(".form__label").querySelector(".form__label-error"),n=/^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i.test(t);return n?(r.textContent="",localStorage.setItem("email",t)):r.textContent="Адрес почты введен не верно!",n}function l(){var e=document.getElementById("phone"),t=e.value,r=e.closest(".form__label").querySelector(".form__label-error"),n=/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(t.replace(" ","").replace(" ","").replace(" ","").replace(" ","").replace("(","").replace(")","").replace("+",""));if(n)return r.textContent="",localStorage.setItem("phone",t),n;r.textContent="Номер телефона введен не верно!"}function o(){var e=document.getElementById("login"),t=e.value,r=e.closest(".form__label").querySelector(".form__label-error"),n=/^\s*(\w+)\s*$/.test(t);return t.length>=6&&n?(r.textContent="",localStorage.setItem("login",t)):r.textContent="Логин должен быть не менее 6 символов на латинице без пробелов",n}function a(){var e=document.getElementById("password"),t=e.value,r=e.closest(".form__label").querySelector(".form__label-error"),n=/^\s*(\w+)\s*$/.test(t);return t.length>=6&&n?(r.textContent="",localStorage.setItem("password",t)):r.textContent="Пароль должен быть не менее 8 символов на латинице без пробелов",n}function i(){var e=document.getElementById("password-repeat"),t=e.closest(".form__label").querySelector(".form__label-error"),r=document.getElementById("password").value===e.value;if(r)return t.textContent="",r;t.textContent="Пароли не совпадают"}r.r(t),r.d(t,{validLogin:()=>o,validMail:()=>n,validPassword:()=>a,validPasswordRepeat:()=>i,validPhone:()=>l})}],t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n);var e=r(1),t=r(2),l=r(3),o=r(4),a=r(5),i=window.location.pathname.replace("/","").replace(".html",""),c=window.location.host;document.addEventListener("DOMContentLoaded",(function(){"signup"===i&&document.querySelector(".btn-signup").addEventListener("click",(function(){var e=(0,a.validLogin)(),t=(0,a.validMail)(),r=(0,a.validPhone)(),n=(0,a.validPassword)(),l=(0,a.validPasswordRepeat)();e&&t&&r&&n&&l&&(window.location.href="http://"+c+"/index.html",(0,o.default)(i))}));if("index"===i&&localStorage.getItem("login")){var e=document.querySelector(".btn-logout");console.log(e),e.addEventListener("click",(function(){localStorage.clear(),window.location.href="http://"+c+"/index.html",(0,o.default)(i)}))}})),(0,o.default)(i),(0,l.default)("#phone"),(0,e.default)(".form__label-switcher"),(0,t.default)(".form__label")})()})();