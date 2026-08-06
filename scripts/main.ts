// Plik Typescript dla strony głównej

import { renderujNavbar } from '../components/navbar';
import { ConnectionError, dajKawal, HTTPError, SucharyError, TimeoutError } from 'sucharyjs';

renderujNavbar();

const guzikLosuj = document.querySelector<HTMLButtonElement>('#guzik-losowania');
const poleKawalu = document.querySelector<HTMLElement>('#pole-kawalu');

guzikLosuj?.addEventListener('click', obsluzKawal);

// Funkcja losowania kawału
async function losuj(): Promise<string> {
    try {
        const suchar = await dajKawal();
        return suchar;
    } catch (e: SucharyError | unknown) {
        if (e instanceof HTTPError) {
            return "Błąd serwera! Przepraszamy :(";
        } else if (e instanceof TimeoutError) {
            return "Wygląda na to że zbyt wiele osób chce się pośmiać. Spróbuj ponownie później :(";
        } else if (e instanceof ConnectionError) {
            return "Błąd połączenia! :( Sprawdź swój internet";
        } else {
            return "Błąd! Przepraszamy :(";
        };
    };
};

// Funkcja obsługi podmiany tekstu
async function obsluzKawal(): Promise<void> {
    if (!poleKawalu) return;
    poleKawalu.style.color = "black";
    poleKawalu.textContent = "Losowanie...";
    const tekst = await losuj();
    if (tekst.includes(":(")) {
        poleKawalu.style.color = "red";
    } else {
        poleKawalu.style.color = "black";
    };
    poleKawalu.textContent = tekst;
};