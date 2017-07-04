System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters: [],
        execute: function () {
            Product = (function () {
                function Product(prodId, prodName) {
                    this.prodId = prodId;
                    this.prodName = prodName;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
