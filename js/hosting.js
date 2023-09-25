const buttons = document.querySelectorAll('.payment-dates');
const serverBoxes = document.querySelectorAll('.payment-box');

// Объект с ценами для каждого периода и типа сервера
const prices = {
    1: {
        simple: 780,
        advance: 1150,
        corporate: 1840
    },
    3: {
        simple: 2220,
        advance: 3270,
        corporate: 5240
    },
    6: {
        simple: 4200,
        advance: 6200,
        corporate: 9930
    },
    12: {
        simple: 7950,
        advance: 11730,
        corporate: 18760
    }
};

// Инициализация начальных значений
let selectedPeriod = 1; // По умолчанию 1 месяц

// Установка класса payment-date-active для выбранного элемента
buttons.forEach((button) => {
    if (button.querySelector('button').classList.contains('payment-date-active')) {
        selectedPeriod = parseInt(button.dataset.period, 10);
    }
});

// Инициализация при загрузке страницы
updateServerLinks(selectedPeriod);
updatePrice(selectedPeriod);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.querySelector('button').classList.remove('payment-date-active');
        });
        button.querySelector('button').classList.add('payment-date-active');

        selectedPeriod = parseInt(button.dataset.period, 10); // Извлекаем выбранный период

        updateServerLinks(selectedPeriod);
        updatePrice(selectedPeriod);
    });
});

serverBoxes.forEach((serverBox) => {
    serverBox.addEventListener('click', () => {
        serverBoxes.forEach(box => {
            box.classList.remove('payment-box-active');
        });
        serverBox.classList.add('payment-box-active');
    });
});

function updateServerLinks(period) {
    serverBoxes.forEach(serverBox => {
        const link = serverBox.querySelector('a');
        if (period >= 1 && period <= 12) {
            const serverType = serverBox.querySelector('h3').textContent.toLowerCase();
            link.href = `services-details-directions/services-details-${serverType}-${period}m-server.html`;
        } else {
            link.removeAttribute('href');
        }
    });
}

function updatePrice(period) {
    // Получите все элементы .price, чтобы обновить цену
    const priceElements = document.querySelectorAll('.price');

    // Обновите текст в элементах .price с новой ценой
    priceElements.forEach(priceElement => {
        const serverType = priceElement.getAttribute('data-type');
        if (prices[period] && prices[period][serverType] !== undefined) {
            priceElement.textContent = `KGS ${prices[period][serverType].toFixed(2)}`;
        } else {
            // Если цена не найдена, выведите сообщение об ошибке
            console.error(`Цена для периода ${period} и типа сервера ${serverType || 'не указан'} не найдена.`);
        }
    });
}
