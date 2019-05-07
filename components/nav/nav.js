var nav = document.getElementById('nav');
var out_nav = '';

var xmlhttp = new XMLHttpRequest();
var url = './data/lincs.json';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var objects = JSON.parse(this.responseText);
        printAside(objects);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printAside(array) {
    _.chain(array)
        .map(function(item) {
            if (item) {
                if (item && item.children) {
                    out_nav += '<li id="' + item.id + '" class="list-item" onclick="show_hide_sublist(this.id)"><a href="#">' + item.title + '</a>\n';
                    out_nav += '<ul id="sub' + item.id + '" class="sublist" style="display: none;" onclick="">\n';
                    
                    var array_children = item.children;

                    array_children.forEach(function(item_children) {
                        var index_children = item.children.indexOf(item_children);

                        if (item && item.children && item.children[index_children].children) {
                            out_nav += '\t<li id="' + item.children[index_children].id + '" class="sublist-item" onclick="show_hide_subsublist(this.id)"><a href="#">' + item.children[index_children].title + '</a>\n';
                            out_nav += '\t<ul id="sub-sub' + item.children[index_children].id + '" class="sub-sublist" style="display: none;">\n';
                            
                            var array_children_children = item.children[index_children].children;
        
                            array_children_children.forEach(function(item_children_children) {
                                out_nav += '\t\t<li id="' + item_children_children.id + '" class="sub-sublist-item"><a href="#">' + item_children_children.title + '</a></li>\n';
                            });
                            
                            out_nav += '\t</ul>\n\t</li>\n';
                        }
        
                        if (item && item.children && !item.children[index_children].children) {
                            out_nav += '\t<li id="' + item_children.id + '" class="sublist-item"><a href="#">' + item_children.title + '</a></li>\n';
                        }
                        
                    });
                    
                    out_nav += '</ul>\n</li>\n';
                }

                if (item && !item.children) {
                    out_nav += '<li id="' + item.id + '" class="list-item" on><a href="#">' + item.title + '</a></li>\n';                    
                }
            }
        }).value();

    nav.innerHTML = '<ul>\n' + out_nav + '\n</ul>';
}

function show_hide_sublist(element) {
    var state = document.querySelector('#sub' + element).style.display;
    // var state_sublist1 = document.querySelector('#sub-sub' + element).style.display;    

    if (state == 'none') {
        document.querySelector('#sub' + element).style.display = 'block';
    } else {
        document.querySelector('#sub' + element).style.display = 'none';
    }
}

function show_hide_subsublist(element) {
    var state_sublist2 = document.querySelector('#sub-sub' + element).style.display;

    if (state_sublist2 == 'none') {
        document.querySelector('#sub-sub' + element).style.display = 'block';
    } else {
        document.querySelector('#sub-sub' + element).style.display = 'none';
    }
}