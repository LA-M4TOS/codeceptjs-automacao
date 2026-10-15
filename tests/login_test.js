Feature('login');

Scenario('Login com Sucesso', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('login');
    I.click('#user');  
    I.fillField('#user', 'luisaugusto.matos@gmail.com');
})
//Scenario('Tentando Logar digitando apenas o e-mail', ({ I }) => {

//    I.amOnPage('https://automationpratice.com.br/');


//})
//Scenario('Tentando Logar sem digitar e-mail e senha', ({ I }) => {

//    I.amOnPage('https://automationpratice.com.br/');


//})
//Scenario('Tentando Logar digitando apenas a senha', ({ I }) => {

//    I.amOnPage('https://automationpratice.com.br/');


//})
