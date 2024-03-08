export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types during object creation
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    // Verify that students is an array of strings
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    // Verify the type before setting the value
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    // Verify the type before setting the value
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    // Verify that newStudents is an array of strings before setting the value
    if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
