import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["NY", "SF", "Tokyo"];

  //for list group elements
  const handleSelection = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Alert>
        Hello World
      </Alert>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelection}/> */}
    </div>
  );
}

export default App;
