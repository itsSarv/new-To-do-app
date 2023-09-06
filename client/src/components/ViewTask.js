import { Form } from "react-bootstrap";

function ViewTask({ label }) {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label={label} />
      </Form.Group>
    </div>
  );
}

export default ViewTask;
