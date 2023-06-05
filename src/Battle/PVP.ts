import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
  }

  fight(): number {
    let currentPlayer = this._player1;
    let otherPlayer = this._player2;
    while (currentPlayer.lifePoints > 0) {
      currentPlayer.attack(otherPlayer);
      const saveCurrentPlayer = currentPlayer;
      currentPlayer = otherPlayer;
      otherPlayer = saveCurrentPlayer;
    }
    return super.fight();
  }
}