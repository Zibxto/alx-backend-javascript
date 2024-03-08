export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be string');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }
}
