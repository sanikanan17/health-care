import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard";
import { Login } from './login/login';
import { Patients } from './patients/patients';
import { Navbar } from './navbar/navbar';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Dashboard, Login, Patients, Navbar, Contact],
  
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hospital');
}
