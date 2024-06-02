function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString('ru-RU');
}

function showDateComponents() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.toLocaleString('ru-RU', { month: 'long' });
    let date = today.getDate();
    let day = today.toLocaleString('ru-RU', { weekday: 'long' });

    document.getElementById('year').innerHTML = `Текущий год: ${year}`;
    document.getElementById('month').innerHTML = `Текущий месяц: ${month}`;
    document.getElementById('date').innerHTML = `Текущая дата: ${date}`;
    document.getElementById('day').innerHTML = `День недели: ${day}`;
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

function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1; // Months are 0-based
    let year = document.getElementById('input-year').value;

    if (day && month >= 0 && year) {
        let date = new Date(year, month, day);
        let dayOfWeek = date.toLocaleString('ru-RU', { weekday: 'long' });
        document.getElementById('day-of-week').innerHTML = `День недели: ${dayOfWeek}`;
    } else {
        document.getElementById('day-of-week').innerHTML = `Пожалуйста, введите корректную дату.`;
    }
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    alert(daysCount);
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    if (inputDate.value) {
        let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
        daysCount = Math.floor(daysCount);
        document.getElementById('output').textContent = `Количество дней с даты рождения: ${daysCount}`;
    } else {
        document.getElementById('output').textContent = 'Пожалуйста, введите дату.';
    }
}

function clearFields() {
    document.getElementById('birthdate').value = '';
    document.getElementById('output').textContent = '';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}

function updateClock() {
    const secondHand = document.getElementById('second-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;
  }

  setInterval(showTime, 1000);
  setInterval(updateClock, 1000);
  
