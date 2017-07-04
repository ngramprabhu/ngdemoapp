System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product, Products;
    return {
        setters: [],
        execute: function () {
            Product = (function () {
                function Product(prodId, prodName, catName) {
                    this.prodId = prodId;
                    this.prodName = prodName;
                    this.catName = catName;
                }
                return Product;
            }());
            exports_1("Product", Product);
            exports_1("Products", Products = [
                { prodId: 101, prodName: 'P1', catName: 'ECTR' },
                { prodId: 102, prodName: 'P2', catName: 'ECTL' },
                { prodId: 103, prodName: 'P3', catName: 'MECH' },
                { prodId: 104, prodName: 'P4', catName: 'ECTR' },
                { prodId: 105, prodName: 'P5', catName: 'ECTL' },
                { prodId: 106, prodName: 'P6', catName: 'MECH' }
            ]);
        }
    };
});
