import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavBarComponent],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularCrashCourse';
  city = 'Puebla';
}
