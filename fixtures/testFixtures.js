const base = require('@playwright/test');
const { environment } = require('../config/environment');
const { LoginPage } = require('../pages/Common/LoginPage');

const test = base.test.extend({

  loginAs: async ({ page }, use) => {

    const login = async (userType) => {
      const user = environment.users[userType];

      if (!user) {
        throw new Error(`User configuration not found: ${userType}`);
      }

      const loginPage = new LoginPage(page);

      await loginPage.open();

      console.log(`[ACTION] Logging in as: ${userType}`);

      await loginPage.login(user.username, user.password);

      console.log(`[SUCCESS] Login completed as: ${userType}`);
    };

    await use(login);
  },

});

module.exports = {
  test,
  expect: base.expect,
};