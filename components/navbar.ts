// Komponent navbaru

// @ts-ignore: CSS side-effect import declaration
import './navbar.css';

export function renderujNavbar(): void {
    const szablonNavbaru = `
        <header>
            <div class="nazwa-suchary">
                <h1 class="nazwa-teksty tekst-suchary">SucharyAPI</h1>
                <p class="nazwa-teksty">Ogólnopolska baza żartów</p>
            </div>
            <nav>
                <a href="/" class="navbar-guziki">Główna</a>
                <a href="/zglos/" class="navbar-guziki">Zgłoś kawał</a>
                <a href="/o-nas/" class="navbar-guziki">O nas</a>
                <a href="/kontakt/" class="navbar-guziki">Kontakt</a>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', szablonNavbaru);
}