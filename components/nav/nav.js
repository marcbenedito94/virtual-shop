
var nav = document.getElementById('nav'); //get the div with ID 'nav'
var main = document.getElementById('main');

getLincsJsonByLang(); //function of functions.js

//print nav menu
function printNav(array) {
    var out_nav = '';

    _.chain(array)
        .map(function(item) {
            if (item) {
                if (item && item.children) {
                    out_nav += '<li id="' + item.id + '" class="list-item" onclick="showHideSublist(this.id)"><a href="#"><h3 class="list-item-title">' + item.title + '<h3></a>\n';
                    out_nav += '<ul id="sub' + item.id + '" class="sublist" onclick="" style="display: none">\n';
                    
                    var array_children = item.children;

                    array_children.forEach(function(item_children) {
                        var index_children = item.children.indexOf(item_children);

                        if (item && item.children && item.children[index_children].children) {
                            out_nav += '\t<li id="' + item.children[index_children].id + '" class="sublist-item" onclick="show_hide_subsublist(this.id)"><a class="sublist-item-title" href="#">' + item.children[index_children].title + '</a></li>\n';
                            
                            var array_children_children = item.children[index_children].children;
        
                            array_children_children.forEach(function(item_children_children) {
                                out_nav += '\t\t<li id="' + item_children_children.id + '" class="sub-sublist-item"><a class="sub-sublist-item-title" href="#">' + item_children_children.title + '</a></li>\n';
                            });
                        }
        
                        if (item && item.children && !item.children[index_children].children) {
                            out_nav += '\t<li id="' + item_children.id + '" class="sublist-item"><a class="sublist-item-title" href="#">' + item_children.title + '</a></li>\n';
                        }
                        
                    });
                    
                    out_nav += '</ul>\n</li>\n';
                }

                if (item && !item.children) {
                    out_nav += '<li id="' + item.id + '" class="list-item" onclick="locateToProductList();"><a href="#"><h3 class="list-item-title">' + item.title + '</h3></a></li>\n';                    
                }
            }
        }).value();

    nav.innerHTML = '<ul>\n' + out_nav + '\n</ul>';
}

function showHideSublist(element) {
    var state = document.querySelector('#sub' + element).style.display;
    // var state_sublist1 = document.querySelector('#sub-sub' + element).style.display;    

    if (state == 'none') {
        document.querySelector('#sub' + element).style.display = 'block';
    } else {
        document.querySelector('#sub' + element).style.display = 'none';
    }
}

function locateToProductList() {
    location.href = './productList.php';
}

// function printMainDiv() {
//     var out_main = '';
    
//     for (var index = 0; index < products_names_list.length; index ++) {
//         out_main += '<div>' +
//                         '<p>' + products_names_list[index] + '</p>' +
//                         '<p>' + products_descriptions_list[index] + '</p>' +
//                         '<p>' + products_prices_list[index] + ' €</p>' +
//                     '</div>';
//     }
    
//     main.innerHTML =  out_main;
// }