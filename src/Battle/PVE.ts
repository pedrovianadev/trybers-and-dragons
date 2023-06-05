import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _figther: Fighter,
    private _monsters: Array<Fighter | SimpleFighter>,
  ) { super(_figther); }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (monster.lifePoints > 0 && this._figther.lifePoints > 0) {
        this._figther.attack(monster);
        monster.attack(this._figther);
      }
    });
    return super.fight();
  }
}