const names = ['Аарон', 'Абрам', 'Гавриил', 'Гамлет', 'Иван', 'Пертр', 'Виктор', 'Федор', 'Кирилл', 'Роман'];
const surNames= ['Абрамов', 'Баранов', 'Витальев', 'Гришин', 'Дроздов', 'Ельников', 'Жуков', 'Зябликов', 'Ильин', 'Ковалев'];

const generateIndex = (value) => Math.floor(Math.random() * value);

export const generateFullName = () => `${surNames[generateIndex(surNames.length)]} ${names[generateIndex(names.length)]}`;




