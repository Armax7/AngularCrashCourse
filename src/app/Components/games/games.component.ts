// import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import * as Core from '@angular/core';
import { Component } from '@angular/core';
import { Game } from '../../Interfaces/game';
import { GamesService } from '../../Services/games.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Favorite games of {{ username }}</h3>
    <ul>
      @for(game of gamesList; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Core.Input() username = '';
  @Core.Output() addFavoriteEvent = new Core.EventEmitter<string>();

  gamesList: Game[] = [];
  gamesService: GamesService = Core.inject(GamesService);

  constructor() {
    this.gamesList = this.gamesService.getAllGames();
  }

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
