// hello.js
const { chromium } = require('playwright');

(async () => {
  // 1. 启动浏览器
  const browser = await chromium.launch({ headless: false }); // 设置 false 可以看到浏览器
  const page = await browser.newPage();

  // 2. 打开网页
  await page.goto('https://www.baidu.com');

  // 3. 截图保存
  await page.screenshot({ path: 'baidu.png' });

  // 4. 关闭浏览器
  await browser.close();

  console.log("截图已保存到 example.png");
})();