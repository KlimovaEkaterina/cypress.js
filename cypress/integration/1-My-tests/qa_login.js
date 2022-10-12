describe('Тестирование формы авторизации на login.qa.studio/', function () {

    it('Авторизация произойдет с правильным логином и паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
    cy.contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton');
    })
})