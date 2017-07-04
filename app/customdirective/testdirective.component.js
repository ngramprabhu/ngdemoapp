System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, TestDirectiveComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TestDirectiveComponent = (function () {
                function TestDirectiveComponent() {
                }
                TestDirectiveComponent.prototype.ngOnInit = function () { };
                return TestDirectiveComponent;
            }());
            TestDirectiveComponent = __decorate([
                core_1.Component({
                    selector: 'my-custom-directive',
                    template: "\n       <h1>My Custom Directive</h1>\n       <h2>Please select color from options</h2>\n       <hr>\n       <div>\n         <input type=\"radio\" name='c' (click)=\"color='yellow'\">Yellow\n         <input type=\"radio\" name='c' (click)=\"color='green'\">Green\n         <input type=\"radio\" name='c' (click)=\"color='cyan'\">Cyan\n       </div>\n       <hr>\n       <p [textColor]=\"color\">\n         Hay! Set My Color\n       </p> \n       <hr>\n       <p [textColor]=\"color\" initColor=\"magenta\">\n         Hay! I am already having color \n       </p>\n    "
                }),
                __metadata("design:paramtypes", [])
            ], TestDirectiveComponent);
            exports_1("TestDirectiveComponent", TestDirectiveComponent);
        }
    };
});
