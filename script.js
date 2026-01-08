document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los botones con la clase "accordion"
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // 1. Alternar la clase "active" (para rotar la flecha y cambiar color)
            this.classList.toggle('active');

            // 2. Seleccionar el panel asociado (el siguiente elemento hermano)
            const panel = this.nextElementSibling;

            // 3. Lógica de apertura/cierre
            if (panel.style.maxHeight) {
                // Si ya tiene altura, lo cerramos
                panel.style.maxHeight = null;
                panel.classList.remove('show'); // (Opcional, si usas opacidad)
            } else {
                // Si está cerrado, le damos la altura exacta de su contenido
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add('show'); // (Opcional, si usas opacidad)
            }
        });
    });
});