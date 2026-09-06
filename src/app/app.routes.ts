
import { Routes } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Patients } from './patients/patients';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Navbar },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'patients', component: Patients },
  { path: 'contact', component: Contact }
];

