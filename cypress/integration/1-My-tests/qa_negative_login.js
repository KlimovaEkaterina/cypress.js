describe('Тестирование формы авторизации login.qa.studio/', function () {

    it('Невозможно авторизироваться с неправильным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@volnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton');
    })
})