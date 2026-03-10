# qa-playwright-api-automation

Kısa açıklama
- Playwright ve JavaScript ile hazırlanmış örnek API ve UI smoke testleri içeren küçük bir repo. Saucedemo (UI) için page-object örnekleri ve basit API kontrol testleri (postman-echo kullanılarak) bulunur.

Ne var burada
- `pages/` — Page object dosyaları (`loginPage.js`, `productPage.js`, `cartPage.js`)
- `tests/` — Playwright test spec dosyaları (UI)
- `api-tests/` — Örnek API testleri ve test verisi
- `reports/linkedin_tests_report.html` — LinkedIn paylaşımı için görsel-yönelimli rapor (kopyala-yapıştır metinleriyle)

Gereksinimler
- Node.js (16+ önerilir)
- npm
- (Opsiyonel) `ffmpeg` — GIF dönüştürme için (bu repo artık GIF scriptlerini içermez)

Hızlı başlangıç
1. Bağımlılıkları yükleyin:

```bash
npm install
npx playwright install
```

2. Tüm testleri çalıştırın:

```bash
npm test
```

3. Sadece API testlerini çalıştırmak için:

```bash
npx playwright test tests/api-wrapper.spec.js
```

LinkedIn raporu
- `reports/linkedin_tests_report.html` dosyası paylaşım için hazır metinler, snippetler ve çalışma talimatları içerir. Dosyayı açıp (tarayıcıda veya VS Code preview) `Copy post` butonlarını kullanarak metni LinkedIn'e yapıştırabilirsiniz.

Temizlik ve Notlar
- Proje push'larken `node_modules/`, `artifacts/`, `test-results/` gibi büyük klasörler `.gitignore`'a eklendi.
- GIF ile ilgili geçici script ve dosyalar temizlendi.

Katkı
- Değişiklik yapmak isterseniz fork edip PR açın. Basit test genişletmeleri ve yeni API örnekleri memnuniyetle kabul edilir.

İletişim
- Repo: https://github.com/gulcannce/qa-playwright-api-automation
