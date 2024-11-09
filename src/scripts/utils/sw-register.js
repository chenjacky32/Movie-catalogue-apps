import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw-register.js');

  try {
    await wb.register();
    // await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker Registered');
  } catch (error) {
    console.log('Failed to Register service worker', error);
  }
};

export default swRegister;
