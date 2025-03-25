import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CustomBuildComponent } from './pages/custom-build/custom-build.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'app-custom-build', component: CustomBuildComponent },
];
