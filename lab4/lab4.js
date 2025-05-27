// lab4.js

// 1. Класс Book с конструктором и методом show
class Book {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  show() {
    console.log(`Название: ${this.title}, Цена: ${this.price}`);
  }
}

// 2. Геттеры и сеттеры для Book
class BookWithAccessors {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  get title() {
    return this._title;
  }
  
  set title(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._title = value;
    } else {
      throw new Error('Название не должно быть пустой строкой');
    }
  }

  get pubYear() {
    return this._pubYear;
  }
  
  set pubYear(value) {
    if (typeof value === 'number' && value > 0) {
      this._pubYear = value;
    } else {
      throw new Error('Год публикации должен быть положительным числом');
    }
  }

  get price() {
    return this._price;
  }
  
  set price(value) {
    if (typeof value === 'number' && value > 0) {
      this._price = value;
    } else {
      throw new Error('Цена должна быть положительным числом');
    }
  }
}

// 3. Статический метод Book.compare и сортировка
class BookWithCompare {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  static compare(a, b) {
    return a.pubYear - b.pubYear;
  }
}

// 4. Функция isEmpty
function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return Object.getOwnPropertySymbols(obj).length === 0;
}

// 5. Объект с методами addClass и removeClass
const objWithClasses = {
  className: 'open menu',
  
  addClass(cls) {
    const classes = this.className.split(' ');
    if (!classes.includes(cls)) {
      this.className = classes.concat(cls).join(' ').trim();
    }
    return this;
  },
  
  removeClass(cls) {
    const classes = this.className.split(' ');
    this.className = classes.filter(c => c !== cls).join(' ');
    return this;
  }
};

// 6. Преобразование в JSON и обратно
function jsonExample() {
  const obj = { className: 'open menu' };
  const jsonString = JSON.stringify(obj, null, 2);
  console.log(jsonString);
  const obj2 = JSON.parse(jsonString);
  console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true
}

// 7. Функция getSecondsToday
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}

// 8. Функция formatDate
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

// Экспортируем всё, что нужно
export {
  Book,
  BookWithAccessors,
  BookWithCompare,
  isEmpty,
  objWithClasses,
  jsonExample,
  getSecondsToday,
  formatDate
};