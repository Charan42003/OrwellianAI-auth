import React, { useState, useEffect } from "react";
import Sms from "react-native-sms";
// import showAlert from "./Utils";

const SMSListener = () => {
  const [Message, setMessage] = useState("");

  useEffect(() => {
    const subscription = Sms.addListener("onSMSReceived", (message) => {
      setMessage(message.body);
      console.log(Message);
      // showAlert(message.body);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return null;
};

export default SMSListener;
