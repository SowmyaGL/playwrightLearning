import { test as setup } from '@playwright/test';
import fs from 'fs';

setup('authenticate', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[name='password']").fill('admin123');
  await page.locator("button[type='submit']").click();

  await page.waitForURL(/dashboard/);

  // ✅ Ensure directory exists
  const dir = '.auth';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // ✅ Save storage state for reuse
  await page.context().storageState({ path: `${dir}/user.json` });
});
