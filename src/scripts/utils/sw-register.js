const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker Registered');
  } catch (error) {
    console.log('Failed to Register service worker', error);
  }
};

export default swRegister;
