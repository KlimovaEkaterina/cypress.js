describe('Тестирование формы авторизации https://staya.dog/', function () {

it('Невозможно авторизироваться с неправильным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get(".header-bottom__right--link").click();
        cy.get("input[type='email']:first").type('lekka.spb@mail.ru');
        cy.get("input[type='password']:first").type('Katya2023');
        cy.get(".auth-form__submit > .s-button__content").click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
})
})