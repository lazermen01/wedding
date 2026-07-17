// Задай датата на сватбата тук (Година, Месец (от 0 до 11), Ден)
// Пример: 20 Май 2028 -> (2028, 4, 20)
const weddingDate = new Date(2028, 4, 20, 16, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (distance < 0) {
        countdownElement.innerHTML = "<h3>Денят настъпи!</h3>";
        return;
    }

    countdownElement.innerHTML = `
        <div class="time-box"><span>${days}</span><p>Дни</p></div>
        <div class="time-box"><span>${hours}</span><p>Часа</p></div>
        <div class="time-box"><span>${minutes}</span><p>Минути</p></div>
        <div class="time-box"><span>${seconds}</span><p>Секунди</p></div>
    `;
}

// Обновяване на таймера всяка секунда
setInterval(updateCountdown, 1000);
updateCountdown();
