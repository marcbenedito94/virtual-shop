var article = document.getElementById('article');

getInfoLincsJsonByLang();

function printArticle(array) {
    var out_article = '';
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