import { Routes } from '@angular/router';
import { AngularTutorial } from './angular-tutorial/angular-tutorial.component';
import { GkeTutorialComponent } from './gke-tutorial/gke-tutorial.component';
export const routes: Routes = [

    { path: 'angular', component: AngularTutorial },

    { path: 'gke', component: GkeTutorialComponent },

];
