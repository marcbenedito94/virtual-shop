var header = document.getElementById('header');

var user_logged = localStorage.getItem('user');

var login_link_text = '';
var current_language = '';

var header_out_content = `
        <img id="header-img" src="" alt="Header Image">
        <a id="login-link" href="./main/login/login.html">` + textHeaderLoginLink() + `</a>
        <a id="logout-link" class="` + showHideLogoutLink() + `" onclick="` + logout() + `" href="./index.html">logout</a>
        <a id="link-lang-es" class="link-lang" href="#" onclick="setLanguageToSpanish()">es</a>
        <a id="link-lang-en" class="link-lang" href="#" onclick="setLanguageToEnglish()">en</a>`;

function setLanguageToSpanish() {
    current_language = 'es';
    getLincsJsonByLang();

    var current_location = window.location.pathname;

    if (current_location == '/joel/index.html' || current_location == '/joel/index.html#') {
        current_language = 'es';
        getInfoLincsJsonByLang();
    }
}

function setLanguageToEnglish() {
    current_language = 'en';
    getLincsJsonByLang();

    var current_location = window.location.pathname;

    if (current_location == '/joel/index.html' || current_location == '/joel/index.html#') {
        current_language = 'en';
        getInfoLincsJsonByLang();
    }
}

function textHeaderLoginLink() {
    if (user_logged) {
        return user_logged;
    } else {
        return 'Login';
    }
}

function showHideLogoutLink() {
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