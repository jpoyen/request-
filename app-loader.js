/**
 * WARD IT REQUEST — GitHub Pages iframe loader
 * URL นี้ไม่ได้ปรากฏใน View Source ของ index.html
 * แต่ยังมองเห็นได้ในไฟล์ JS นี้และ Developer Tools / Network
 * จึงไม่ใช่มาตรการรักษาความลับหรือควบคุมสิทธิ์เข้าถึง
 */
(function () {
  'use strict';
  // ใส่ Web App URL ของ Deployment ล่าสุดที่ทดสอบว่า /exec เปิดแบบฟอร์มได้จริง
  const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxMdy9KA9DjECYe9CiOKdyY4O8DxbQ8twOaCQ-4rKcLMKDu-cNI2R4OD36SZ5FHHegPyQ/exec';

  function mountApp() {
    const target = document.getElementById('app');
    const fallback = document.getElementById('fallback');
    if (!target) return;
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?.*)?$/.test(GAS_WEB_APP_URL)) {
      if (fallback) fallback.style.display = 'block';
      return;
    }
    const iframe = document.createElement('iframe');
    iframe.src = GAS_WEB_APP_URL;
    iframe.title = 'WARD IT REQUEST';
    iframe.allow = 'clipboard-write';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.style.border = '0';
    target.replaceChildren(iframe);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp, { once: true });
  } else {
    mountApp();
  }
})();
