function getLincsJsonByLang() {
    if (!current_language || current_language == undefined) {
        var url_lincs = './data/lincs-' + default_language + '.json';

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url_lincs, true);
        xmlhttp.send();
    }
    
    if ((current_language && current_language !== undefined && current_language !== '') && default_language !== current_language) {
        var url_lincs = './data/lincs-' + current_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url_lincs, true);
        xmlhttp.send();
    }
    
    if (default_language == current_language) {
        var url_lincs = './data/lincs-' + default_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url_lincs, true);
        xmlhttp.send();
    }
}

function getInfoLincsJsonByLang() {
    if (!current_language || current_language == undefined) {
        var url_infoLincs = './data/infoLincs-' + default_language + '.json';

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printFooter(objects);
            }
        };
        xmlhttp.open("GET", url_infoLincs, true);
        xmlhttp.send();
    }
    
    if ((current_language && current_language !== undefined && current_language !== '') && default_language !== current_language) {
        var url_infoLincs = './data/infoLincs-' + current_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printFooter(objects);
            }
        };
        xmlhttp.open("GET", url_infoLincs, true);
        xmlhttp.send();
    }
    
    if (default_language == current_language) {
        var url_infoLincs = './data/infoLincs-' + default_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printFooter(objects);
            }
        };
        xmlhttp.open("GET", url_infoLincs, true);
        xmlhttp.send();
    }
}