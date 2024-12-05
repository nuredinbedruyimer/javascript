// Base Class: Notification
class Notification {
  send(message) {
    console.log(`Sending notification: ${message}`);
  }
}

// EmailNotification
class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending EMAIL with message: ${message}`);
  }
}

// SMSNotification
class SMSNotification extends Notification {
  send(message) {
    console.log(`Sending SMS with message: ${message}`);
  }
}

// PushNotification
class PushNotification extends Notification {
  send(message) {
    console.log(`Sending PUSH notification with message: ${message}`);
  }
}

const notifications = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification(),
];
console.log(new EmailNotification());

notifications.forEach((notification) => {
  notification.send("Hello, Polymorphism!");
});
