export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage === 'undefined') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Invalid type');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
