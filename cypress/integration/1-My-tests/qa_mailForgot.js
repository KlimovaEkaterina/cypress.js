describe('Тестирование формы восстановления пароля login.qa.studio/', function () {

    it('Пароль должен восстановиться с валидным email', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('german@dolnikov.ru');
        cy.get("#restoreEmailButton").click();
    cy.contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton');
    
    })
})