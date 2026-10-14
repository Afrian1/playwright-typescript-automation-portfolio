
import { test, expect } from '../fixtures/baseFixture';
import { HomePage } from '../pages/home.page';
import { validUser, invalidUser, loginData } from '../utils/testData';

// Test Case 1: Login sukses
test('LOGIN-001 - Login sukses dengan credential valid', async ({ loginPage, page }) => {
  await loginPage.goto();

  await loginPage.login(
    validUser.username,
    validUser.password
  );

  await test.step('1. Verifikasi redirect ke halaman secure', async () => {
    await expect(page).toHaveURL(/\/secure/);
  });

  await test.step('2. Verifikasi pesan sukses', async () => {
    await expect(loginPage.successMessage)
      .toContainText('You logged into a secure area!');
  });
});

// Test Case 2: Logout sukses
test('LOGOUT-002 - User berhasil logout', async ({ loginPage }) => {
  await loginPage.goto();

  await loginPage.login(
    validUser.username,
    validUser.password
  );

  const homePage = new HomePage(loginPage.page);

  await expect(loginPage.page).toHaveURL(/\/secure/);

  await test.step('1. Klik tombol Logout', async () => {
    await homePage.logout();
  });

  await test.step('2. Verifikasi kembali ke halaman login', async () => {
    await expect(loginPage.page).toHaveURL(/\/login/);
  });

  await test.step('3. Verifikasi pesan logout', async () => {
    await expect(homePage.successLogout)
      .toContainText('You logged out of the secure area!');
  });
});

// Test Case 3: Login gagal dengan credential invalid
test('LOGIN-003 - Login gagal dengan credential invalid', async ({ loginPage }) => {
  await loginPage.goto();

  await test.step('1. Login dengan credential invalid', async () => {
    await loginPage.login(
      invalidUser.username,
      invalidUser.password
    );
  });

  await test.step('2. Verifikasi pesan error', async () => {
    await expect(loginPage.errorMessage)
      .toContainText('Your username is invalid!');
  });

  await test.step('3. Pastikan tetap di halaman login', async () => {
    await expect(loginPage.page).toHaveURL(/\/login/);
  });
});

// Test Case 4 dan seterusnya: Data-driven negative testing
for (const [index, data] of loginData.entries()) {
  test(
    `LOGIN-${String(index + 4).padStart(3, '0')} - Negative login: ${data.username || 'empty username'}`,
    async ({ loginPage }) => {
      await loginPage.goto();

      await test.step('1. Submit login data', async () => {
        await loginPage.login(data.username, data.password);
      });

      await test.step('2. Verifikasi pesan error', async () => {
        await expect(loginPage.errorMessage)
          .toContainText(data.expectedError);
      });

      await test.step('3. Pastikan login tidak berhasil', async () => {
        await expect(loginPage.page).toHaveURL(/\/login/);
      });
    }
  );
}