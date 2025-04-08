import React, { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  // Use useEffect inside the component
  2Notification.jsx:31 Raw response: <!doctype html>
  <html lang="en">
    <head>
      <script type="module">
  import RefreshRuntime from "/@react-refresh"
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
  </script>
  
      <script type="module" src="/@vite/client"></script>
  
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx?t=1744123940632"></script>
    </body>
  </html>
  

  // Fetch data from API (if needed)
  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text(); // Use .text() to inspect the raw response
      })
      .then((data) => {
        console.log("Raw response:", data); // Debugging
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Notification</h1>
      <div className="mt-4 space-y-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            image={notification.image}
            status={notification.status}
            statusColor={notification.statusColor}
            message={notification.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;