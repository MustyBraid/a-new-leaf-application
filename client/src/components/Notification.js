//Testing Notification. Will delete later
// One Min: 60*1000, Day: 1000*60*60*24};

let timer = null;

export const timeOptions = {
  Min: 60,
  Everyday: 60 * 60 * 24,
  Week: 60 * 60 * 24 * 7,
};

export function setupTimer(timeSelected) {
  timer = setInterval(showNotification, timeSelected * 1000);
  console.log(timer);
}

//what is displayed on the notification
export function showNotification() {
  console.log("showNotification");
  const notification = new Notification("Water Plant!", {
    body: "Don't forget to water your plant 🚿",
  });
}

//kills timer
export function stopNotification() {
  clearTimeout(timer);
}

if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
  });
}
