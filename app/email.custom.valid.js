System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomEmailValidator;
    return {
        setters: [],
        execute: function () {
            CustomEmailValidator = (function () {
                function CustomEmailValidator() {
                }
                //1. Function accepts ctrl
                //ctrl is the control context to be validated
                CustomEmailValidator.emailValidator = function (ctrl) {
                    var regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
                    if (ctrl.value.match(regExp)) {
                        return null;
                    }
                    else {
                        return { 'wrongEmail': true };
                    }
                };
                return CustomEmailValidator;
            }());
            exports_1("CustomEmailValidator", CustomEmailValidator);
        }
    };
});
