import{t as e}from"./navbar-B0BNu5GW.js";var t=class extends HTMLElement{connectedCallback(){let e=this.textContent||``;this.innerHTML=`
            <div class="kontener-pola-kodu">
                <pre><code class="tresc-pola">${e}</code></pre>
                <button class="guzik-kopiuj-pola-kodu"><img src="../ikonka-kopiuj.svg"></button>
            </div>
        `,this.querySelector(`.guzik-kopiuj-pola-kodu`)?.addEventListener(`click`,()=>this.skopiujTresc())}async skopiujTresc(){let e=this.querySelector(`.tresc-pola`)?.textContent||``;await navigator.clipboard.writeText(e);let t=this.querySelector(`.guzik-kopiuj-pola-kodu img`);t&&(t.src=`../ikonka-ptaszek.svg`,t.classList.add(`efekt-skopiowano`),setTimeout(()=>{t.src=`../ikonka-kopiuj.svg`,t.classList.remove(`efekt-skopiowano`)},1500))}};customElements.define(`pole-kodu`,t),e();
