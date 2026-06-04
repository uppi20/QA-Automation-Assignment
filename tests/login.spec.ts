import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login Functionality', () => {
  test('Verify valid user login @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Login with valid credentials', async () => {
      await loginPage.login(users.standardUser, users.password);
    });

    await test.step('Verify successful login navigation', async () => {
      await loginPage.verifyLoginSuccess();
    });
  });

  test('Verify invalid password error @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Login with invalid password', async () => {
      await loginPage.login(users.standardUser, users.invalidPassword);
    });

    await test.step('Verify invalid password error message and visibility', async () => {
      await loginPage.verifyErrorMessage('Username and password do not match any user in this service');
    });
  });

  test('Verify locked out user error @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Login with locked out user credentials', async () => {
      await loginPage.login(users.lockedUser, users.password);
    });

    await test.step('Verify locked out user error message and visibility', async () => {
      await loginPage.verifyErrorMessage('Sorry, this user has been locked out');
    });
  });

  test('Verify empty username error @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Login without username', async () => {
      await loginPage.login('', users.password);
    });

    await test.step('Verify username required error message and visibility', async () => {
      await loginPage.verifyErrorMessage('Username is required');
    });
  });

  test('Verify empty password error @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Login without password', async () => {
      await loginPage.login(users.standardUser, '');
    });

    await test.step('Verify password required error message and visibility', async () => {
      await loginPage.verifyErrorMessage('Password is required');
    });
  });
});