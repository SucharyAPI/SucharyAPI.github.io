// Plik Typescript dla strony zgłoszenia

import { renderujNavbar } from "../components/navbar";

renderujNavbar();

const guzikGH = document.querySelector<HTMLButtonElement>('#github');
const guzikForms = document.querySelector<HTMLButtonElement>('#forms');

function otworzLink(link: string): void {
    window.location.href = link;
}

guzikGH?.addEventListener('click', (): void => {otworzLink('https://github.com/SucharyAPI/spolecznosc/issues/new?template=zglos-suchara.yml')})
guzikForms?.addEventListener('click', (): void => {otworzLink('https://forms.gle/Ne8BKGWsoSdFiYLh8')})