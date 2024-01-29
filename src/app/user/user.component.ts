import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Armax7';
  isLoggedIn = false;
  favGame = '';

  getFav(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hello ${this.username}`);
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
