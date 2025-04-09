import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CustomBuildComponent } from './pages/custom-build/custom-build.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'build', component: CustomBuildComponent },
    { path: 'summary',component:SummaryComponent },
    { path: 'login', component:LoginComponent}
];
