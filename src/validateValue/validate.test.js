const validateTest = require('./validateValue')




describe('validateValue', () => {

    test('Внутри границ', () => {
        expect(validateTest(50)).toBe(true)
    })
    test('Меньше границы', () => {
        expect(validateTest(-5)).toBe(false)
    })
    test('Больше границ', () => {
        expect(validateTest(105)).toBe(false)
    })
    test('Левая граница', () => {
        expect(validateTest(0)).toBe(true)
    })
    test('Правая граница', () => {
        expect(validateTest(100)).toBe(true)
    })

})