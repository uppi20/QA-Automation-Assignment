import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductDetails(productName: string, productPrice: string) {
    const cartItem = this.page.locator('.cart_item').filter({ hasText: productName });
    await expect(cartItem).toBeVisible()
    await expect(cartItem.locator('.inventory_item_name')).toHaveText(productName)
    await expect(cartItem.locator('.inventory_item_price')).toHaveText(productPrice);
  }

  async removeProduct(productName: string) {
    const cartItem = this.page.locator('.cart_item').filter({ hasText: productName });
    await cartItem.getByRole('button', { name: 'Remove' }).click();
    await expect(cartItem).toHaveCount(0);
  }
}