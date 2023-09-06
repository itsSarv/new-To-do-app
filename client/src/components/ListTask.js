import { Accordion } from "react-bootstrap";
import AlertMsg from "./Alertmsg";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import SubtaskList from "./SubtaskList";

function ListTask({ tasks }) {
  tasks = [
    {
      _id: "1",
      title: "Task 1",
      status: "Pending",
      subtasks: [
        { _id: "1", title: "Task 1", status: "Pending" },
        { _id: "2", title: "Task 2", status: "Pending" },
        { _id: "3", title: "Task 3", status: "Completed" },
      ],
    },
    {
      _id: "2",
      title: "Task 1",
      subtasks: [
        { _id: "1", title: "Task 1", status: "Completed" },
        { _id: "2", title: "Task 2", status: "Pending" },
        { _id: "3", title: "Task 3", status: "Completed" },
      ],
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length > 0 ? (
        tasks.map((tasks, index) => {
          return (
            <Accordion.Item key={tasks?._id} eventKey={index}>
              <Accordion.Header>{tasks?.title || ""}</Accordion.Header>
              <AccordionBody>
                <SubtaskList subtasks={tasks?.subtasks} />
              </AccordionBody>
            </Accordion.Item>
          );
        })
      ) : (
        <AlertMsg
          variant="danger"
          msg="No task Found. Add task to get Started..."
        />
      )}
    </Accordion>
  );
}

export default ListTask;
