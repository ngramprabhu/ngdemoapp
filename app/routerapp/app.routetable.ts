//1. Import the ModuleWithProviders
import {ModuleWithProviders} from '@angular/core';
//2. Import Routes and RouterModule
import {Routes,RouterModule} from '@angular/router';
//3. Import required components to register in 
//route table

import {HomeComponent} from '../routerapp/home.component';
import {AboutComponent} from '../routerapp/about.component';
import {ContactComponent} from '../routerapp/contact.component';

//4. Define the route table using Routes Array
let appRoutes : Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

//5. Define the ModuleWithProvides to register
//the RouterModule with RouteTable on root

export const routing:ModuleWithProviders = 
    RouterModule.forRoot(appRoutes);







