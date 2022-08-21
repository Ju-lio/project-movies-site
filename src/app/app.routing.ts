import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
   { path: '', component: LoginComponent },
   { path: 'home/:usr', component: HomeComponent }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)