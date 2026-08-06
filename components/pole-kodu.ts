// Komponent pola kodu (st.code)

class PoleKodu extends HTMLElement {
    connectedCallback() {
        const zawartosc = this.textContent || '';
        this.innerHTML = `
            <div class="kontener-pola-kodu">
                <pre><code class="tresc-pola">${zawartosc}</code></pre>
                <button class="guzik-kopiuj-pola-kodu"><img src="../assets/ikonka-kopiuj.svg"></button>
            </div>
        `;
        const guzik = this.querySelector('.guzik-kopiuj-pola-kodu');
        guzik?.addEventListener('click', () => this.skopiujTresc());
    }

    private async skopiujTresc(): Promise<void> {
        const tekst = this.querySelector('.tresc-pola')?.textContent || '';
        await navigator.clipboard.writeText(tekst);

        const obrazek = this.querySelector('.guzik-kopiuj-pola-kodu img') as HTMLImageElement;
        if (obrazek) {
            obrazek.src = "../assets/ikonka-ptaszek.svg";
            obrazek.classList.add('efekt-skopiowano');
            setTimeout(() => {
                obrazek.src = "../assets/ikonka-kopiuj.svg";
                obrazek.classList.remove('efekt-skopiowano');
            }, 1500)
        }
    }
}

customElements.define('pole-kodu', PoleKodu);