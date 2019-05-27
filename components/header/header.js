var header = document.getElementById('header'); //get the div with ID 'header'

var user_logged = localStorage.getItem('user'); //get the current logged user

var login_link_text = ''; //will be 'login' or the current user
var current_language = ''; //current language of the web

var header_out_content = `
        <img id="header-img" src="./img/header.jpg" alt="Header Image">
        <a id="login-link" href="./main/login/login.html">` + textHeaderLoginLink() + `</a>
        <a id="logout-link" class="` + showHideLogoutLink() + `" onclick="` + logout() + `" href="./index.html">logout</a>
        <a id="link-lang-es" class="link-lang" href="#" onclick="setLanguageToSpanish()">es</a>
        <a id="link-lang-en" class="link-lang" href="#" onclick="setLanguageToEnglish()">en</a>`;

//change language of the web to Spanish
function setLanguageToSpanish() {
    current_language = 'es';
    getLincsJsonByLang(); //function of functions.js

    var current_location = window.location.pathname;

    if (current_location == '/joel/index.html' || current_location == '/joel/index.html#') {
        current_language = 'es';
        getInfoLincsJsonByLang();
    }
}

//change language of the web to Spanish
function setLanguageToEnglish() {
    current_language = 'en';
    getLincsJsonByLang(); //function of functions.js

    var current_location = window.location.pathname;

    if (current_location == '/joel/index.html' || current_location == '/joel/index.html#') {
        current_language = 'en';
        getInfoLincsJsonByLang();
    }
}

//set text of login_link
function textHeaderLoginLink() {
    if (user_logged) {
        return user_logged;
    } else {
        return 'Login';
    }
}

//show or hide logout link
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