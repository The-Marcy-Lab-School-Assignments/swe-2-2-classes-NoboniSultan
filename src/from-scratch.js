class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  isSquare() {
    return (this.length === this.width);
  }
}

class Vehicle {
  constructor(type, capacity, color = 'black') {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
    this.passengers = [];
  }
  paint(color) {
    this.color = color;
    return this.color
  }
  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return this.passengers.length;
    } else {
      return -1;
    }
  }
}

class PasswordManager {
  #password;
  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    return attempt === this.#password;
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    } else {
      return false;
    }
  }
}

class TodoList {
  #items;

  constructor(title) {
    this.title = title;
    this.#items = [];
  }
  addItem(description) {
    this.#items.push(description);
    return this.#items.length;
  }

  removeItem(description) {
    const index = this.#items.indexOf(description);
    if (index !== -1) {
      const removed = this.#items.splice(index, 1)[0];
      return removed;
    }
    return null;
  }

  getItems() {
    return [...this.#items]; // return a copy
  }
}


class BankAccount {

}


module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
