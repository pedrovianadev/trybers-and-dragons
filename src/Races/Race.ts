export default abstract class Race {
  constructor(
    private _name: string,
    public readonly _dexterity: number,
  ) {}

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}