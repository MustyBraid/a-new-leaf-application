// One Min: 60*1000, Day: 1000*60*60*24};

let timer = null;

export function setupTimer(timeSelected = 60) {
  timer = setInterval(showNotification, timeSelected * 1000 /*Time Seclected*/);
  console.log(timer);
}

//what is displayed on the notification
export function showNotification() {
  console.log("showNotification");
  const notification = new Notification("Water Plant!", {
    icon: "./assets/waterCan.svg",
  });
}

//kills timer
export function stopNotification() {
  clearTimeout(timer);
}

//asking for permision to show notification
if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
  });
}