export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students)) {
      for (const student of students) {
        if (!(typeof (student) === 'string')) {
          throw new TypeError();
        }
      }
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(y) {
    this._length = y;
  }

  get students() {
    return this._students;
  }

  set students(z) {
    this._students = z;
  }
}
