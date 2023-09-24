import ExpoNotifications from "expo-notifications";

const showAlert = async (message) => {
  const notification = {
    title: "New SMS message",
    body: message,
  };

  await ExpoNotifications.scheduleNotificationAsync(notification);
};

export default showAlert;
