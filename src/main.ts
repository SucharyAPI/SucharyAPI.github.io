const guzikGH: any = document.getElementById("github") as HTMLElement;
const guzikForms: any = document.getElementById("forms") as HTMLElement;

function otworzLink(link: string): void {
    window.location.href = link;
}

guzikGH?.addEventListener('click', (): void => {otworzLink('https://github.com/SucharyAPI/spolecznosc/issues/new?template=zglos-suchara.yml')})
guzikForms?.addEventListener('click', (): void => {otworzLink('https://forms.gle/Ne8BKGWsoSdFiYLh8')})