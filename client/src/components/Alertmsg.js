import React from "react";
import { Alert } from "react-bootstrap";

function AlertMsg({ variant, msg }) {
  return (
    <>
      <Alert variant={variant || "secondary"}>
        {msg || "Message Placeholder"}
      </Alert>
    </>
  );
}

export default AlertMsg;
