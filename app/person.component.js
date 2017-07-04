System.register(["@angular/core", "./person.model", "@angular/forms", "./email.custom.valid"], function (exports_1, context_1) {
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
    var core_1, person_model_1, forms_1, email_custom_valid_1, PersonComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_model_1_1) {
                person_model_1 = person_model_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (email_custom_valid_1_1) {
                email_custom_valid_1 = email_custom_valid_1_1;
            }
        ],
        execute: function () {
            PersonComponent = (function () {
                function PersonComponent() {
                    this.p = new person_model_1.Person(0, '', '');
                    this.frm = new forms_1.FormGroup({
                        email: new forms_1.FormControl(this.p.Email, forms_1.Validators.compose([
                            email_custom_valid_1.CustomEmailValidator.emailValidator
                        ]))
                    });
                }
                PersonComponent.prototype.ngOnInit = function () { };
                return PersonComponent;
            }());
            PersonComponent = __decorate([
                core_1.Component({
                    selector: 'person-data',
                    templateUrl: './app/person.custvalid.html'
                }),
                __metadata("design:paramtypes", [])
            ], PersonComponent);
            exports_1("PersonComponent", PersonComponent);
        }
    };
});
