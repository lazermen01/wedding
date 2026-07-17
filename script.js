// --- ТАЙМЕР ЗА СВАТБАТА ---
// Задай датата (Година, Месец (0-11), Ден) - Пример: 20 Май 2028
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
        countdownElement.innerHTML = "<h3>Денят настъпи! Обичаме ви!</h3>";
        return;
    }

    countdownElement.innerHTML = `
        <div class="time-box"><span>${days}</span><p>Дни</p></div>
        <div class="time-box"><span>${hours}</span><p>Часа</p></div>
        <div class="time-box"><span>${minutes}</span><p>Минути</p></div>
        <div class="time-box"><span>${seconds}</span><p>Секунди</p></div>
    `;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- АНИМАЦИИ ПРИ СКРОЛИРАНЕ (Scroll Reveal) ---
function revealElements() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100; // Колко пиксела от елемента трябва да се виждат, за да се покаже

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Слушаме за скролиране от потребителя
window.addEventListener("scroll", revealElements);

// Извикваме функцията веднага, за да се покаже началният екран
revealElements();
