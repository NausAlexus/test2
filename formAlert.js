    // Получаем элемент формы по идентификатору
    const form = document.getElementById('promoAuthForm');

    // Добавляем обработчик события 'submit' к форме
    form.addEventListener('submit', function(event) {
        // Отключаем стандартное поведение формы (отправку)
        event.preventDefault();
        
        // Здесь можно добавить любую логику перед отправкой формы
        alert('The operation was completed successfully!');

        // Если вы хотите отправить форму после отображения алерта, вы можете сделать следующее:
        // form.submit();
    });