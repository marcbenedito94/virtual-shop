var navBottom = document.getElementById('navBottom');
var out_navBottom = '';

var xmlhttp = new XMLHttpRequest();
var url = './data/lincs.json';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var objects = JSON.parse(this.responseText);
        printArticle(objects);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticle(array) {
    out_navBottom += '<table id="article">';
    out_navBottom += '<tr>';

    for (var index = 0; index < array.length; index ++) {
        out_navBottom += '<td id="' + array[index].id + '-main" class="article-table-celda">';
        out_navBottom += '<a href="#">' + array[index].title + '</a><br/>';
        out_navBottom += '<a href="#">' + array[index].title + '</a>';
        out_navBottom += '</td>';
    }

    out_navBottom += '</tr>';
    out_navBottom += '</table>';

    navBottom.innerHTML = out_navBottom;
}