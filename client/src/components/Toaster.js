import React, { useState } from "react";
import { Button, Col, Row, Toast, ToastContainer } from "react-bootstrap";

function Toaster() {
  const [show, setShow] = useState(true);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className="p-3" position="bottom-end">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
}

export default Toaster;
