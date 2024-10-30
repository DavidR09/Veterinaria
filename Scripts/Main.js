document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    const body = document.body; 

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            // Obtener el contenido HTML de info-extra de la tarjeta clicada
            const infoExtra = card.querySelector('.info-extra').innerHTML;
            modalText.innerHTML = infoExtra; // Actualizar el contenido del modal
            
            modal.style.display = 'flex'; // Mostrar el modal
            body.classList.add('no-scroll'); // Desactiva el scroll
        });
    });

    // Cierra el modal cuando se hace clic en la 'X'
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('no-scroll'); // Activa el scroll nuevamente
    });

    // Cierra el modal cuando se hace clic fuera de la ventana modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Activa el scroll nuevamente
        }
    });
});
