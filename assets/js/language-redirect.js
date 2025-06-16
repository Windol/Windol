// Language detection and redirect script
(function () {
    // Only run on the profile page
    if (!window.location.pathname.includes('/profile')) {
        return;
    }

    // Get browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // Get primary language code (e.g., 'pt' from 'pt-BR')

    // Current path without language suffix
    const basePath = window.location.pathname.replace(/\/(en|pt)$/, '');

    // If we're on the base profile page
    if (window.location.pathname === basePath) {
        // Redirect based on language
        if (langCode === 'pt') {
            // Redirect to Portuguese version
            window.location.href = basePath + '/pt';
        } else {
            // Already on English version, no need to redirect
            return;
        }
    }
    // If we're on the English version
    else if (window.location.pathname === basePath + '/pt') {
        // Redirect to Portuguese if browser language is Portuguese
        if (langCode !== 'pt') {
            window.location.href = basePath;
        }
    }
})();
