(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){document.body.insertAdjacentHTML(`afterbegin`,`
        <header>
            <div class="nazwa-suchary">
                <h1 class="nazwa-teksty tekst-suchary">SucharyAPI</h1>
                <p class="nazwa-teksty">Ogólnopolska baza żartów</p>
            </div>
            <nav>
                <a href="/" class="navbar-guziki">Główna</a>
                <a href="/szybki-start/" class="navbar-guziki">Szybki start</a>
                <a href="/zglos/" class="navbar-guziki">Zgłoś kawał</a>
                <a href="/kontakt/" class="navbar-guziki">Kontakt</a>
            </nav>
        </header>
    `)}export{e as t};