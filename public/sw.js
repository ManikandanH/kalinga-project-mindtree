self.addEventListener("install", event => {
});

self.addEventListener("push", e => {
  const data = e.data.json();
  if (Notification.permission == "granted") {
    self.registration.showNotification(data.title, {
      body: "Notified by Furnique!",
      icon:
        "https://cdn.iconscout.com/icon/free/png-192/google-forms-2-569456.png"
    });
  }
});
