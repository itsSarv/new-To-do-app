import { Col, Container, Row } from "react-bootstrap";
import Title from "./components/Title";
import AddInputGroup from "./components/AddInputGroup";
import ListTask from "./components/ListTask";

function App() {
  return (
    <Container className="text-center">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Title title="TODO APP" />
          <AddInputGroup
            label="Add new Todo?"
            placeholder="Eg: Do Laundry"
            Buttonname="Add the task"
          />
          <ListTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
