System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "@angular/platform-browser-dynamic", "./simple.component", "./ngModeldemo.component", "./customer.component", "./customersimpleform.component", "./customer-data-driven-form.component", "./customer-data-driven-form-valid.component", "./person.component", "./masterdetails/category.component", "./masterdetails/product.component", "./customdirective/testdirective.component", "./customdirective/color.custom.directive", "./services/simple.service", "./services/simple.service.component", "./httpservice/employee.http.service", "./httpservice/employee.http.component", "./pipes/app.pipe.component", "./pipes/app.custom.pipe.component", "./pipes/custome.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, platform_browser_dynamic_1, simple_component_1, ngModeldemo_component_1, customer_component_1, customersimpleform_component_1, customer_data_driven_form_component_1, customer_data_driven_form_valid_component_1, person_component_1, category_component_1, product_component_1, testdirective_component_1, color_custom_directive_1, simple_service_1, simple_service_component_1, employee_http_service_1, employee_http_component_1, app_pipe_component_1, app_custom_pipe_component_1, custome_pipe_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            },
            function (ngModeldemo_component_1_1) {
                ngModeldemo_component_1 = ngModeldemo_component_1_1;
            },
            function (customer_component_1_1) {
                customer_component_1 = customer_component_1_1;
            },
            function (customersimpleform_component_1_1) {
                customersimpleform_component_1 = customersimpleform_component_1_1;
            },
            function (customer_data_driven_form_component_1_1) {
                customer_data_driven_form_component_1 = customer_data_driven_form_component_1_1;
            },
            function (customer_data_driven_form_valid_component_1_1) {
                customer_data_driven_form_valid_component_1 = customer_data_driven_form_valid_component_1_1;
            },
            function (person_component_1_1) {
                person_component_1 = person_component_1_1;
            },
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (testdirective_component_1_1) {
                testdirective_component_1 = testdirective_component_1_1;
            },
            function (color_custom_directive_1_1) {
                color_custom_directive_1 = color_custom_directive_1_1;
            },
            function (simple_service_1_1) {
                simple_service_1 = simple_service_1_1;
            },
            function (simple_service_component_1_1) {
                simple_service_component_1 = simple_service_component_1_1;
            },
            function (employee_http_service_1_1) {
                employee_http_service_1 = employee_http_service_1_1;
            },
            function (employee_http_component_1_1) {
                employee_http_component_1 = employee_http_component_1_1;
            },
            function (app_pipe_component_1_1) {
                app_pipe_component_1 = app_pipe_component_1_1;
            },
            function (app_custom_pipe_component_1_1) {
                app_custom_pipe_component_1 = app_custom_pipe_component_1_1;
            },
            function (custome_pipe_1_1) {
                custome_pipe_1 = custome_pipe_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        http_1.HttpModule],
                    declarations: [simple_component_1.SimpleComponent,
                        ngModeldemo_component_1.NgModelDemoComponent,
                        customer_component_1.CustomerComponent,
                        customersimpleform_component_1.CustomerSimpleFormComponent,
                        customer_data_driven_form_component_1.CustomerDataDrivenFormComponent,
                        customer_data_driven_form_valid_component_1.CustomerDataDrivenFormValidComponent,
                        person_component_1.PersonComponent,
                        category_component_1.CategoryComponent,
                        product_component_1.ProductComponent,
                        color_custom_directive_1.ColorDirective,
                        testdirective_component_1.TestDirectiveComponent,
                        simple_service_component_1.SimpleServiceComponent,
                        employee_http_component_1.EmployeeHttpComponent,
                        // HomeComponent,
                        // AboutComponent,
                        // ContactComponent,
                        // MainComponent,
                        app_pipe_component_1.PipeDemoComponent,
                        custome_pipe_1.ProductFilterPipe,
                        app_custom_pipe_component_1.CustomPipeComponent],
                    providers: [simple_service_1.SimpleDataService, employee_http_service_1.EmployeeHttpService],
                    bootstrap: [app_custom_pipe_component_1.CustomPipeComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    };
});
