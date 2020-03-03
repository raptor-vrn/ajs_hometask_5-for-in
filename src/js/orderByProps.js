const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(obj, ...args) {
  const array = [];
  let object = {};
  const someArr = [];

  arguments[1].forEach((argument) => {
    someArr.push({ key: argument, value: obj[argument] });
    delete obj[argument];
  });

  for (const prop in obj) {
    object = {
      key: prop,
      value: obj[prop],
    };
    array.push(object);
  }

  array.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;

  });

  return [...someArr, ...array];
}

const result = orderByProps(hero, ['name', 'level']);
console.log(result);
