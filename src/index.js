import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // المحرك الذي يدمج هويتك كأديب بمهاراتك كمطور ومحلل بيانات

/**
 * ملف المدخل الرئيسي (Entry Point)
 * هنا نضمن تفعيل نظام الترجمة الشامل قبل رندر التطبيق
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);