const names = ['Арон', 'Абрам', 'Гавриил', 'Гамлет', 'Иван', 'Петр', 'Виктор', 'Федор', 'Кирилл', 'Роман'];
const surNames= ['Абрамов', 'Баранов', 'Витальев', 'Гришин', 'Дроздов', 'Ельников', 'Жуков', 'Зябликов', 'Ильин', 'Ковалев'];

const generateIndex = value => Math.floor(Math.random() * value);

const generateFullName = () => `${surNames[generateIndex(surNames.length)]} ${names[generateIndex(names.length)]}`;

const maxArrayItemIndex = (arr) => {
    let max = arr[0];
    let ind = [0];

    arr.forEach((item, index) => {
      if (item > max) {
          max = item;
          ind = index;
      }
    });

    return ind;
};

export { generateFullName, maxArrayItemIndex };


