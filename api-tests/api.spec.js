import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

test.describe('API smoke tests', () => {
  test('GET / returns 200', async ({ request, baseURL }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
  });

  test('GET /inventory.html does not return server error', async ({ request }) => {
    const response = await request.get('/inventory.html');
    // inventory page may be protected or return 404 when unauthenticated; ensure no 5xx
    expect(response.status()).toBeLessThan(500);
  });

  test('Echo POST returns sent JSON (valid data)', async ({ request }) => {
    const usersPath = path.join(process.cwd(), 'api-tests', 'test-data', 'users.json');
    const usersRaw = await fs.readFile(usersPath, 'utf8');
    const users = JSON.parse(usersRaw);

    const res = await request.post('https://postman-echo.com/post', {
      data: users.valid,
      headers: { 'content-type': 'application/json' }
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.json.email).toBe(users.valid.email);
    expect(body.json.password).toBe(users.valid.password);
  });

  test('Echo POST with missing password returns payload without password', async ({ request }) => {
    const usersPath = path.join(process.cwd(), 'api-tests', 'test-data', 'users.json');
    const usersRaw = await fs.readFile(usersPath, 'utf8');
    const users = JSON.parse(usersRaw);

    const res = await request.post('https://postman-echo.com/post', {
      data: users.invalid,
      headers: { 'content-type': 'application/json' }
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.json.email).toBe(users.invalid.email);
    expect(body.json.password).toBeUndefined();
  });
});
