// Plik Typescript dla strony kontaktowej

import { renderujNavbar } from "../components/navbar";

renderujNavbar();

const formularzKontaktowy = document.getElementById('formularz-kontaktowy') as HTMLFormElement | null;

if (formularzKontaktowy) {
    const przyciskWyslij = formularzKontaktowy.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    formularzKontaktowy.addEventListener('submit', async (zdarzenie: SubmitEvent) => {
        zdarzenie.preventDefault();

        if (!przyciskWyslij) return;

        const daneFormularza = new FormData(formularzKontaktowy);
        daneFormularza.append("access_key", "270ff6dd-70f7-4118-bdb3-7be13025ecd0");

        const pierwotnyTekstPrzycisku = przyciskWyslij.textContent;

        przyciskWyslij.textContent = "Wysyłanie...";
        przyciskWyslij.disabled = true;

        try {
            const odpowiedz = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: daneFormularza
            });

            const dane = await odpowiedz.json();

            if (odpowiedz.ok) {
                alert("Sukces! Twoja wiadomość została wysłana.");
                formularzKontaktowy.reset();
            } else {
                alert("Błąd: " + dane.message);
            }

        } catch (blad) {
            alert("Coś poszło nie tak. Spróbuj ponownie później.");
        } finally {
            przyciskWyslij.textContent = pierwotnyTekstPrzycisku;
            przyciskWyslij.disabled = false;
        }
    });
}