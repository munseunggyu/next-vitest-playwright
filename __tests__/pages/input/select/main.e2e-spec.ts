import { expect, test } from "@playwright/test";

test.describe('checkbox', () => {
  const targetUrl = '/input/select'
  test('처음 방문 시 apple이 보임', async ({ page }) => {
    await page.goto(targetUrl);
    await expect(page.locator('#select')).toHaveValue('apple')
    
    await expect(page.getByText('선택된값: apple', { exact: true })).toBeVisible();
  })

  test('select 망고 선택시 망고가 보임', async ({ page }) => {
    const selected ='mango'
    await page.goto(targetUrl);
    const selectBtn = page.locator('#select');
    await selectBtn.selectOption(selected);

    await expect(selectBtn).toHaveValue(selected)
    await expect(page.getByText(`선택된값: ${selected}`, { exact: true })).toBeVisible();

  })

})