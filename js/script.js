function playSong(id) {
    // Заміни на реальний ID відео з твого каналу, наприклад 'dQw4w9WgXcQ' для тесту
    window.open('https://www.youtube.com/watch?v=' + (id === 'kolobok-song' ? 'твій-video-id' : id), '_blank');
}
function colorPage(num) {
    alert(`Розмальовуємо етап ${num}! Обери кольори: золотий для Колобка, зелений для лісу. (Додамо Canvas для малювання пізніше!) 🎨`);
}
function buyDigital() { alert('Перехід до оплати PDF! (Додай Stripe/Gumroad посилання.)'); }
function buyPrint() { alert('Замовлення друку! (Форма Google або Etsy.)'); }
