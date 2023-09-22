


const radios = document.querySelectorAll('input[type="radio"]');
const selectedOptions = document.getElementById('selected-options');
const totalPriceElement = document.getElementById('total-price');
const domainInput = document.getElementById('domain1m'); // Добавлено для доменного имени

// Цены для разных параметров
const parameterPrices = {
    turntoggle1m: {},
    os1m: {},
    storage1m: {
        '20gb1m': 78,
        '30gb1m': 117,
        '40gb1m': 156,
        '50gb1m': 195,
        '60gb1m': 234,
    },
    ram1m: {
        '1536mb1m': 234,
        '2048mb1m': 312,
        '2560mb1m': 390,
        '3072mb1m': 468,
        '3584mb1m': 546,
        '4096mb1m': 624,
        '4608mb1m': 702,
        '5120mb1m': 780,
        '5632mb1m': 858,
        '6144mb1m': 936,
    },
    cpu1m: {
        '1cpu1m': 156,
        '2cpu1m': 312,
        '3cpu1m': 468,
        '4cpu1m': 624,
    },
    ipv1m: {
        '1ipv1m': 312,
        '2ipv1m': 624,
        '3ipv1m': 936,
        '4ipv1m': 1248,
    },
    backup1m: {
        'nobackup1m': 0,
        'everyday1m': 500,
        'everyweek1m': 200,
        'everymonth1m': 100,
    },





    // 3 MONTH
    turntoggle3m: {
        // Оставьте цены такими же, как для 1 месяца
    },
    os3m: {
        // Оставьте цены такими же, как для 1 месяца
    },
    storage3m: {
        '20gb3m': 222,
        '30gb3m': 333,
        '40gb3m': 444,
        '50gb3m': 555,
        '60gb3m': 666,
    },
    ram3m: {
        '1536mb3m': 666,
        '2048mb3m': 888,
        '2560mb3m': 1110,
        '3072mb3m': 1332,
        '3584mb3m': 1554,
        '4096mb3m': 1776,
        '4608mb3m': 1998,
        '5120mb3m': 2200,
        '5632mb3m': 2422,
        '6144mb3m': 2644,
    },
    cpu3m: {
        '1cpu3m': 444,
        '2cpu3m': 888,
        '3cpu3m': 1332,
        '4cpu3m': 1776,
    },
    ipv3m: {
        '1ipv3m': 880,
        '2ipv3m': 1760,
        '3ipv3m': 2640,
        '4ipv3m': 3520,
    },
    backup3m: {
        'nobackup3m': 0,
        'everyday3m': 1420,
        'everyweek3m': 570,
        'everymonth3m': 285,
    },




    // 6 MONTH




    turntoggle6m: {

    },
    os6m: {

    },
    storage6m: {
        '20gb6m': 420,
        '30gb6m': 630,
        '40gb6m': 840,
        '50gb6m': 1050,
        '60gb6m': 1260,
    },
    ram6m: {
        '1536mb6m': 1260,
        '2048mb6m': 1680,
        '2560mb6m': 2100,
        '3072mb6m': 2520,
        '3584mb6m': 2940,
        '4096mb6m': 3360,
        '4608mb6m': 3780,
        '5120mb6m': 4200,
        '5632mb6m': 4620,
        '6144mb6m': 5040,
    },
    cpu6m: {
        '1cpu6m': 840,
        '2cpu6m': 1680,
        '3cpu6m': 2520,
        '4cpu6m': 3360,
    },
    ipv6m: {
        '1ipv6m': 1680,
        '2ipv6m': 3360,
        '3ipv6m': 5040,
        '4ipv6m': 6720,
    },
    backup6m: {
        'nobackup6m': 0,
        'everyday6m': 2700,
        'everyweek6m': 1080,
        'everymonth6m': 590,
    },




    //12 MONTH



    turntoggle12m: {

    },
    os12m: {

    },
    storage12m: {
        '20gb12m': 408,
        '30gb12m': 816,
        '40gb12m': 1224,
        '50gb12m': 1632,
        '60gb12m': 2040,
    },
    ram12m: {
        '1536mb12m': 2385,
        '2048mb12m': 3180,
        '2560mb12m': 3975,
        '3072mb12m': 4770,
        '3584mb12m': 5565,
        '4096mb12m': 6360,
        '4608mb12m': 7155,
        '5120mb12m': 7950,
        '5632mb12m': 8745,
        '6144mb12m': 9540,
    },
    cpu12m: {
        '1cpu12m': 1590,
        '2cpu12m': 3180,
        '3cpu12m': 4770,
        '4cpu12m': 6360,
    },
    ipv12m: {
        '1ipv12m': 3180,
        '2ipv12m': 6360,
        '3ipv12m': 9540,
        '4ipv12m': 12720,
    },
    backup12m: {
        'nobackup12m': 0,
        'everyday12m': 5000,
        'everyweek12m': 2000,
        'everymonth12m': 1000,
    },




    // 1 MONTH ADVANCE



    turntoggle1madvance: {},
    os1madvance: {},
    storage1madvance: {
        '40gb1madvance': 156,
        '50gb1madvance': 195,
        '60gb1madvance': 234,
        '70gb1madvance': 273,
        '80gb1madvance': 312,
        '90gb1madvance': 351,
        '100gb1madvance': 390,
    },
    ram1madvance: {
        '2560mb1madvance': 390,
        '3072mb1madvance': 468,
        '3584mb1madvance': 546,
        '4096mb1madvance': 624,
        '4608mb1madvance': 702,
        '5120mb1madvance': 780,
        '5632mb1madvance': 858,
        '6144mb1madvance': 936,
        '6656mb1madvance': 1014,
        '7168mb1madvance': 1092,
        '7680mb1madvance': 1170,
        '8192mb1madvance': 1248,
    },
    cpu1madvance: {
        '2cpu1madvance': 312,
        '3cpu1madvance': 468,
        '4cpu1madvance': 624,
        '5cpu1madvance': 780,
        '6cpu1madvance': 936,
    },
    ipv1madvance: {
        '1ipv1madvance': 312,
        '2ipv1madvance': 624,
        '3ipv1madvance': 936,
        '4ipv1madvance': 1248,
        '5ipv1madvance': 1560,
        '6ipv1madvance': 1872,
    },
    backup1madvance: {
        'nobackup1madvance': 0,
        'everyday1madvance': 600,
        'everyweek1madvance': 250,
        'everymonth1madvance': 150,
    },

};

