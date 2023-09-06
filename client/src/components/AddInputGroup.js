import { Button, Form, InputGroup } from "react-bootstrap";

function AddInputGroup({ label, Buttonname, placeholder, variant }) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control placeholder={placeholder || "Place Holder"} />
        <Button variant={variant || "success"}>{Buttonname || "Button"}</Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
