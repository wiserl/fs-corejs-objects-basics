export class Person {
  constructor(name) {
    this._name = name;
    this._age = 34;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    return this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      return this._age = 0;
    }
    if (value > 120) {
      return this._age = 120;
    }
  }
}