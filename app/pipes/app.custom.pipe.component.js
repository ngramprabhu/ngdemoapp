System.register(["@angular/core", "../pipes/product.model"], function (exports_1, context_1) {
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
    var core_1, product_model_1, CustomPipeComponent;
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
            CustomPipeComponent = (function () {
                function CustomPipeComponent() {
                    this.val = 0;
                    this.products = new Array();
                    this.products.push(new product_model_1.Product(101, 'Laptop'));
                    this.products.push(new product_model_1.Product(102, 'Desktop'));
                    this.products.push(new product_model_1.Product(103, 'Router'));
                    this.products.push(new product_model_1.Product(104, 'Mouse'));
                    this.products.push(new product_model_1.Product(105, 'RAM'));
                    this.products.push(new product_model_1.Product(106, 'Modem'));
                }
                CustomPipeComponent.prototype.setVal = function () {
                    this.val = 0;
                };
                CustomPipeComponent.prototype.ngOnInit = function () { };
                return CustomPipeComponent;
            }());
            CustomPipeComponent = __decorate([
                core_1.Component({
                    selector: 'custom-pipe',
                    templateUrl: '../app/pipes/custom.pipe.html'
                }),
                __metadata("design:paramtypes", [])
            ], CustomPipeComponent);
            exports_1("CustomPipeComponent", CustomPipeComponent);
        }
    };
});
