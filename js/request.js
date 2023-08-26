const TOKEN = "6324243558:AAGbrEawlf-_VaoctbUslEi4eKB9xWk8vV8";
const CHAT_ID = "-1001914674461";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const requestHasBeenSent = document.querySelector('.request-has-been-sent');

document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Запрос с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value }\n`;
    message += `<b>Почта: </b> ${ this.email.value }\n`;
    message += `<b>Сообщение: </b> ${ this.message.value }\n`;
    message += `${ this.lng.value }`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    });

    requestHasBeenSent.style.transform = "translateX(0)"
    setTimeout(() => requestHasBeenSent.style.transform = "translateX(200%)", 1500)

    this.name.value = "";
    this.email.value = "";
    this.message.value = "";
});