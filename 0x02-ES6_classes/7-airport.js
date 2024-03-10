export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string' && typeof code === 'string') {
      this._name = name;
      this._code = code;
    } else {
      throw new TypeError('Invalid argument type');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
