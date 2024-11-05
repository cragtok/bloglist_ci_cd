// @ts-check
const { test, expect } = require("@playwright/test");

test("shows login page", async ({ page }) => {
    await page.goto("/login");

    const loginText = await page.getByRole("heading", { name: "Log In" });
    await expect(loginText).toBeVisible();

    const usernameText = await page
        .locator("label")
        .filter({ hasText: "Username:" });
    await expect(usernameText).toBeVisible();

    const passwordText = await page
        .locator("label")
        .filter({ hasText: "Password:" });
    await expect(passwordText).toBeVisible();

    const signInButton = await page.getByRole("button", { name: "Sign In" });
    await expect(signInButton).toBeVisible();

    const registerButton = await page.getByRole("button", { name: "Register" });
    await expect(registerButton).toBeVisible();
});

test("shows register page", async ({ page }) => {
    await page.goto("/register");
    {
        const registerText = await page.getByRole("heading", {
            name: "Register",
        });
        await expect(registerText).toBeVisible();

        const usernameText = await page
            .locator("label")
            .filter({ hasText: "Username:" });
        await expect(usernameText).toBeVisible();

        const nameText = await page
            .locator("label")
            .filter({ hasText: /Name/ });
        await expect(nameText).toBeVisible();

        const passwordText = await page
            .locator("label")
            .filter({ hasText: "Password:" });
        await expect(passwordText).toBeVisible();

        const signInButton = await page.getByRole("button", {
            name: "Sign In",
        });
        await expect(signInButton).toBeVisible();

        const registerButton = await page.getByRole("button", {
            name: "Register",
        });
        await expect(registerButton).toBeVisible();
    }
});
