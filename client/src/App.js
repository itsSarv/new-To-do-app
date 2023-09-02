import Car from "./Car";

const cars = ["Ford", "Mustang", "Rolls-Royace", "Lambo"];
function App() {
  return (
    <>
      <Car color="blue" cars={cars}></Car>
    </>
  );
}

export default App;
