import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleados } from './empleados/empleados';

@Component({
  imports: [Empleados],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
