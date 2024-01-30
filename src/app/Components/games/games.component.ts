import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../Interfaces/game';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Favorite games of {{ username }}</h3>
    <ul>
      @for(game of games; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games: Game[] = [
    { id: 1, name: 'Uncharted' },
    { id: 2, name: 'Halo' },
    { id: 3, name: 'Monster Hunter' },
    { id: 4, name: 'Dark Souls' },
    { id: 4, name: 'Bloodborne' },
    { id: 6, name: 'Overcooked' },
    { id: 7, name: 'The Legend of Zelda' },
    { id: 8, name: 'Gears of War' },
    { id: 9, name: 'The Witcher' },
  ];
}
