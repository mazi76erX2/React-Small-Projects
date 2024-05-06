import { useEffect, useState } from "react";
import Button from "./Button";

export default function Alert({
  type,
  message,
  delay = false,
  delayTime = 3000,
}) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");

    setTimeout(() => {
      setShowAlert(false);
    }, 400);
  };

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delayTime);
  });

  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <div className="alert-close">
          <span className="mr1">{message}</span>
          <Button btnClass={"btn-close"} text={"x"} onClick={closeAlert} />
        </div>
      </div>
    )
  );
}
