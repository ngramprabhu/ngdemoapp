System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category, Categories;
    return {
        setters: [],
        execute: function () {
            Category = (function () {
                function Category(catId, catName) {
                    this.catId = catId;
                    this.catName = catName;
                }
                return Category;
            }());
            exports_1("Category", Category);
            exports_1("Categories", Categories = [
                { catId: 1, catName: 'ECTR' },
                { catId: 2, catName: 'ECTL' },
                { catId: 3, catName: 'MECH' }
            ]);
        }
    };
});
