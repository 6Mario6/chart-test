import { ROUTES } from './routes';
import { Routes } from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ContactPageComponent} from '../pages/contact-page/contact-page.component';

export const appRouter: Routes = [
  {
    path: ROUTES.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: ROUTES.CONTACT,
    component: ContactPageComponent,
  },
  {
    path: '',
    redirectTo: ROUTES.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ROUTES.DASHBOARD,
  },
];
