import { Injectable } from '@angular/core';
import { Game } from '../Interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  protected gamesList: Game[] = [
    {
      id: 1,
      name: 'Uncharted',
      platform: [
        'PlayStation 3',
        'PlayStation Vita',
        'PlayStation 4',
        'Android',
        'iOS',
        'PlayStation 5',
        'Windows',
      ],
      multiplayer: false,
    },
    {
      id: 2,
      name: 'Halo',
      platform: [
        'Xbox',
        'Windows',
        'macOS',
        'Xbox 360',
        'Windows Phone',
        'iOS',
        'Xbox One',
        'Arcade',
        'Xbox Series X/S',
      ],
      multiplayer: true,
    },
    {
      id: 3,
      name: 'Monster Hunter World',
      platform: ['PlayStation 4', 'Xbox One', 'Windows'],
      multiplayer: true,
    },
    {
      id: 4,
      name: 'Dark Souls',
      platform: [
        'PlayStation 3',
        'Xbox 360',
        'Windows',
        'PlayStation 4',
        'Xbox One',
        'Nintendo Switch',
      ],
      multiplayer: true,
    },
    {
      id: 4,
      name: 'Bloodborne',
      platform: ['PlayStation 4'],
      multiplayer: true,
    },
    {
      id: 6,
      name: 'Overcooked',
      platform: [
        'PlayStation 4',
        'Windows',
        'Xbox One',
        'Nintendo Switch',
        'Xbox Series X/S',
        'PlayStation 5',
        'Stadia',
      ],
      multiplayer: true,
    },
    {
      id: 7,
      name: 'The Legend of Zelda: Ocarina of Time',
      platform: ['Nintendo 64', 'GameCube', 'iQue Player'],
      multiplayer: false,
    },
    {
      id: 8,
      name: 'Gears of War',
      platform: [
        'Xbox 360',
        'Microsoft Windows',
        'Xbox One',
        'iOS',
        'Xbox Series X/S',
      ],
      multiplayer: true,
    },
    {
      id: 9,
      name: 'The Witcher 3: Wild Hunt',
      platform: [
        'PlayStation 4',
        'Windows',
        'Xbox One',
        'Nintendo Switch',
        'PlayStation 5',
        'Xbox Series X/S',
      ],
      multiplayer: false,
    },
  ];

  getAllGames() {
    return this.gamesList;
  }

  getGameById(id: number) {
    return this.gamesList.find((game) => game.id === id);
  }
}
