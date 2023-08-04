import { Service } from "./service"


describe('Test Service', () => {
    it('#methodUno', () => {
        // Arrange
        const service = new Service();

        //Act
        const resultado = service.methodUno("message");

        //Assert
        expect(resultado).toEqual("");

    })
});