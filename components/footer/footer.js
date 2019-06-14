var footer = document.getElementById('footer'); //get div with ID 'article'

getInfoLincsJsonByLang(); //function of functions.js

//print the article table
function printFooter(array) {
    var out_footer = '';
    out_footer += '<table id="footer-table">';
    out_footer += '<tr>';

    for (var index = 0; index < array.length; index ++) {
        out_footer += '<td id="' + array[index].id + '-main" class="footer-table-celda">';
        out_footer += '<a href="#">' + array[index].title + '</a><br/>';
        out_footer += '<a href="#">' + array[index].title + '</a>';
        out_footer += '</td>';
    }

    out_footer += '</tr>';
    out_footer += '</table>';

    footer.innerHTML = out_footer;
}