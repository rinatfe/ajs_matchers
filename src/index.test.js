import result from "./index";


const ethalon = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
describe('my test', () => {
    test('index test', () => {
        expect(result).toEqual(ethalon);
    });
});