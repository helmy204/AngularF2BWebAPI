(function () {
    "use strict";

    angular.module("productManagement")
           .controller("ProductListCtrl", ProductListCtrl);

    function ProductListCtrl() {

        var vm = this;

        vm.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
             {
                 "productId": 2,
                 "productName": "Garden Cart",
                 "productCode": "GDN-0023",
                 "releaseDate": "March 18, 2010",
                 "description": "15 gallon capacity rolling garden cart.",
                 "price": 32.99
             },
              {
                  "productId": 5,
                  "productName": "Hammer",
                  "productCode": "TBX-0048",
                  "releaseDate": "May 21, 2013",
                  "description": "",
                  "price": 8.99
              }

        ];

    }
}());