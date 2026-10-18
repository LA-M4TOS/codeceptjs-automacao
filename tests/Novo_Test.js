Feature('NovoTesteLogin');

Scenario('Positive LogIn test', ({ I }) => {
    I.amOnPage('https://practicetestautomation.com/practice-test-login/')
    I.fillField('#username', 'student')
    I.fillField('#password', 'Password123')
    I.click('#submit')
    I.waitForText('Logged In Successfully', 5)
    I.click('Contact')
    // first Name
    I.fillField('#wpforms-161-field_0', 'Luis Augusto')
    // Last Name
    I.fillField('#wpforms-161-field_0-last', 'Matos')
    // Email
    I.fillField('#wpforms-161-field_1', 'luis.matos@example.com')
    I.fillField('#wpforms-161-field_2', 'Estou preenchendo este textbox apenas para fins de teste automatizado.')
    I.click('#wpforms-submit-161');
}).tag('@positivo');