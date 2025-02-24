import test, { expect } from "@playwright/test";

test.describe('input-text', () => {
  const targetUrl = '/input/text'
  test('input-text-labeled', async ({ page }) => {
    await page.goto(targetUrl);
    const input = page.locator('#label');

    await input.fill('테스트 입력값');

    await expect(input).toHaveValue('테스트 입력값');
  })

  test('input-text-basic', async ({ page }) => {
    await page.goto(targetUrl);
    const input = page.locator('#basic');

    await input.fill('테스트 입력값2');

    await expect(input).toHaveValue('테스트 입력값2');
  })

  test('input-text-div-content', async ({ page }) => {
    await page.goto(targetUrl);
    const input = page.locator('#div-content');
    await input.fill('테스트 입력값3');

    await expect(input.getByText('테스트 입력값3', {
      exact: true
    })).toBeVisible();
  })
})