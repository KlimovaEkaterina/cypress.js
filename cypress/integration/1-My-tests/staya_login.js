describe('Тестирование формы авторизации https://staya.dog/', function () {

it('Авторизация произойдет с правильным логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get(".header-bottom__right--link").click();
        cy.get("input[type='email']:first").type('lekka.spb@mail.ru');
        cy.get("input[type='password']:first").type('Katya2022');
        cy.get(".auth-form__submit > .s-button__content").click();
        cy.contains('Мои заказы');
})
})