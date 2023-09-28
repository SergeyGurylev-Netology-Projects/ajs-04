import { healthLevel, sortHeroesByLifePoints } from '../health';

test.each([
  ['мечник', 10, 'critical'],
  ['маг', 100, 'healthy'],
  ['лучник', 40, 'wounded'],
])(
  ('calculate health level for "%s" with %i life points'
  ),
  (name, health, expected) => {
    const result = healthLevel({ name, health });
    expect(result).toBe(expected);
  },
);

test('sort heroes by life points', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByLifePoints(heroes)).toEqual(expected);
});
