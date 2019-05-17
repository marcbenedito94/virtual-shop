function getJsonByLang() {
    if (!current_language || current_language == undefined) {
        var url = './data/lincs-' + default_language + '.json';

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    
    if ((current_language && current_language !== undefined && current_language !== '') && default_language !== current_language) {
        var url = './data/lincs-' + current_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    
    if (default_language == current_language) {
        var url = './data/lincs-' + default_language + '.json';
    
        var xmlhttp = new XMLHttpRequest();
    
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objects = JSON.parse(this.responseText);
                printNav(objects);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}