$(function () { // Same as document .addEventListener("DONContentLoaded"...
    
    // Same as document .querySelector("#navbarToggle").addEventListener("blur"...
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 708) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function (global) {
    var dc = {};

   /* var homeHtml = "snippets/home-snippet.html";
    var allCategoriesUrl =
    // Url goes here
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";
    var menuItemsUrl =
     // Url goes here
     var menuItemsTitleHtml = "snippets/menu-items-title.html";
     var menuItemsHtml = "snippets/menu-item.html"

    // Convinience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innertHtml = html;
    };

    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
        var html = "<div class= 'text-center'>";
        html +="<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };*/

    //Return substitute of '{(propName)}'
    // with propValue in given 'string'
    var insertProperty = function (string, propName, propValue) {
        var propReplace = "{{"+ propName + "}}";
        string = string
        .replace (new RegExp(propReplace, "g"), propValue);
        return string;
    }

    // Remove the class 'active' from home and switch to Menu button
    var switchMenuToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace ( new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;
     
        // Add 'active' to menu button if not already there
        classes = document.querySelector("#navMenuButton").className;
        if (classes.indexOf("active") == -1){
            classes += "active";
            document.querySelector("#navMenuButton").className = classes;
        }

    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
      
    // On first load, show home view 
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
        homeHtml,
        function (responseText) {
            document.querySelector("#main-content")
            .innerHTML = responseText
        },
    false);
    });
    // Load the menu categories view 
    // 'categoryShort' is a short_name for a category
    dc.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
          menuItemsUrl + categoryShort,
            buildAndShowCategoriesHTML
        );
    };
      // Builds HTML for the categories page based on the data
      // from the server
      function buildAndShowCategoriesHTML(categories) {
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function (categoryTitleHtml) {
                // Retrieve single category snippet
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function (categoryHtml) {
                        var categoriesViewHtml =
                        buildCategoriesViewHtml (categories,
                                                categoriesTitleHtml,
                                                categoryHtml);
                        insertHtml("#main-content", categoriesViewHtml);                        
                    },
                false);
            },
        false);
      }

      // Using categories data and snippets html
      // build categories view HTML to be inserted into page
      function buildCategoriesViewHtml(categories,
                                     categoriesTitleHtml,
                                     categoryHtml) {
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";
        // Loop over categories
        for (var i = 0; i <categories.length; i++){
            // Insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories [i].short_name;
            html = 
            insertProperty(html, "name", name);
            html =
            insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
      }
      // Builds HTML for the categories page based on the data
      // from the server
      function buildAndShowCategoriesHTML(categoryMenuItems) {
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function (menuItemsTitleHtml) {
                // Retrieve single category snippet
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function (menuItemHtml) {
                        var categoriesViewHtml =
                        buildCategoriesViewHtml (categoryMenuItems,
                                                menuItemsTitleHtml,
                                                menuItemHtml);
                        insertHtml("#main-content", menuItemsViewHtml);                        
                    },
                false);
            },
        false);
      }
     

      //Using category and menu Items data and snippets Html
      // build menu items view HTMl to be inserted into page
      function buildMenuItemsViewHtml(categoryMenuItems,
                                     menuItemsTitleHtml,
                                     menuItemHtml) {
        menuItemsTitleHtml =
        insertProperty(menuItemsTitleHtml,
                             "name",
                             categoryMenuItems.category.name);
        menuItemsTitleHtml =
        insertProperty(menuItemsTitleHtml,
                     "special_instructions",
                     categoryMenuItems.category.special_instructions);
        var finalHtml = menuItemsTitleHtml;
        finalHtml += "<section class='row'>";
        
        //Loop over categories
        var menuItems = categoryMenuItems.menu_items;
        var catShortName = categoryMenuItems.category.short_name;
        for (var i = 0; i < menuItems.length; i++) {
            // Insert menu item values
            var html = menuItemsHtml
            html =
            insertProperty(html, "short_name", menuItems[i].short_name);
            html=
            insertProperty(html, "catShortName",catShortName)
            html = 
            insertItemPrice (html, "price_small", menuItems[i].price_small);
            html =
            insertItemPortionName (html, "small_portion_name", menuItems[i].small_portion_name);
            html = 
            insertItemPrice (html, "price_large",menuItems[i].price_large);
            html =
            insertItemPortionName (html, "large_portion_name", menuItems[i].large_potion_name)
            html =
            insertProperty(html, "name", menuItems[i].name);
            html =
            insertProperty (html, "description", menuItems[i].description);

            // Add clearfix after every second menu item
            if (i % 2 != 0){
                html +=
                "<div class='clearfix visible-lg-block visible-md-block'></div>"
            }
            finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
     } 

     // Appends price with '$' if price exists
     function insertItemPrice(html,
                             pricePropName,
                             priceValue) {
        // If not specified, replace with empty string
        if(!priceValue){
            return insertProperty(html, pricePropName, "");;
        }
        priceValue = "$" + priceValue.toFixed(2);
        html = insertProperty(html, pricePropName,priceValue);
        return html;
         }
       // Appends portion name in parents if it exists
       function insertItemPortionName(html,
                                    ) {
        
       }

       
global.$dc =dc

});(window);

