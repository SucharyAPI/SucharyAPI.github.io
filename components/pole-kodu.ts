// Komponent pola kodu (st.code)

class PoleKodu extends HTMLElement {
    connectedCallback() {
        const zawartosc = this.textContent || '';
        this.innerHTML = `
            <div class="kontener-pola-kodu">
                <pre><code class="tresc-pola">${zawartosc}</code></pre>
                <button class="guzik-kopiuj-pola-kodu"><img src="../assets/ikonka-kopiuj.png"></button>
            </div>
        `;
    }
}

customElements.define('pole-kodu', PoleKodu);