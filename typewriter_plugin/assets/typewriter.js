/* empty css     */!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const t={delay:300,wait:1500,stand:1500};const e="undefined"==typeof userSettings||void 0===userSettings?t:{...t,...userSettings};new class{constructor({delay:t,wait:e,stand:s,alternativeCode:i}){this.settings={delay:t,wait:e,stand:s,alternativeCode:i},this.h1=document.querySelector("h1"),this.titleText=""===this.h1.textContent?document.title:this.h1.textContent,this.alternativeText,this.textArray,this.sound={type:new Audio("sound/type.mp3"),return:new Audio("sound/return.mp3")},this.screen=document.createElement("div"),this.paragraph=document.createElement("p"),this.subtitle=document.createElement("p"),this._runAll()}_getSubtitleFontSize(){const{width:t,height:e}=this.screen.getBoundingClientRect(),s=Math.floor(.7*t/this.textArray.length),i=Math.ceil(this.textArray.length/10),n=Math.floor(s*i*.9);return n>.7*e?Math.floor(.7*e)+"px":n+"px"}_getInside(){return this.settings.alternativeCode?this.settings.alternativeCode:""!==this.h1.textContent?this.h1.innerHTML:document.title}_init(){this.alternativeText=this.settings.alternativeCode?.replaceAll("<span>","").replaceAll("</span>","").split(""),this.textArray=this.settings.alternativeCode?this.alternativeText:this.titleText.split(""),this.screen.classList.add("screen"),this.paragraph.classList.add("character"),this.subtitle.classList.add("subtitle"),this.screen.appendChild(this.paragraph),document.body.appendChild(this.screen),this.subtitle.style.fontSize=this._getSubtitleFontSize(),this.subtitle.innerHTML=this._getInside(),this.sound.type.volume=.3}_showChar(t){return new Promise((e=>{this.sound.type.currentTime=0,this.sound.type.play(),setTimeout((()=>{this.paragraph.textContent=t,e("show char")}),this.settings.delay)}))}async _showSingleCharacter(){for(const t of this.textArray)await this._showChar(t)}_removeParagraph(){return new Promise((t=>{setTimeout((()=>{this.screen.removeChild(this.paragraph),this.sound.return.play(),t("remove paragraph")}),this.settings.delay)}))}_showSubtitle(){return new Promise((t=>{setTimeout((()=>{this.screen.appendChild(this.subtitle),t("show subtitle")}),this.settings.wait)}))}_removeScreen(){setTimeout((()=>{document.body.removeChild(this.screen)}),this.settings.delay*this.textArray.length+this.settings.stand)}async _runAll(){this._init();const t=document.createElement("p");t.classList.add("attention"),t.innerHTML='注意：音が出ます<br><span>クリックでスタート</span><span class="credit">効果音提供： オトロジック様</span>',this.screen.appendChild(t),this.screen.addEventListener("click",(async()=>{this.screen.removeChild(t),await this._showSingleCharacter(),await this._removeParagraph(),await this._showSubtitle(),await this._removeScreen()}))}}(e);
