Feature('login');

Scenario('Login com Sucesso', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('login')
    I.waitForText('Login', 20)
    I.fillField('#user', 'luisaugusto.matos@gmail.com');
    I.fillField('#password', 'senha123')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 5)
    I.click('OK');

}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('login')
    I.waitForText('Login', 20)
    I.fillField('#user', 'luisaugusto.matos@gmail.com');
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 5);

}).tag('@apenasemail');

Scenario('Tentando Logar sem digitar e-mail e senha', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('login')
    I.waitForText('Login', 20)
    I.fillField('#user', '');
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10);

}).tag('@sememailesenha');

Scenario('Tentando Logar digitando apenas a senha', ({ I }) => {

   I.amOnPage('https://automationpratice.com.br/')
    I.click('login')
    I.waitForText('Login', 20)
    // I.fillField('#user', '');
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10);

}).tag('@apenassenha'); 