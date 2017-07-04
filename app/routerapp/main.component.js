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
    var core_1, MainComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent.prototype.ngOnInit = function () { };
                return MainComponent;
            }());
            MainComponent = __decorate([
                core_1.Component({
                    selector: 'main-page',
                    template: "<h1>The Routing App</h1>\n    <div class=\"collapse navbar-collapse\">\n        <ul>\n           <li><a class=\"btn btn-link\" [routerLink]=\"['']\">Home</a></li>\n           <li><a class=\"btn btn-link\" [routerLink]=\"['about']\">About</a></li>\n           <li><a class=\"btn btn-link\" [routerLink]=\"['contact']\">Contact</a></li>\n        </ul>\n    </div>    \n    <router-outlet></router-outlet>      \n    "
                }),
                __metadata("design:paramtypes", [])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    };
});
