const delay = require('./delay')




describe('delay', () => {

    test('Корректные значения', async () => {
        const sum = await delay(() => 5+4, 1500)
        expect(sum).toBe(9)
    })


})