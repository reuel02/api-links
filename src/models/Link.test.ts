describe('Criação de Links', () => {
    test('Deve criar um link', () => {
        const link = new Link ('cubosacademy', 'https://cubos.academy')

        expect(link).toHaveProperty('identificador', 'cubosacademy')
        expect(link).toHaveProperty('url', 'https://cubos.academy')
        expect(link).toHaveProperty('visitas', 0)
    })
})