// Обновленная функция для вычисления общей цены
function calculateTotalPrice() {
    const selectedOptionsList = [];
    let totalPrice = 0;
    let selectedTurntoggle = '';
    let selectedOs = '';
    let domainName = '';

    radios.forEach(radio => {
        if (radio.checked) {
            const name = radio.name;
            const id = radio.id;
            const price = parameterPrices[name][id] || 0;

            if (name === 'turntoggle1m') {
                selectedTurntoggle = `${document.querySelector(`label[for="${id}"]`).textContent}`;
            } else if (name === 'os1m') {
                selectedOs = `${document.querySelector(`label[for="${id}"]`).textContent}`;
            } else if (name === 'domain1m') {
                domainName = domainInput.value;
            } else if (price > 0) {
                totalPrice += price;
                selectedOptionsList.push(`${document.querySelector(`label[for="${id}"]`).textContent}: ${price.toLocaleString('en-US', { style: 'currency', currency: 'KGS' })}`);
            }
        }
    });

    if (selectedTurntoggle !== '') {
        selectedOptionsList.push(`Автопродление: ${selectedTurntoggle}`);
    }
    if (selectedOs !== '') {
        selectedOptionsList.push(`Операционная система: ${selectedOs}`);
    }
    if (domainName !== '') {
        selectedOptionsList.push(`Доменное имя: ${domainName}`);
    }

    // Добавляем <hr> после каждого элемента <li>
    selectedOptions.innerHTML = selectedOptionsList.map(option => `<li>${option}</li><hr>`).join('');
    totalPriceElement.textContent = totalPrice > 0 ? totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'KGS' }) : '';
}

// Обработчик события изменения радиокнопки
function handleRadioChange() {
    calculateTotalPrice();
}

// Добавляем слушатель события change ко всем радиокнопкам
radios.forEach(radio => {
    radio.addEventListener('change', handleRadioChange);
});

// Добавляем слушатель события input для поля доменного имени
domainInput.addEventListener('input', handleRadioChange);

// Вызываем функцию для вычисления и отображения общей цены при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    calculateTotalPrice();
});

