import { Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function ViewTask({ label, status }) {
  const popupalert = () => {
    console.log("I am removed");
    Swal.fire({
      title: "Do you really want to delete the task?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Check
          type="checkbox"
          defaultChecked={status === "Completed" ? true : false}
          label={label || "Label Placeholder"}
        />
        <FaTrashAlt color="red" onClick={() => popupalert()} />
      </Form.Group>
    </>
  );
}

export default ViewTask;
