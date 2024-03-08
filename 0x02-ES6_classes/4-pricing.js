import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be number');
    }

    if ((currency instanceof Currency)) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if ((newCurrency instanceof Currency)) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
}
