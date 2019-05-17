var header = document.getElementById('header');

var user_logged = localStorage.getItem('user');

var login_link_text = '';
var current_language = '';

var header_out_content = `
        <img id="header-img" src="" alt="Header Image">
        <a id="login-link" href="./main/login/login.html">` + text_header_login_link() + `</a>
        <a id="logout-link" class="` + show_hide_logout_link() + `" onclick="` + logout() + `" href="./index.html">logout</a>
        <a id="link-lang-es" class="link-lang" href="#" onclick="setLanguageToSpanish()">es</a>
        <a id="link-lang-en" class="link-lang" href="#" onclick="setLanguageToEnglish()">en</a>`;

function setLanguageToSpanish() {
    current_language = 'es';
    getJsonByLang();
}

function setLanguageToEnglish() {
    current_language = 'en';
    getJsonByLang();
}

function text_header_login_link() {
    if (user_logged) {
        return user_logged;
    } else {
        return 'Login';
    }
}

function show_hide_logout_link() {
    if (user_logged) {
        return 'logout-link-inline';
    } else {
        return 'logout-link-hidden';
    }
}

function logout() {
    localStorage.removeItem('user');
}

header.innerHTML = header_out_content;

// getJsonByLang();