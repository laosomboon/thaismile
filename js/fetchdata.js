function createMenuElement(ficon, menuName, menuPrice, menuDesc, menuImg) {


    var div = document.createElement('div');
    div.classList.add('mix');
    div.classList.add(ficon);
    div.classList.add('col-sm-10');
    div.classList.add('menu-restaurant');
    div.setAttribute('data-cat', ficon);


    var spanWrapper = document.createElement('span');
    spanWrapper.classList.add('clearfix');

    var a1 = document.createElement('a');
    a1.setAttribute("class", "menu-title");
    a1.setAttribute("data-meal-img", menuImg);
    a1.innerHTML = menuName;

    var lineSpan = document.createElement('span');
    lineSpan.setAttribute("style", "left:166px; right: 44px;");
    lineSpan.setAttribute("class", "menu-line");

    var priceSpan = document.createElement('span');
    priceSpan.setAttribute("class", "menu-price");
    priceSpan.innerHTML = menuPrice;


    var subtitleSpan = document.createElement("span");
    subtitleSpan.setAttribute("class", "menu-subtitle");
    subtitleSpan.innerHTML = menuDesc;

    spanWrapper.appendChild(a1);
    spanWrapper.appendChild(lineSpan);
    spanWrapper.appendChild(priceSpan);

    div.appendChild(spanWrapper);
    div.appendChild(subtitleSpan);

    return div;
}


/*Initialize menus*/
var allmenus;

/*Fetch Menu from Firebase*/

const dbRefObject = firebase.database().ref().child('allmenus');


dbRefObject.on('value', function(snap) {
    allmenus = _.filter(snap.val(),function (o) { return o.thaismile > 0;});
    allmenus.forEach(function(c) {

        // var a = document.createElement('a');
        // a.classList.add('filter');
        // a.setAttribute("data-filter", '.' + c.icon);
        // a.innerHTML = c.category;
        // var li = document.createElement('li');
        // li.appendChild(a);
        // var menulist = document.getElementById('menuList');
        // menulist.appendChild(li);

        var menus = c.menus;

        menus.forEach(function(menuItem) {

            var elem = createMenuElement(c.icon, menuItem.name, menuItem.thaismile, menuItem.description, menuItem.image);
            var menuContainer = document.getElementById('Container');
            menuContainer.appendChild(elem);
        });
    });

}); /*end on snapshot*/