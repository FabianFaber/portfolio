import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PolicyComponent } from './shared/policy/policy.component';
import { ImpressumComponent } from './shared/impressum/impressum.component';

export const routes: Routes = [
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privatpolicy', component: PolicyComponent },
    { path: '', component: MainContentComponent },
];
