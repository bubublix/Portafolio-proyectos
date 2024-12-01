var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('idk')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>idk</strong>')
    .pauseFor(2500)
    .start();

    var app = document.getElementById('proyectos');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Portafolio by Dannah')
    .pauseFor(2500)
    .deleteAll()
    .start();

    // index themes

    document.addEventListener('DOMContentLoaded', () => {
        const themeButtons = document.querySelectorAll('.dropdown-item');

        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedTheme = button.getAttribute('data-bs-theme-value');

                // Cambia el tema del body
                document.body.setAttribute('data-bs-theme', selectedTheme);

                // Actualiza el texto del botón principal
                const themeText = document.getElementById('bd-theme-text');
                themeText.textContent = `Toggle theme (${selectedTheme})`;

                // Actualiza la clase activa en los botones
                themeButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-bs-theme-value') === selectedTheme) {
                        btn.classList.add('active');
                    }
                });
            });
        });
    });