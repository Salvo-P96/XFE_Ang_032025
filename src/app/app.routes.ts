import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CustomBuildComponent } from './pages/custom-build/custom-build.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ProfileManagerComponent } from './pages/profile-manager/profile-manager.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'build', component: CustomBuildComponent },
    { path: 'summary',component:SummaryComponent },
    { path: 'login', component:LoginComponent },
    { path: 'adminZone', component:AdminHomeComponent },
    { path: 'profile',component:ProfileManagerComponent }
];
