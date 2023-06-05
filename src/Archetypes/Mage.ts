import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static count = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number { return this.count; }

  get energyType() { return this._energy; }
}