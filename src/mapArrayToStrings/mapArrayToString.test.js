const mapArrayToStrings = require('./mapArrayToString')




describe('mapArrayToStrings', () => {

    test('Корректные значения', () => {
        expect(mapArrayToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Разные значения', () => {
        expect(mapArrayToStrings(['a', 2, '3', 'c', 4, null, undefined, 5])).toEqual(['2', '4', '5'])
    })
    test('Пустой массив', () => {
        expect(mapArrayToStrings([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrayToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
    })


})