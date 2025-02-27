import { expect, test } from "@playwright/test";

test.describe('checkbox', () => {
  const targetUrl = '/input/button'
  test('if visit page, checkbox is not checked and 체크박스값: 거짓 is shown', async ({ page }) => {
    await page.goto(targetUrl);
    await expect(page.getByLabel('체크박스')).not.toBeChecked();
    await expect(page.getByText('체크박스값: 거짓', { exact: true })).toBeVisible();

  })

  test('if click checkbox, checkbox is checked and "체크박스값: 참 ', async ({ page }) => {
    await page.goto(targetUrl);
    const checkbox = page.getByLabel('체크박스');
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await expect(page.getByText('체크박스값: 참', { exact: true })).toBeVisible();
  })

  test.describe('radio', () => {
    test('if visit page, only apple radio is checked and "라디오값: apple" is shown', async ({ page }) => {
      await page.goto(targetUrl);
      expect(page.getByText('라디오값: apple'))

    })

    test('checked mango and "라디오값: mango" is shown', async ({ page }) => {
      await page.goto(targetUrl);
      const mangoBtn = page.getByLabel('mango')
      await mangoBtn.click()
      expect(page.getByText('라디오값: mango'))

    })
  })
})