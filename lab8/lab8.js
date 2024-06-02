function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString('ru-RU');
}

function showLocaleDates() {
    let localesDates = document.getElementById('locales-dates');
    let today = new Date();
    let locales = [
        { locale: 'en-US', country: 'United States' },
        { locale: 'fr-FR', country: 'France' },
        { locale: 'de-DE', country: 'Germany' },
        { locale: 'zh-CN', country: 'China' },
        { locale: 'ja-JP', country: 'Japan' },
        { locale: 'es-ES', country: 'Spain' }
    ];

    let output = '';
    locales.forEach(function(localeInfo) {
        let formattedDate = today.toLocaleString(localeInfo.locale);
        output += `<p>${localeInfo.country} (${localeInfo.locale}): ${formattedDate}</p>`;
    });

    localesDates.innerHTML = output;
}
