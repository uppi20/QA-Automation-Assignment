import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ProductsPage } from '../Pages/Productspage';
import { CartPage } from '../Pages/CartPage';
import { users } from '../test-data/users';

test.describe('Add to Cart Functionality', () => {
  test.beforeEach(async ({ page }) => {
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

  test('Verify add product to cart and validate product details @smoke', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await test.step('Add Sauce Labs Backpack product to cart', async () => {
      await productsPage.addProductToCart('Sauce Labs Backpack');
    });

    await test.step('Verify cart badge count is 1', async () => {
      await productsPage.verifyCartBadgeCount('1');
    });

    await test.step('Navigate to cart page', async () => {
      await productsPage.goToCart();
    });

    await test.step('Verify product name and price in cart', async () => {
      await cartPage.verifyProductDetails('Sauce Labs Backpack', '$29.99');
    });
  });

  test('Verify remove product from cart @regression', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await test.step('Add Sauce Labs Backpack product to cart', async () => {
      await productsPage.addProductToCart('Sauce Labs Backpack');
    });

    await test.step('Verify cart badge count is 1', async () => {
      await productsPage.verifyCartBadgeCount('1');
    });

    await test.step('Navigate to cart page', async () => {
      await productsPage.goToCart();
    });

    await test.step('Remove product from cart and verify removed', async () => {
      await cartPage.removeProduct('Sauce Labs Backpack');
    });
  });

  test('Verify add multiple products to cart @regression', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await test.step('Add Sauce Labs Backpack product to cart', async () => {
      await productsPage.addProductToCart('Sauce Labs Backpack');
    });

    await test.step('Add Sauce Labs Bike Light product to cart', async () => {
      await productsPage.addProductToCart('Sauce Labs Bike Light');
    });

    await test.step('Verify cart badge count is 2', async () => {
      await productsPage.verifyCartBadgeCount('2');
    });
  });
});