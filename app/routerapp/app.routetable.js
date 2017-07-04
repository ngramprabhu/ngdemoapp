System.register(["@angular/router", "../routerapp/home.component", "../routerapp/about.component", "../routerapp/contact.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, about_component_1, contact_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }
        ],
        execute: function () {
            //4. Define the route table using Routes Array
            appRoutes = [
                { path: "", component: home_component_1.HomeComponent },
                { path: "about", component: about_component_1.AboutComponent },
                { path: "contact", component: contact_component_1.ContactComponent }
            ];
            //5. Define the ModuleWithProvides to register
            //the RouterModule with RouteTable on root
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
