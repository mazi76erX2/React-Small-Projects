import React from "react";
import Alert from "../components/Alert";

const Alerts = () => {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful login"} />
      <Alert
        type={"info"}
        message={"Time triggered"}
        delay={true}
        delayTime={1000}
      />
    </div>
  );
};

export default Alerts;
