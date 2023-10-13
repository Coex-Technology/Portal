const darkThemeBtn = document.getElementById('dark-theme-btn');
        const lightThemeBtn = document.getElementById('light-theme-btn');

        // Función para habilitar el tema oscuro
        function enableDarkTheme() {
            document.body.classList.add('dark-theme');
        }

        // Función para habilitar el tema claro
        function enableLightTheme() {
            document.body.classList.remove('dark-theme');
        }

        darkThemeBtn.addEventListener('click', enableDarkTheme);
        lightThemeBtn.addEventListener('click', enableLightTheme);