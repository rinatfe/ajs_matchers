import sort from "./index";

let arr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const ethalon = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
describe('my test', () => {
    test('index test', () => {
        expect(sort(arr)).toEqual(ethalon);
    });
});

test('index test', () => {
  expect(sort(arr)).toBe(ethalon);
});