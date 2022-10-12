describe('Тестирование формы авторизации login.qa.studio/', function () {

    it('Невозможно авторизироваться с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio2');
        cy.get("#loginButton").click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton');
    })
})