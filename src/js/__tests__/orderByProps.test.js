import orderByProps from '../orderByProps.js'

test('sort by props', () => {
    const hero = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
    };

    const sort = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ]
    expect(orderByProps(hero, ['name', 'level'])).toEqual(sort);
});
