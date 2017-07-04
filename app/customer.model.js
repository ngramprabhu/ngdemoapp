System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer, Cities;
    return {
        setters: [],
        execute: function () {
            Customer = (function () {
                function Customer(CustId, CustName, Address, City) {
                    this.CustId = CustId;
                    this.CustName = CustName;
                    this.Address = Address;
                    this.City = City;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
            exports_1("Cities", Cities = [
                { CityId: 1, CityName: 'Pune' },
                { CityId: 2, CityName: 'Mumbai' },
                { CityId: 3, CityName: 'Kolhapur' },
                { CityId: 4, CityName: 'Nagpur' }
            ]);
        }
    };
});
