let userName = prompt("Lütfen isminizi girin:");

const startDate = new Date();

const greeting = document.getElementById('greeting');
greeting.innerHTML = `Merhaba ${userName}! Hoş Geldin.`;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function updateCounter() {
    const now = new Date();
    const elapsed = new Date(now - startDate);

    const minutes = String(Math.floor(elapsed / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');

    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayName = daysOfWeek[now.getDay()];

    const counter = document.getElementById('counter');
    counter.innerHTML = `${minutes}:${seconds} ${dayName} tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.`;

    document.body.style.color = getRandomColor();
}

setInterval(updateCounter, 1000);