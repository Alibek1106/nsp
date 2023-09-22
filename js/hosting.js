const buttons = document.querySelectorAll('.payment-dates');
const serverBoxes = document.querySelectorAll('.payment-box');
const prices = [
    [780, 1150, 1840],
    [2220, 3270, 5240],
    [4200, 6200, 9930],
    [7950, 11730, 18760]
];

let selectedPeriodIndex = 0; // Добавляем переменную для хранения индекса выбранного периода
let selectedServerType = 'simple'; // Добавляем переменную для хранения выбранного типа сервера

buttons.forEach((button, periodIndex) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('payment-date-active');
        });
        button.classList.add('payment-date-active');

        selectedPeriodIndex = periodIndex; // Обновляем индекс выбранного периода

        updateServerLinks(selectedServerType, selectedPeriodIndex);
    });
});

serverBoxes.forEach((serverBox) => {
    serverBox.addEventListener('click', () => {
        serverBoxes.forEach(box => {
            box.classList.remove('payment-box-active');
        });
        serverBox.classList.add('payment-box-active');

        const serverType = serverBox.querySelector('h3').textContent.toLowerCase();
        selectedServerType = serverType; // Обновляем выбранный тип сервера

        updateServerLinks(selectedServerType, selectedPeriodIndex);
    });
});

function updateServerLinks(serverType, periodIndex) {
    const serverTypeToPath = {
        simple: 'simple',
        advance: 'advance',
        corporate: 'corporate'
    };

    serverBoxes.forEach(serverBox => {
        const link = serverBox.querySelector('a');
        if (periodIndex >= 0 && periodIndex <= 3) {
            link.href = `services-details-directions/services-details-${serverType}-${[1, 3, 6, 12][periodIndex]}m-server.html`;
        } else {
            if (serverType === 'simple') {
                link.href = `services-details-directions/services-details-${serverType}-1m-server.html`;
            } else {
                link.removeAttribute('href');
            }
        }
    });
}

// Инициализация при загрузке страницы
updateServerLinks(selectedServerType, selectedPeriodIndex);
