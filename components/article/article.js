var article = document.getElementById('article');
var out_article = '';

var xmlhttp = new XMLHttpRequest();
var url = './data/infoLincs-es.json';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var objects = JSON.parse(this.responseText);
        printArticle(objects);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticle(array) {
    out_article += '<table id="article-table">';
    out_article += '<tr>';

    for (var index = 0; index < array.length; index ++) {
        out_article += '<td id="' + array[index].id + '-main" class="article-table-celda">';
        out_article += '<a href="#">' + array[index].title + '</a><br/>';
        out_article += '<a href="#">' + array[index].title + '</a>';
        out_article += '</td>';
    }

    out_article += '</tr>';
    out_article += '</table>';

    article.innerHTML = out_article;
}