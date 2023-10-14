const square = require('./square')




describe('square', () => {

    let mockValue;
    // Перед каждым тестом
    beforeEach(() => {
        // добавить в базу данных
    })

    // Один раз перед всеми тестами
    beforeAll(() => {

    })

    test('Корректные значения', () => {
       /* expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()*/
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        // Сколько раз будет вызвано Math.pow()
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('Корректные значения', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1)
        // Сколько раз будет вызвано Math.pow()
        // Вызов в верхнем тесте накапливает spyOn, поэтому в afterEach надо чистить это
        expect(spyMathPow).toBeCalledTimes(0)
    })



    afterEach(() => {
        // Удалить из базы данных


        jest.clearAllMocks()

    })
    afterAll(() => {

    })

})