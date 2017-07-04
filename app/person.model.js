System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = (function () {
                function Person(PersonId, PersonName, Email) {
                    this.PersonId = PersonId;
                    this.PersonName = PersonName;
                    this.Email = Email;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
