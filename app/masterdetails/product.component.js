System.register(["@angular/core", "../masterdetails/product.model"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, product_model_1, ProductComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_model_1_1) {
                product_model_1 = product_model_1_1;
            }
        ],
        execute: function () {
            ProductComponent = (function () {
                function ProductComponent() {
                    this.products = product_model_1.Products;
                    this._filterProducts = new Array();
                }
                Object.defineProperty(ProductComponent.prototype, "catName", {
                    get: function () {
                        return this._catName;
                    },
                    //The catName property will receive 
                    //data from the parent
                    set: function (c) {
                        this._catName = (c && c.trim()) || 'No Data Received';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProductComponent.prototype, "filterProducts", {
                    get: function () {
                        this._filterProducts = new Array();
                        for (var _i = 0, Products_1 = product_model_1.Products; _i < Products_1.length; _i++) {
                            var p = Products_1[_i];
                            if (p.catName == this._catName) {
                                this._filterProducts.push(p);
                            }
                        }
                        return this._filterProducts;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductComponent.prototype.ngOnInit = function () { };
                return ProductComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", String),
                __metadata("design:paramtypes", [String])
            ], ProductComponent.prototype, "catName", null);
            ProductComponent = __decorate([
                core_1.Component({
                    selector: 'prod-data',
                    templateUrl: './app/masterdetails/product.html'
                }),
                __metadata("design:paramtypes", [])
            ], ProductComponent);
            exports_1("ProductComponent", ProductComponent);
        }
    };
});
