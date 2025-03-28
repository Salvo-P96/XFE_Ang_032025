import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CustomBuildComponent } from './pages/custom-build/custom-build.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'app-custom-build', component: CustomBuildComponent },
    { path: 'app-summary',component:SummaryComponent }
];
